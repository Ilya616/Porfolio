import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactsService } from '../servises/contacts.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css',
  '/node_modules/bootstrap/dist/css/bootstrap.min.css'
]
})
export class ContactsComponent implements OnInit {

	formFlag;
	getFormFlag = false;
	email: string;
	name:string;
	msg:string;

	constructor(private contactsComponent:ContactsService) { }


	getForm(form: NgForm){
		this.getFormFlag = true;
		if(form.valid){
			this.data({
					name: form.value.name,
					email: form.value.email,
					msg: form.value.msg
				});
		}
	}

	data(data){
		this.contactsComponent.getContacts(data).subscribe((query:any) => {
			if(query.status == 1){
				this.formFlag = true;
			}
			else{
				this.formFlag = false;
			}
		});
	}

	ngOnInit(): void {
	}

}
