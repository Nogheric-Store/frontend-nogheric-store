import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: 'catalog',
        loadChildren: () => import ('./pages/catalog/catalog.module').then((m) => m.CatalogModule)
    },
    {
        path:'**', //TODO: IF NO EXIST THE ROUTE
        redirectTo:'/catalog'
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule {}
