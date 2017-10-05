import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {EditGenericDiagramMenuComponent} from "./edit-generic-diagram-menu-table/edit.component";
import {EditSettingComponent} from "./edit-setting-table/edit.component";


// Import our components
import {GenericDiagramMenuComponent} from "./genericDiagramMenu.component";

// Define the routes for this Angular module
export const pluginRoutes: Routes = [
    {
        path: '',
        component: GenericDiagramMenuComponent
    }

];

// Define the module
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(pluginRoutes),
        FormsModule
    ],
    exports: [],
    providers: [],
    declarations: [GenericDiagramMenuComponent, EditGenericDiagramMenuComponent, EditSettingComponent]
})
export class GenericDiagramMenuModule {

}
