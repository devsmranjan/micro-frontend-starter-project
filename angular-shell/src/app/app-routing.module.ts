import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule).catch((e) => console.log(e))
  },
  {
    path: 'checkout/:id',
    loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule).catch((e) => console.log(e))
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
