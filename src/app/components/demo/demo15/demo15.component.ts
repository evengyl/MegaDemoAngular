import { Component, OnInit } from '@angular/core';
import { Observable, interval, from, of, Subscription } from 'rxjs';

@Component({
	selector: 'app-demo15',
	templateUrl: './demo15.component.html',
	styleUrls: ['./demo15.component.scss']
})


export class Demo15Component implements OnInit {

	myObservable$: Observable<number>
	myObservable2$: Observable<number>
	dataOb$ : any

	numbTest : number
	numbIntervalNone : number
	strMessageObs : string
	Subscription : Subscription
	SubHidden : Subscription


	constructor() {}

	ngOnInit(): void {
	
		this.myObservable$ = interval(1000);    // le $ est une convention de nommage pour désigner un observable
	

		this.Subscription = this.myObservable$.subscribe(
		{
			next : (value) => { this.numbTest = value},
			error : () => { this.strMessageObs = "End of Observable" },
			complete : () => { this.strMessageObs = "End of Observable" }
		})
	}


	unSub(){
		//on peux donc se désabonner
		this.Subscription.unsubscribe(); //détruire l'Observable (c'est à dire interrompre les traitements effectués par l'Observable) si celui-ci est de type "cold" ;
	
	}

	unSubAfter(sec : number){
		setTimeout(() => this.Subscription.unsubscribe(), sec*1000);
	}

}
