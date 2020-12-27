import { Component } from '@angular/core';
import { MenuService } from './servises/menu.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-step';

  menus;

  constructor(private skillsService: MenuService) { 
	  this.data();
  }

  data(){
	  
	  this.skillsService.getSkills().subscribe((query:any)=>{
		
		  this.menus = query;
		  console.log(this.menus);
	  });
  }


  btnMenuOn(evt){
  	let nav = document.querySelector(".nav");
	  let navWrap = document.querySelector(".nav-wrap");
	  let but = document.querySelector(".nav-wrap");

  	evt.classList.toggle("close");
	  navWrap.classList.toggle("active");
	  
  }
  itemMenuOn(){
  	let navWrap = document.querySelector(".nav-wrap");
  	let navBtn = document.querySelector(".nav-btn");

  	if(navBtn != null){
  		navBtn.classList.toggle("close");
  	}
	
  	navWrap.classList.toggle("active");
  }
}
