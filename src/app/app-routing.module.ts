import { MovieComponent } from './movie/movie.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenreComponent } from './genre/genre.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '',redirectTo:'home',pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'genres',component:GenreComponent},
  {path:'register',component: RegisterComponent},
  { path: 'movie/:movieID', component: MovieComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
