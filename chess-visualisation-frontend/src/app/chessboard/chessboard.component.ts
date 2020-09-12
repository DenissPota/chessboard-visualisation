import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as ChessBoard from 'chessboardjs/www/js/chessboard';

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.css']
})
export class ChessboardComponent implements AfterViewInit {

  board1: ChessBoard;

  position = {
    d6: 'bK',
    d4: 'wP',
    e4: 'wK'
  }

  constructor() {
  }

  ngAfterViewInit() {
    this.board1 = ChessBoard('board1', {
      draggable: true,
      position: this.position
    });
  }

  goBack() {
    this.board1.position('r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R');
  }
}

