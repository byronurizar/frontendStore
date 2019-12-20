import { Component, OnInit, Output } from '@angular/core';
import { Products } from 'src/app/shared/model/e-commerce/product.model';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from 'src/app/shared/service/e-commerce/products.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shared/service/e-commerce/cart.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WishListService } from 'src/app/shared/service/e-commerce/wish-list.service';
import { ConectorApi } from 'src/app/servicios/conectorApi.service';
import { Producto } from 'src/app/modelos/producto.model';
import { ApiRest } from 'src/app/modelos/apiResponse.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  @Output() productDetail: any;

  @Output() productoDetalleVistaRapida: any;
  public productos: Producto[] = [];


  public items: Products[] = [];
  public products: Products[] = [];
  public allItems: Products[] = [];
  public tags: any[] = [];
  public tagsFilters: any[] = [];
  public uniqueProductColor: any;
  public lowPrice: 500;
  public highPrice: 1000;
  public productPrice: number;
  public colorArray: any;
  public sortByOrder: string = '';
  public check: boolean = false;
  public term: string

  constructor(private conectorApi: ConectorApi, private toastr: ToastrService, private productService: ProductsService, private route: ActivatedRoute, private cartService: CartService, private modalService: NgbModal, private wishService: WishListService) { }

  public onChangeSorting(val) {
    this.sortByOrder = val;
  }

  async listarProductos() {
    this.conectorApi.Get("productos/comercio/listar").subscribe(
      async (data) => {
        let dat = data as ApiRest;
        if(dat.codigo==0){
          this.productos =await dat.data;
          console.log("Productos",this.productos);
        }
        
      },
      (dataError) => {
        console.log("Data Error", dataError);
      }
    )
  }

  abrirDetalle(content, id: number) {
    this.modalService.open(content, { centered: true, size: 'lg' });
    this.productoDetalleVistaRapida=this.productos.find(item=>item.id==id);
  }

  showAdd() {
    this.toastr.success('User Added !');
  }




  public getTags(products) {
    var uniqueBrands = []
    var itemBrand = Array();
    products.map((product, index) => {
      if (product.tags) {
        product.tags.map((tag) => {
          const index = uniqueBrands.indexOf(tag);
          if (index === -1) uniqueBrands.push(tag);
        })
      }
    });
    for (var i = 0; i < uniqueBrands.length; i++) {
      itemBrand.push({ brand: uniqueBrands[i] })
    }
    this.tags = itemBrand
  }

  public updateTagFilters(tags: any[]) {
    this.tagsFilters = tags;
  }


  public updatePriceFilters(price: any) {
    let pricemin = price.value;
    let maxPrice = price.highValue;
    let items: any[] = [];
    this.productService.getProducts().subscribe((product) => {
      product.filter((item: Products) => {
        if (item.price >= pricemin && item.price <= maxPrice) {
          items.push(item); // push in array
        }
      });
      this.products = items;
    })

  }

  //image set
  detailCnt = [];
  slidesPerPage = 1;

  customOptions: any = {
    slider: 1,
    items: 1,
    margin: 30,
    loop: false,
    pagination: false,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
  }

  // add to cart service
  public addToCart(product: Products, quantity: number = 1) {
    this.cartService.addToCart(product, quantity);
  }

  //add to wish list service
  public addToWishlist(product: Products, quantity: number = 1) {
    this.wishService.addToWishList(product, quantity);
    this.showAdd();
  }

  // open quick view modal
  openProductDetail(content, id: number) {
    this.modalService.open(content, { centered: true, size: 'lg' });
    this.productService.getProduct(id).subscribe((product) => {
      this.productDetail = product;
    });
  }

  //decrement product quentity
  public decrement(product: any, quantity: number = -1) {
    this.cartService.updateCartQuantity(product, quantity)
  }

  //increment product quentity
  public increment(product: any, quantity: number = +1) {
    this.cartService.updateCartQuantity(product, quantity)
  }

  ngOnInit() {
    this.productService.getProducts().subscribe((product) => {
      this.products = product;
    });

    this.listarProductos();
  }
}
