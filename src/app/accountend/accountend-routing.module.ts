import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountendPage } from './accountend.page';

const routes: Routes = [
  {
    path: '',
    component: AccountendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountendPageRoutingModule {}
