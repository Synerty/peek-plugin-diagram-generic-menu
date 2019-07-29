import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {EditObjectGenericMenuComponent} from "./edit-object-generic-menu-table/edit.component";
import {EditSettingComponent} from "./edit-setting-table/edit.component";


// Import our components
import {ObjectGenericMenuComponent} from "./objectGenericMenu.component";

// Define the routes for this Angular module
export const pluginRoutes: Routes = [
    {
        path: '',
        component: ObjectGenericMenuComponent
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
    declarations: [ObjectGenericMenuComponent, EditObjectGenericMenuComponent, EditSettingComponent]
})
export class ObjectGenericMenuModule {

}
