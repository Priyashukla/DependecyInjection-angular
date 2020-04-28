import { Component, OnInit } from '@angular/core';
import {CanComponentDeactivate } from '../../guards/confirmation.guard';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements CanComponentDeactivate{
   messages:Array<{message:string}>=[];
   message:string="";
  
  addMessage()
  {
    this.messages.push({message:this.message});
    this.message="";
  }
  confirm()
  {
    return confirm("Are you sure to navigate away");
  }

}
