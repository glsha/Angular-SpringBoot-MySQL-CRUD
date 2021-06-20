import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path: 'product', component: ProductComponent},
  {path: '', redirectTo: 'product', pathMatch: 'full'},
  {path: 'update-product/:id', component: UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
