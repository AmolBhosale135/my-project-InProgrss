import { NotFoundComponent } from "./component/not-found/not-found.component";
import { ContactComponent } from "./component/contact/contact.component";
import { PortfolioComponent } from "./component/portfolio/portfolio.component";
import { AboutUsComponent } from "./component/about-us/about-us.component";
import { HomeComponent } from "./component/home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "about-us",
    component: AboutUsComponent,
  },
  {
    path: "portfolio",
    component: PortfolioComponent,
  },
  {
    path: "contact",
    component: ContactComponent,
  },
  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
