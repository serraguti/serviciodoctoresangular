import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { HomeComponent } from './components/home-component/home-component';
import { FormsModule } from '@angular/forms';
import { ServiceDoctores } from './services/service.doctores';
import { provideHttpClient } from '@angular/common/http';
import { DoctoresComponent } from './components/doctores-component/doctores-component';

@NgModule({
  declarations: [App, MenuComponent, HomeComponent, DoctoresComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), ServiceDoctores, provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
