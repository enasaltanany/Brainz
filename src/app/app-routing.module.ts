import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { LoginComponentComponent } from './login-component/login-component.component';



const routes: Routes = [
  { path: '', component :LoginComponentComponent},
  { path: 'login', component: LoginComponentComponent },
  { path: 'leaderboard', component:LeaderBoardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
