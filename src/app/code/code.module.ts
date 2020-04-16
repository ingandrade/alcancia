import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodePageRoutingModule } from './code-routing.module';

import { CodePage } from './code.page';
import { HeaderComponent } from '../componets/header/header.component';
import { HeaderModule } from '../componets/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodePageRoutingModule,
    HeaderModule
  ],
  declarations: [CodePage]
})
export class CodePageModule {}
