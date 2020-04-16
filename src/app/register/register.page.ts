import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public navCtrl: NavController, private router: Router, private keyboard: Keyboard) { }

  ngOnInit() {
    this.keyboardShow();
  }

  keyboardShow() {
    this.keyboard.show();
  }

  onKey(e) {
    if (e.keyCode === 13) {
      console.log('yes');
      this.router.navigate(['/code']);
    }
  }
}
