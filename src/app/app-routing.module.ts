import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ChildOneComponent } from './components/child-one/child-one.component';
import { ChildTwoComponent } from './components/child-two/child-two.component';
import { FormsComponent } from './components/forms/forms.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: '', redirectTo: '/test', pathMatch: 'full' },
  {
    path: 'test',
    component: TestComponent,
    children: [
      { path: 'child-one', component: ChildOneComponent },
      { path: 'child-two', component: ChildTwoComponent },
    ],
  },
  { path: 'forms', component: FormsComponent },
  { path: 'products', component: ProductsComponent },
  {
    path: 'accounts',
    loadChildren: () =>
      import('./accounts/accounts.module').then((m) => m.AccountsModule),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const appRoutings = [
  TestComponent,
  PageNotFoundComponent,
  ChildOneComponent,
  ChildTwoComponent,
  FormsComponent,
  ProductsComponent,
];
