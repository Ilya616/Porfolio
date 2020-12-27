
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class ContactsService {
  constructor(private http: HttpClient) { }

  getContacts(data){
  	return this.http.post('https://cc43004.tmweb.ru/contact.php', data);
  }
}