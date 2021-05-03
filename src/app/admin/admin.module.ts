import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material/material';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';


const routes : Routes = [
  {
    path: '',
    component: AdminComponent,
    children:[
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'product',
        component: ProductComponent
      },{
        path: '',
        pathMatch: 'full',
        redirectTo: '/admin/dashboard'
      }
    ]
  }
]

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    GalleryComponent,
    ImageUploaderComponent,
    ProductDetailComponent,
    ProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    ImageCropperModule
  ]
})
export class AdminModule { }
