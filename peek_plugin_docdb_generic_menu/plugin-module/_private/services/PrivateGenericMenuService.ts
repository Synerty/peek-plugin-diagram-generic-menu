import {Injectable} from "@angular/core";

import {
    DocDbPopupContextI,
    DocDbPopupService,
    DocDbPopupTypeE
} from "@peek/peek_plugin_docdb";
import {PrivateGenericTupleService} from "./PrivateGenericTupleService";
import {DocDbGenericMenuTuple} from "../tuples/DocDbGenericMenuTuple";
import {ComponentLifecycleEventEmitter, TupleSelector} from "@synerty/vortexjs";

/** DMS Object Item Popup Service
 *
 * This service allows other plugins to add information to the item select popups.
 *
 * This is a helper service to simplify integrations with the object.
 *
 */
@Injectable()
export class PrivateGenericMenuService extends ComponentLifecycleEventEmitter {

    private menus: DocDbGenericMenuTuple [] = [];

    private readonly PLACEHOLDER_REGEXP = /(?<![$])\{([A-Za-z0-9_.]+)\}/gi;

    constructor(private objectPopupService: DocDbPopupService,
                private tupleService: PrivateGenericTupleService) {
        super();

        this.tupleService.tupleDataOfflineObserver
            .subscribeToTupleSelector(new TupleSelector(DocDbGenericMenuTuple.tupleName, {}))
            .subscribe((tuples: DocDbGenericMenuTuple[]) => this.menus = tuples);

        this.objectPopupService
            .popupObservable(DocDbPopupTypeE.summaryPopup)
            .takeUntil(this.onDestroyEvent)
            .subscribe((c: DocDbPopupContextI) => this.handlePopup(c));

        this.objectPopupService
            .popupObservable(DocDbPopupTypeE.detailPopup)
            .takeUntil(this.onDestroyEvent)
            .subscribe((c: DocDbPopupContextI) => this.handlePopup(c));

    }

    private handlePopup(context: DocDbPopupContextI): void {
        if (context.key == null)
            return;

        const doc = context.document == null ? null : context.document.document;

        for (const menu of this.menus) {
            if (!(context.modelSetKey == menu.modelSetKey || menu.modelSetKey == null))
                continue;

            if (menu.url == null || menu.url.length == 0)
                return;

            // Get the two values we need to work with
            let url = menu.url;
            let condition = menu.showCondition == null ? '' : menu.showCondition;

            if (condition.length != 0) {
                if (condition.indexOf('==') == -1) {
                    console.log("ERROR: There is no == in menu condition, skipping menu");
                    return;
                }
            }

            // Make note of all the parameter lists, and replace all the parameters
            // with lower case.
            let paramList: { [key: string]: true } = {};
            url = this.replaceParams(url, paramList);
            condition = this.replaceParams(condition, paramList);

            const keys = Object.keys(doc);
            for (let key of keys) {
                let val = doc[key] == null ? '' : doc[key];
                key = key.toLowerCase();
                url = url.replace(`{${key}}`, val);
                condition = condition.replace(`{${key}}`, val);
            }

            if (condition.length != 0) {
                const parts = condition.toLowerCase().split('==');
                if (parts[0].trim() != parts[1].trim())
                    return;
            }

            context.addAction({
                name: menu.title,
                tooltip: menu.tooltip,
                icon: menu.faIcon,
                callback: () => this.menuClicked(menu, url),
                children: [],
                closeOnCallback: true
            });
        }
    }

    private replaceParams(thing, paramList: { [p: string]: true }) {
        let matches = thing.match(this.PLACEHOLDER_REGEXP);
        if (matches != null) {
            for (let param of matches) {
                const lower = param.toLowerCase();
                thing = thing.replace(param, lower);
                paramList[lower.replace('{', '').replace('}', '')] = true;
            }
        }
        return thing;
    }

    private menuClicked(menu: DocDbGenericMenuTuple, url: string): void {
        window.open(url);
    }

}