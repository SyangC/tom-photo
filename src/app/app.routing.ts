// Angular core
import {Routes, RouterModule} from "@angular/router";

// Components
import {HomeComponent} from "./home/home.component";

const APP_ROUTES: Routes = [
    {
        path: "",
        component: HomeComponent
    }
];

export const routing = RouterModule.forRoot(APP_ROUTES);