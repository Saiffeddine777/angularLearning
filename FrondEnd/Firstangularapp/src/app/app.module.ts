import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAClientComponent } from './create-aclient/create-aclient.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientsComponent } from './clients/clients.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateAClientComponent,
    ClientsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
