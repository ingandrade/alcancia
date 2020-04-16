import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountendPageRoutingModule } from './accountend-routing.module';

import { AccountendPage } from './accountend.page';
import { HeaderModule } from '../componets/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountendPageRoutingModule,
    HeaderModule
  ],
  declarations: [AccountendPage]
})
export class AccountendPageModule {}
