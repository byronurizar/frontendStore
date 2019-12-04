import { Component, OnInit } from '@angular/core';
import { Mail } from '../../../shared/data/email/email';

export interface Email {
	id: number
	image: any
	name: string
	email: string
	date: string
	cc: string
	type: string
	text: any
	favourite: boolean
}


@Component({
	selector: 'app-emailApp',
	templateUrl: './emailApp.component.html',
	styleUrls: ['./emailApp.component.scss']
})
export class EmailAppComponent implements OnInit {

	public editorValue: string = '';

	public compose: boolean = true;
	public allEmails: Email[] = Mail.Emails;
	public selectEmail:any = {};
	public selectedEmails:any = [];
	public type: any;

	constructor() { }

	ngOnInit() { }

	getUserEmail(type) {
		let emails = [];
		return this.allEmails.filter(email => {

			if (type == 'allmail') {
				return emails.push(email)
			}
			else if (type == 'favourite') {
				if (email.favourite) {
					return emails.push(email)
				}
			}
			else if (email.type === type) {
				return emails.push(email)
			}
		})
	}

	selectedUserEmail(email) {
		this.selectEmail = email
		this.compose = false
	}

	selectedmail($event, email) {
		//  if ($event.target.checked === true) {
		//      this.selectedEmails.push(email)
		// 	 }
		var index = this.selectedEmails.indexOf(email);
		if ($event.target.checked === true && index === -1) {
			// val not found, pushing onto array
			this.selectedEmails.push(email)
		} else {
			// val is found, removing from array
			this.selectedEmails.splice(index, 1);
		}
	}

	moveEmails(val) {
		this.selectedEmails.filter((email) => {
			return email.type = val;
		})
	}

	addFavourite(email) {
		email.favourite = !email.favourite
	}


}
