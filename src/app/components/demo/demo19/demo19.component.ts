import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { ConfirmBoxComponent } from './Shared/confirm-box/confirm-box.component';

@Component({
  selector: 'app-demo19',
  templateUrl: './demo19.component.html',
	styleUrls: ['./demo19.component.scss']
})

export class Demo19Component implements OnInit {

  text : string[] = []


  constructor(private _box : NbDialogService,
              private _toast : NbToastrService) { }

  ngOnInit(): void {

    this.text.push("Text 1")
    this.text.push("Text 2")
    this.text.push("Text 3")
    this.text.push("Text 4")
    this.text.push("Text 5")
    this.text.push("Text 6")
  }


  delete(id : number)
  {
    let ref = this._box.open(ConfirmBoxComponent, {
      context : { Message : this.text[id] },
      closeOnBackdropClick : false
    })


    ref.onBackdropClick.subscribe(
      () => {
        ref.close()
      }
    )

    ref.onClose.subscribe(data => {
      if(data) this.text.splice(id, 1)

      this.showToast(2500, "success")
    })
  }


  showToast(duration, status)
  {
    this._toast.show(
      "Message",
      "Title",
      { duration, status }
    )
  }
  
}