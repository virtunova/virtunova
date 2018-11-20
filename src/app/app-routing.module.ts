import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoboComponent } from './cobo/cobo.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'cobo', component: CoboComponent, data: { animation: 'CoboPage' }
  },
  {
    path: 'home', component: HomeComponent, data: { animation: 'HomePage' }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**', component: PathNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
