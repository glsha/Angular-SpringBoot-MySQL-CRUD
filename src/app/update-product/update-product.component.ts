import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  products: Product[] = [];
  product: Product = new Product();

  constructor(private productService: ProductService,
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    
  }

  onSubmit(product: Product){
    console.log(product);
    this.productService.updateProduct(product).subscribe( data =>
      this.products.push(product));
    
    
  //, error => console.log(error));
  }


}
