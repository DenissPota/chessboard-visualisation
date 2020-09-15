import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {

  isStarted: boolean = false;
  timerSeconds: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  setTimer(timerSeconds: number) {
    this.timerSeconds = timerSeconds;
  }


}
