import { Routes } from "@angular/router";
import { HomeComponent } from "./navigation/home/home.component";
import { ContactComponent } from "./institutional/contact/contact.component";
import { AboutComponent } from "./institutional/about/about.component";
import { DataBindingComponent } from "./demos/data-binding/data-binding.component";
import { ProductsListComponent } from "./products/products-list/products-list.component";
import { RegisterComponent } from "./demos/reactiveforms/register/register.component";

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'about', component: AboutComponent},
    { path: 'feature-data-binding', component: DataBindingComponent},
    { path: 'products', component: ProductsListComponent},
    { path: 'product-detail/:id', component: ProductsListComponent},
    { path: 'register', component: RegisterComponent},
];