import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import * as ChessBoard from 'chessboardjs/www/js/chessboard';
import {BoardPositionService} from "../../service/board-position.service";
import {BoardPosition} from "../interface/board-position";
import {interval, Observable} from 'rxjs';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.css']
})
export class ChessboardComponent implements AfterViewInit {

  private boardPositionService: BoardPositionService;
  board1: ChessBoard;
  guessingPhase: boolean = false;
  winning: String;
  currentBoardPosition: BoardPosition;
  @Input()
  seconds: number;

  constructor(boardPositionService: BoardPositionService) {
    this.boardPositionService = boardPositionService;
  }

  ngOnInit(): void {
    this.getRandomPosition();
    this.decreaseTimer()
  }

  ngAfterViewInit() {
    this.board1 = ChessBoard('board1', {
      draggable: true,
      position: this.currentBoardPosition.fen
    });
  }

  decreaseTimer() {
    const interval = setInterval(() => {
      this.seconds--;
      if (this.seconds === 0) {
        clearInterval(interval);
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

    this.board1 = ChessBoard('board1', {
      draggable: true,
      sparePieces: true,
    });
  }

  compareGuess() {
    console.log(this.currentBoardPosition.fen);
    console.log(this.board1.fen());
    if (this.currentBoardPosition.fen === this.board1.fen()) {
      this.winning = "You are correct!"
    } else {
      this.winning = "Wrong!"
    }
  }

}

