import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { LoginComponent } from './admin/login/login.component';
import { DiarioComponent } from './diario/diario.component';
import { ObrasConcluidasComponent } from './diario/obras-concluidas/obras-concluidas.component';
import { ObrasFuturasComponent } from './diario/obras-futuras/obras-futuras.component';
import { ObrasAtuaisComponent } from './diario/obras-atuais/obras-atuais.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    LoginComponent,
    DiarioComponent,
    ObrasConcluidasComponent,
    ObrasFuturasComponent,
    ObrasAtuaisComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
