import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { PublicationComponent } from './pages/publication/publication.component';


const routes: Routes = [
  { path:'',redirectTo:'home',pathMatch:"full"},
  { path: "home", component: HomeComponent  },
  { path:"profil",component:ProfilComponent },
  { path:"pub",component:PublicationComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
