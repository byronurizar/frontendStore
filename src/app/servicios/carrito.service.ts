import { Injectable } from "@angular/core";
import { BehaviorSubject, Subscriber, Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from "../shared/service/e-commerce/products.service";
import { ToastrService } from "ngx-toastr";

let productos = JSON.parse(localStorage.getItem("carritoItems")) || [];
@Injectable({
  providedIn: 'root'
})
export class Carrito {
  public cartItems: BehaviorSubject<any[]> = new BehaviorSubject([]);
  public observer: Subscriber<{}>;

  constructor(private route: ActivatedRoute, private productService: ProductsService, private toastrService: ToastrService) {
    this.cartItems.subscribe(productos => productos = productos);
    console.log("cartItems",this.cartItems);
  }

  getTodos(): Observable<any[]> {
    const itemsList = new Observable(observer => {
      observer.next(productos);
      observer.complete();
    });
    return <Observable<any[]>>itemsList;
  }


  public agregarProducto(producto:any,cantidad:number,idColor:number,idTalla:number){
    let nuevoProducto:any;
    let productoExistente=productos.find((items,index)=>{
      if(items.producto.id==producto.id){
        let idTallaActual=productos[index].idTalla;
        let idColorActual=productos[index].idColor;
        if(idTallaActual==idTalla){
          if(idColorActual==idColor){
            let cantidadTotal=parseInt((productos[index].cantidad))+ parseInt(''+cantidad);
            productos[index]["cantidad"]=cantidadTotal;
            this.toastrService.success('Producto agregado exitosamente');
            localStorage.setItem('carritoItems', JSON.stringify(productos));
            return true;
          }else{
            return false;
          }
        }else{
          return false;
        }
      }
    });

    if(!productoExistente){
      nuevoProducto={producto:producto,cantidad:cantidad,idColor:idColor,idTalla:idTalla};
      productos.push(nuevoProducto);
      this.toastrService.success('Producto agregado exitosamente');
    }
    localStorage.setItem('carritoItems', JSON.stringify(productos));
    return true;

  }

  public getCantidadTotal(){
    return this.cartItems.map((producto: any[]) => {
      return productos.reduce((prev, curr: any) => {
        return prev + curr.producto.precio * curr.cantidad;
      }, 0);
    });
  }

  public eliminarItem(item:any){
    if (item === undefined){
      return false;
    }else{
    const index = productos.indexOf(item);
    productos.splice(index, 1);
    localStorage.setItem('carritoItems', JSON.stringify(productos));
    }
  }

  public actualizarCantidad(item:any,cantidad:number){
    return productos.find((items, index) => {
      if (items.producto.id == item.producto.id) {
        let idTallaActual=productos[index].idTalla;
        let idColorActual=productos[index].idColor;
        if(idTallaActual==item.idTalla){
          if(idColorActual==item.idColor){
            let cantidadTotal=parseInt(productos[index].cantidad)+cantidad;
            productos[index]["cantidad"]=cantidadTotal;
            localStorage.setItem('carritoItems', JSON.stringify(productos));
            if(cantidadTotal<=0){
              this.eliminarItem(item);
            }
            return true;
          }
        }
      }
    });
  }

}
