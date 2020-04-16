import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-code',
  templateUrl: './code.page.html',
  styleUrls: ['./code.page.scss'],
})
export class CodePage implements OnInit {

  constructor(private router: Router, private keyboard: Keyboard) { }

  ngOnInit() {
  }

  onKey(e) {
    if (e.keyCode === 13) {
      console.log('yes');
      this.router.navigate(['/info']);
    }
  }

}
