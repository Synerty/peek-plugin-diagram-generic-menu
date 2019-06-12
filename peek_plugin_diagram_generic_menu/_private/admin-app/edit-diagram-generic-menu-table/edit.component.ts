import {Component, OnInit} from "@angular/core";
import {
    extend,
    VortexService,
    ComponentLifecycleEventEmitter,
    TupleLoader
} from "@synerty/vortexjs";
import {DiagramGenericMenuTuple,
    diagramGenericMenuFilt
} from "@peek/peek_plugin_diagram_generic_menu/_private";
import {Ng2BalloonMsgService} from "@synerty/ng2-balloon-msg";


@Component({
    selector: 'pl-diagram-generic-menu-edit-diagram-generic-menu',
    templateUrl: './edit.component.html'
})
export class EditDiagramGenericMenuComponent extends ComponentLifecycleEventEmitter {
    // This must match the dict defined in the admin_backend handler
    private readonly filt = {
        "key": "admin.Edit.DiagramGenericMenuTuple"
    };

    items: DiagramGenericMenuTuple[] = [];
    itemsToDelete: DiagramGenericMenuTuple[] = [];

    loader: TupleLoader;

    constructor(vortexService: VortexService,
                private balloonMsg:Ng2BalloonMsgService) {
        super();

        this.loader = vortexService.createTupleLoader(
            this, extend({}, this.filt, diagramGenericMenuFilt)
        );

        this.loader.observable
            .subscribe((tuples:DiagramGenericMenuTuple[]) => {
                this.items = tuples;
                this.itemsToDelete = [];
            });
    }

    addRow() {
        let t = new DiagramGenericMenuTuple();
        // Add any values needed for this list here, EG, for a lookup list you might add:
        // t.lookupName = this.lookupName;
        this.items.push(t);
    }

    removeRow(item) {
        if (item.id != null)
            this.itemsToDelete.push(item);

        let index: number = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }

    save() {
        let itemsToDelete = this.itemsToDelete;

        this.loader.save(this.items)
            .then(() => {
                if (itemsToDelete.length != 0) {
                    return this.loader.del(itemsToDelete);
                }
            })
            .then(() => this.balloonMsg.showSuccess("Save Successful"))
            .catch(e => this.balloonMsg.showError(e));
    }

}