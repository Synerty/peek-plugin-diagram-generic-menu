import {Injectable, Optional} from "@angular/core";

import {DiagramItemPopupService, DiagramItemPopupContextI} from "@peek/peek_plugin_diagram/DiagramItemPopupService";
import {PrivateGenericTupleService} from "./PrivateGenericTupleService";
import {GenericDiagramMenuTuple} from "../tuples/GenericDiagramMenuTuple";
import {ComponentLifecycleEventEmitter,
TupleSelector} from "@synerty/vortexjs";

/** DMS Diagram Item Popup Service
 *
 * This service allows other plugins to add information to the item select popups.
 *
 * This is a helper service to simplify integrations with the diagram.
 *
 */
@Injectable()
export class PrivateGenericMenuService extends ComponentLifecycleEventEmitter {

    private menus:GenericDiagramMenuTuple [] = [];

    constructor(@Optional() private diagramPopup:DiagramItemPopupService,
                private tupleService:PrivateGenericTupleService) {
        super();

        this.tupleService.tupleDataOfflineObserver
            .subscribeToTupleSelector(new TupleSelector(GenericDiagramMenuTuple.tupleName, {}))
            .subscribe((tuples:GenericDiagramMenuTuple[]) => this.menus = tuples);


        if (this.diagramPopup != null) {
            this.diagramPopup
                .itemPopupObservable()
                .takeUntil(this.onDestroyEvent)
                .subscribe((context: DiagramItemPopupContextI) => {
                    this.addMenus(context);
                });

        }


    }


    private addMenus(context: DiagramItemPopupContextI) :void {
        for (let menu of this.menus) {
            if (!(context.modelSetKey == menu.modelSetKey || menu.modelSetKey == null))
                continue;

            if (!(context.coordSetKey == menu.coordSetKey || menu.coordSetKey == null))
                continue;

            let url = menu.url;
            url = url.replace("{key}", context.key);

            let keys = Object.getOwnPropertyNames(context.data);
            for (let key of keys) {
                let val = context.data[key] == null ? '' : context.data[key];
                url = url.replace(`{${key}}`, val);
            }

            context.addMenuItem({
                name: menu.title,
                tooltip: null,
                icon: menu.faIcon,
                callback: () => this.menuClicked(menu, url),
                children: [],
                closeOnCallback:true
            });
        }
    }

    private menuClicked(menu:GenericDiagramMenuTuple, url:string) : void  {
        window.open(url);
    }

}