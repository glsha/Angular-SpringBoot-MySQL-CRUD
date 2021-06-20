import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 
  products: Product[] = [];
   
  info : string = "";
  
  //creating object for taking in new products
  product: Product = new Product();

  constructor(private productService: ProductService, private router: Router, 
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  //for getting all the products in the table 
  private getProduct(){
    this.productService.getProductList().subscribe(data => {
      this.products = data;
    });
  }

  //Create Product
  onSubmit(){
    if(this.product.name == ""){
      this.toastr.warning( 'Product name cannot be empty' ); 
    }
    else if(this.product.name == "fonepay"){
      this.toastr.error( 'Product name cannot be FONEPAY' ); 
    }
    else{
      console.log(this.product);
    this.saveProduct();
    this.toastr.success( 'Product created!' ); 
    }
    
  }
  saveProduct(){
    this.productService.createProduct(this.product).subscribe(data =>{
      console.log(data);
    },
    error => console.log(error));
  } 

  //Update Product
  updateProduct(id:number){
      this.router.navigate(['update-product', id]);
      this.toastr.warning( 'Product created!'); 
  }

  deleteProduct(product : Product){
    this.productService.deleteProduct(product).subscribe(
      () => (this.products = this.products.filter(d => d.id != product.id))
    );

    this.toastr.warning( 'Product Deleted!'); 
     
  }

  updateNew(product: Product) {
    console.log(product);
    this.info = "Update working successful!!";
    console.log("Update working successful!!");
    this.productService.updateProduct(product).subscribe(data => this.products.push(product));

    this.toastr.warning( 'Product Updated!'); 
  }

}
