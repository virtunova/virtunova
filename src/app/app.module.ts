import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoboComponent } from './cobo/cobo.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
		NavbarComponent,
		CoboComponent,
		PathNotFoundComponent,
		HomeComponent,
		AboutComponent,
		ContactComponent,
  ],
  imports: [
    BrowserModule,
		AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
