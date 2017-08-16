// Angular core
import {Routes, RouterModule} from "@angular/router";

// Components
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {AboutComponent} from "./about/about.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {StoreComponent} from "./store/store.component";

const APP_ROUTES: Routes = [
    {
        path: "",
        component: HomeComponent
    }, {
        path: "contact",
        component: ContactComponent
    }, {
        path: "about",
        component: AboutComponent
    }, {
        path: "portfolio",
        component: PortfolioComponent
    }, {
        path: "store",
        component: StoreComponent
    }
];

export const routing = RouterModule.forRoot(APP_ROUTES);