import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import * as ChessBoard from 'chessboardjs/www/js/chessboard';
import {BoardPositionService} from "../../service/board-position.service";
import {BoardPosition} from "../interface/board-position";
import {timeInterval} from "rxjs/operators";

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.css']
})
export class ChessboardComponent implements OnInit {

  @Input()
  seconds: number;

  private boardPositionService: BoardPositionService;

  board1: ChessBoard;
  guessingPhase: boolean = false;
  isGuessCorrect: boolean;
  currentBoardPosition: BoardPosition;
  initialTime: number;
  interval: any;

  constructor(boardPositionService: BoardPositionService) {
    this.boardPositionService = boardPositionService;
  }

  ngOnInit(): void {
    this.initialTime = this.seconds;
    this.getRandomPosition();
    this.decreaseTimer()
    this.board1 = new ChessBoard('board1', {
      draggable: true,
      position: this.currentBoardPosition.fen
    });
  }

  decreaseTimer() {
    this.interval = setInterval(() => {
      this.seconds--;
      if (this.seconds === 0) {
        clearInterval(this.interval);
        this.clearBoard();
      }
    }, 1000)
  }

  getRandomPosition(): void {
    this.boardPositionService.getRandomPosition()
      .subscribe(boardPosition => this.currentBoardPosition = boardPosition);
  }

  clearBoard() {
    this.guessingPhase = true;
    this.board1.clear();

    this.board1.destroy();
    this.board1 = new ChessBoard('board1', {
      draggable: true,
      dropOffBoard: 'trash',
      sparePieces: true,
    });
  }

  compareGuess() {
    console.log(this.currentBoardPosition.fen);
    console.log(this.board1.fen());
    this.isGuessCorrect = this.currentBoardPosition.fen === this.board1.fen();
  }

  restartComponent() {
    clearInterval(this.interval)
    this.seconds = this.initialTime;
    this.guessingPhase = false;
    this.isGuessCorrect = undefined;
    this.currentBoardPosition = undefined;
    this.board1 = undefined;
    this.ngOnInit()
  }

}

