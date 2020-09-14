import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {BOARD_POSITIONS} from "../mock-positions";
import {BoardPosition} from "../app/interface/board-position";

@Injectable({
  providedIn: 'root'
})
export class BoardPositionService {

  constructor() { }

  getRandomPosition(): Observable<BoardPosition> {
    return of(BOARD_POSITIONS[Math.floor(Math.random() * BOARD_POSITIONS.length)]);
  }
}
