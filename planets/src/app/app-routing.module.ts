import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LatestComponent } from './latest/latest.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [{
      path: 'latest',
      component: LatestComponent,
    },
    {
      path: 'about',
      component: AboutComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}