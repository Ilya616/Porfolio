import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


	text: string = '';
	show:boolean=false;

	constructor() {
		this.showText();
/* 		setInterval(()=>{

			this.show=!this.show;
			
		},600) */

	}

	private showText() {
		let s: string[] = ["Front-End Developer.", "Back-End Developer."];
		let i: number = 0;
		let step: number = 100;
		let pause: number = 1000;
		let start: number = 0;
		let end: number = 0;
		let pFlag: boolean = false;
		let timeoutID;

		setInterval(
			() => {

				if (start < s[i].length) {
					this.text += s[i].substr(start, 1);
					start++;
					if (start == s[i].length) {
						timeoutID = setTimeout(() => {
							pFlag = true;
							clearTimeout(timeoutID);
						}, pause)

					}

				}
				else if (pFlag == true) {

					this.text= s[i].substr(0, s[i].length - end - 1);
					
					end++;
					if (end == s[i].length) {
						end = 0;
						start = 0;
						if (i < s.length-1) i++;
						else i = 0;
						pFlag = false;

					}

				}


			}, step);

	}


	ngOnInit(): void {
	}

}
