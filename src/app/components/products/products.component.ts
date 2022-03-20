import { Component, OnInit } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { ProductService } from '../../Service/product.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  postList?:IProduct[]
  errMsg:string=''
  constructor(private activatedRoute:ActivatedRoute,private postSrv:ProductService,private router:Router) { }


  

  ngOnInit(): void {
    this.postSrv.getAllPosts().subscribe(postData=>{
      this.postList=postData
    },
    error=>{
      this.errMsg=error
    })
  }
  getProdDetails(id:number){
    this.router.navigate([id],{relativeTo:this.activatedRoute})

  }

}


