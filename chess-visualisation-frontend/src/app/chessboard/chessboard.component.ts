import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as ChessBoard from 'chessboardjs/www/js/chessboard';
import {BoardPositionService} from "../../service/board-position.service";
import {BoardPosition} from "../interface/board-position";

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

  constructor(boardPositionService: BoardPositionService) {
    this.boardPositionService = boardPositionService;
  }

  ngOnInit(): void {
    this.getRandomPosition();
  }

  ngAfterViewInit() {
    this.board1 = ChessBoard('board1', {
      draggable: true,
      //sparePieces:true,
      position: this.currentBoardPosition.fen
    });
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

