import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-page-with-video',
	templateUrl: './page-with-video.component.html',
	styleUrls: ['./page-with-video.component.scss']
})
export class PageWithVideoComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		// Countdown js
		const second = 1000,
			minute = second * 60,
			hour = minute * 60,
			day = hour * 24;

		var countDown = new Date('Sep 30, 2019 00:00:00').getTime(),
			x = setInterval(function () {

				var now = new Date().getTime(),
					distance = countDown - now;

				this.document.getElementById('days').innerText = Math.floor(distance / (day)),
					this.document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
					this.document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
					this.document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

			}, second);
	}

}
