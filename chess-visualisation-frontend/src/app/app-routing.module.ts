import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ChessboardComponent} from "./chessboard/chessboard.component";
import {LobbyComponent} from "./lobby/lobby.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  //{path: '', redirectTo: '/training', pathMatch: 'full'},
  {path: '', component: LobbyComponent},
  //{path: 'training/', component: ChessboardComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
