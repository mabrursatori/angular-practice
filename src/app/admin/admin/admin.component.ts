import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
title:any;
  constructor() {
    this.title = 'Products';
   }

  ngOnInit(): void {
  }

  mode: string = 'side';

  menu=[
    {
      name:'Dashboard',
      icon:'dashboard',
      url:'/admin/dashboard'
    },
    {
      name:'Products',
      icon:'camera_enhance',
      url:'/admin/product'
    },
    {
      group:'Menu Group',
      children:[
        {
          name:'Image Gallery',
          icon:'images',
          url:'/admin/gallery'
        }
      ]
    }
  ];

}
