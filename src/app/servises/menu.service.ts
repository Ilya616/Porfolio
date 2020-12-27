
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class MenuService {
  constructor(private http: HttpClient) { }

  getSkills(){
  	return this.http.get("https://cc43004.tmweb.ru/db/menu.php");
  }
}