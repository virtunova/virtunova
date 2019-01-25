import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoboComponent } from './cobo/cobo.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'cobo', component: CoboComponent, data: { animation: 'CoboPage' } },
  { path: 'about', component: AboutComponent, data: { animation: 'AboutPage' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'ContactPage' } },
  { path: '', redirectTo: '/home', pathMatch: 'full', },
  { path: '**', component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
