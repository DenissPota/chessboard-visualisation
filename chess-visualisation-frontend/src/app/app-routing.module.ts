import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ChessboardComponent} from "./chessboard/chessboard.component";
import {LobbyComponent} from "./lobby/lobby.component";

const routes: Routes = [
  //{path: '', redirectTo: '/training', pathMatch: 'full'},
  {path: '', component: LobbyComponent},
  {path: 'training', component: ChessboardComponent},
  //{ path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
