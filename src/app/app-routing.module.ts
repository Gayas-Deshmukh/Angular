import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/routing/shopping-site/home/home.component';
import { ProductListComponent } from './components/routing/shopping-site/product-list/product-list.component';
import { CategoryComponent } from './components/routing/shopping-site/category/category.component';
import { SupportComponent } from './components/routing/shopping-site/support/support.component';
import { ElectronicComponent } from './components/routing/shopping-site/category/electronic/electronic.component';
import { JeweleryComponent } from './components/routing/shopping-site/category/jewelery/jewelery.component';
import { PageNotFoundComponent } from './components/routing/shopping-site/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:"" , component:HomeComponent,
  },
  {
    path:"product" , component:ProductListComponent
  },
  {
    path:"category" , 
    component:CategoryComponent,
    children:[ { path:'electronics' , component:ElectronicComponent },
               { path:'jewelery', component:JeweleryComponent}]
  },
  {
    path:"support" , component:SupportComponent
  },
  {
    path:'**' ,component:PageNotFoundComponent
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
