import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImagenesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
	files: File[] = [];

	onFilesAdded(event) {
		console.log(event);
		this.files.push(...event.addedFiles);
	}

	onFilesRejected(event) {
		console.log(event);
	}

	onRemove(event) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
  }
  
  registrarImagenes(){
    console.log("Imagenes",this.files);
  }
}
