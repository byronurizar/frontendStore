import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CartItem } from 'src/app/shared/model/e-commerce/cart.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/shared/service/e-commerce/products.service';
import { CartService } from 'src/app/shared/service/e-commerce/cart.service';
import { InvoiceService } from 'src/app/shared/service/e-commerce/invoice.service';

@Component({
  selector: 'app-finalizar-pedido',
  templateUrl: './finalizar-pedido.component.html',
  styleUrls: ['./finalizar-pedido.component.scss']
})
export class FinalizarPedidoComponent implements OnInit {

  public cartItems: Observable<CartItem[]> = of([]);
  public checkOutItems: CartItem[] = [];
  public checkoutForm: FormGroup;
  public amount: number;
  public submitted = false;
  public userInfo: string;
  constructor(private fb: FormBuilder, public productService: ProductsService, private cartService: CartService, private invoiceService: InvoiceService) {
    this.createForm();
  }

  createForm() {
    this.checkoutForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      address: ['', [Validators.required, Validators.maxLength(50)]],
      town: ['', Validators.required],
      state: ['', Validators.required],
      postalcode: ['', Validators.required]
    });
  }
  
  onSubmit() {
    this.submitted = true;
    if (this.checkoutForm.invalid) {
      return;
    }
    this.userInfo = this.checkoutForm.value;
    this.invoiceService.createOrder(this.checkOutItems, this.userInfo, this.amount);
  }
  public getTotal(): Observable<number> {
    return this.cartService.getTotalAmount();
  }
  ngOnInit() {
    this.cartItems = this.cartService.getAll();
    this.cartItems.subscribe(products => this.checkOutItems = products);
    this.getTotal().subscribe(amount => this.amount = amount);
  }

}
