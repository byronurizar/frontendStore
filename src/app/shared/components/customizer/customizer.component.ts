import { Component, OnInit } from '@angular/core';
import { CustomizerService } from '../../service/customizer.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss']
})
export class CustomizerComponent implements OnInit {
  public open : boolean = false
  public layoutSetting : any = "bodyLayout";
  public disableOthers : boolean=false;
  public data : any;
  public checked:boolean=false;
  public headerSetting : any = "header";

  constructor(public customize : CustomizerService,private modalService: NgbModal,private toastrService: ToastrService) { }

  ngOnInit() { 
    // this.data= this.customize.data
   }

  layout(val){
    this.customize.setLayoutType(val);
  }

   // Sidebar customizer Settings
   sublayoutSetting(val) {
    this.layoutSetting = val
  }

  menuLayout(val){
    this.customize.menuLayoutType(val)
  }

  sidebarLayout(val){
    if(this.customize.data.scroll=='native-scroll')
        val='custom-scrollbar'
    else
        val="native-scroll"
    this.customize.sidebarLayoutType(val)
  }

  sidebarNavLayout(val){
    if(this.customize.data.borderNavigation=="")
     this.customize.sidebarNavLayoutType(val)
    else
      this.customize.sidebarNavLayoutType(val="")
  }

  rightSidebarIconLayout(val){
    if(this.customize.data.rightSidebarIcon=="")
     this.customize.rightSidebarIconType(val)
    else
      this.customize.rightSidebarIconType(val="")
  }

  backgroungImageLayout(val){
    if(this.customize.data.backgroungImage=="")
     this.customize.backgroungImageType(val)
    else
      this.customize.backgroungImageType(val="")
  }
  checkSelected(e) {
    if(e.target.checked){
      this.checked=false;
      this.disableOthers = true;
    }
    else{
      this.disableOthers = false;
    }
 }

 defaultLayout(val){
   this.customize.defaultLayoutType(val)
 }

 headerLayoutSetting(val){
   this.headerSetting=val
 }

 headerLayout(val){
      this.customize.headerLayoutType(val)
 }

 brandLayout(val){
    this.customize.brandLayoutType(val)
 }

 navLayout(val){
  this.customize.navLayoutType(val)
 }

  //Display modal for copy config
  copyConfig(popup, data) {
    this.modalService.open(popup, { backdropClass: 'dark-modal', centered: true });
    data = this.customize.data
  }

   //Copy config
   copyText(data) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = JSON.stringify(data);
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.toastrService.show('<p class="mb-0 mt-1">Code Copied to clipboard</p>', '', { closeButton: true, enableHtml: true, positionClass: 'toast-bottom-right' });
  }
}
