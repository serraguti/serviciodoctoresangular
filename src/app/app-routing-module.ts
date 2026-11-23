import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { DoctoresComponent } from './components/doctores-component/doctores-component';

const routes: Routes = [
  {path: "", component: HomeComponent },
  { path: "doctores", component: DoctoresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
