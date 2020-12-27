import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../servises/skills.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

	loader = false;
	skills;

	constructor(private skillsService: SkillsService) { 
		this.data();
	}

	data(){
		
		this.skillsService.getSkills().subscribe((query:any)=>{
			this.loader = true;
			this.skills = query;
		});
	}

	ngOnInit(): void {
	}

}
