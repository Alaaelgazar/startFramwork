import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { StartframeComponent } from './startframe/startframe.component';
import { PortofillioComponent } from './portofillio/portofillio.component';

const routes: Routes = [
  {path:"", redirectTo:"startFramwork", pathMatch:"full"},
  {path:"startFramwork", component:StartframeComponent},
  {path:"about" , component:AboutComponent},
  {path:"portfillo" , component:PortofillioComponent},
  {path:"contact" , component:ContactComponent},
  {path:"**" , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
