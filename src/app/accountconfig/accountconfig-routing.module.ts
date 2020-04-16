import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountconfigPage } from './accountconfig.page';

const routes: Routes = [
  {
    path: '',
    component: AccountconfigPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountconfigPageRoutingModule {}
