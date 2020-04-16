import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountconfigPageRoutingModule } from './accountconfig-routing.module';

import { AccountconfigPage } from './accountconfig.page';
import { HeaderModule } from '../componets/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountconfigPageRoutingModule,
    HeaderModule
  ],
  declarations: [AccountconfigPage]
})
export class AccountconfigPageModule {}
