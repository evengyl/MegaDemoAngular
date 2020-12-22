import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-demo18',
	templateUrl: './demo18.component.html',
	styleUrls: ['./demo18.component.scss']
})
export class Demo18Component implements OnInit {

	ColorDefineInParent: string
	MessageIntroByParent : string

	resultatFromChildren: boolean

	receivedChildMessage : string

	constructor() {
		this.MessageIntroByParent = "Bonjour je suis déclarer dans l'enfant, mais initialisé dans le parent"
	}

	ngOnInit(): void {
	}

	changeColor() {
		if (this.ColorDefineInParent == 'success')
			this.ColorDefineInParent = 'danger'

		else 
			this.ColorDefineInParent = 'success';
	}

	ChangeStatusByChildren(status: boolean) {
		this.resultatFromChildren = status;
	}


	getMessageByChild(message : string)
	{
		this.receivedChildMessage = message
	}

}
