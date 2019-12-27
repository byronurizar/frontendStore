import { Component, OnInit, ElementRef } from '@angular/core';
import { Invoice } from 'src/app/shared/model/e-commerce/invoice.model';
import { InvoiceService } from 'src/app/shared/service/e-commerce/invoice.service';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.scss']
})
export class DetallePedidoComponent implements OnInit {


  public date: Date = new Date();
  public orderDetails: Invoice = {};

  constructor(private invoiceService: InvoiceService,
    private elRef: ElementRef) {
  }

  ngOnInit() {
    this.orderDetails = this.invoiceService.getOrderItems();
  }
}
