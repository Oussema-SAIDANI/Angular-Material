import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { HomeComponent } from './components/home/home.component';
import { PanierComponent } from './components/panier/panier.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  {path : '' , component: HomeComponent },
  {path : 'panier' , component: PanierComponent },
  {path : 'checkout' , component: CheckoutComponent},
  {path : 'test' , component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
