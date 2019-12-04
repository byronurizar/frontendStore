import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Products } from "../../../shared/model/e-commerce/product.model";
import { ProductsService } from "../../../shared/service/e-commerce/products.service";
import { CartService } from '../../../shared/service/e-commerce/cart.service';
import { ContentDetail } from '../../../shared/model/e-commerce/content';
import { Image } from '@ks89/angular-modal-gallery';

export interface Contents {
  type: any;
  content_1: any;
  content_2: any;
}
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  providers: [NgbRatingConfig]
})


export class ProductDetailComponent implements OnInit {
  public product: Products = {};
  public products: Products[] = [];
  public detailCnt = [];
  public slidesPerPage = 4;
  public syncedSecondary = true;
  public allContent = [];
  public contents = [];
  public active: boolean = false;
  public type: string = "Febric"
  public nav: any;
  
  sliderOption={
    rtl:true,
			items : 1,
			slideSpeed : 2000,
			nav: false,
			autoplay: false,
			dots: false,
			loop: true,
			responsiveRefreshRate : 200
  }

  sliderNavOptions={
    vertical: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product-slick',
    arrows: false,
    dots: false,
    focusOnSelect: true
  }

  constructor(private router: Router, private route: ActivatedRoute, config: NgbRatingConfig, public productService: ProductsService, private cartService: CartService) {
    this.allContent = ContentDetail.ContentDetails;
    //for rating 
    this.allContent.filter(opt => {
      if (this.type == opt.type) {
        this.contents.push(opt);
      }
    });

    config.max = 5;
    config.readonly = false;

    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.productService.getProduct(id).subscribe((product) => {
        this.product = product;
      });
    });

  }
  getOption(type) {
    this.contents = [];
    return this.allContent.filter(data => {
      if (type == data.type) {
        this.active = true;
        return this.contents.push(data)
      } else {
        return false
      }
    })
  }

  public buyNow(product: Products, quantity: number = 1) {
    if (quantity > 0)
      this.cartService.addToCart(product, quantity);
    this.router.navigate(['/ecommerce/check-out']);
  }

  public addToCart(product: Products, quantity: number = 1) {
    if (quantity == 0) return false;
    this.cartService.addToCart(product, quantity);
  }

  ngOnInit() {
    this.productService.getProducts().subscribe((product) => {
      this.products = product;
      product.filter(ele => {
        this.nav = ele.img
      })
    });
  }

}
