import { Component, OnInit } from '@angular/core';
/** Importing the message service */
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  /** Constructor to declaree a public message service property */
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
