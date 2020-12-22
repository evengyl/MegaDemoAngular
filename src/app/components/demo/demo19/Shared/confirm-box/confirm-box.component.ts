import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';


@Component({
  selector: 'app-confirm-box',
  templateUrl: './confirm-box.component.html',
	styleUrls: ['./confirm-box.component.scss']
})
export class ConfirmBoxComponent implements OnInit {

  @Input() Message : string; //va indiquer au parent le massage que l'on veux delete

  constructor(private thisBox : NbDialogRef<ConfirmBoxComponent>) { } 

  ngOnInit(): void {
  }

  yes(){
    this.thisBox.close(true)
  }

  no(){
    this.thisBox.close(false)
  }

}
