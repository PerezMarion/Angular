import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, PreloadAllModules } from '@angular/router';
import { PageForgotPasswordComponent } from './login/pages/page-forgot-password/page-forgot-password.component';
import { PageResetPasswordComponent } from './login/pages/page-reset-password/page-reset-password.component';
import { PageSignInComponent } from './login/pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './login/pages/page-sign-up/page-sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: PageSignInComponent },
  // créer routes pour sign-up
  { path: 'sign-up', component: PageSignUpComponent },
  // créer routes pour reset
  { path: 'reset', component: PageResetPasswordComponent },
  // créer routes pour forgot
  { path: 'forgot', component: PageForgotPasswordComponent },
  // lazy loading = les composants ne sont chargés que si l'utilisateur
  // navigue vers /orders
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule),
  },
  // pour clients module
  {
    path: 'clients',
    loadChildren: () =>
      import('./clients/clients.module').then((m) => m.ClientsModule),
  },
  // chemin ** pour module page-not-found
  // vérifier que cela fonctionne
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then((m) => m.PageNotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
      {preloadingStrategy: PreloadAllModules}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router){
    console.log(this.router.config, 'tableau de routes');
  }
}