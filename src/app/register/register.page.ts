import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  Phoneform: FormGroup;


  constructor(
    public navCtrl: NavController,
    private router: Router,
    private keyboard: Keyboard,
    public alertController: AlertController,
    private fb: FormBuilder) {
      this.forms();
    }

  ngOnInit() {
    this.keyboardShow();
  }

  keyboardShow() {
    this.keyboard.show();
  }

  forms() {
    this.Phoneform = this.fb.group({
      phone_number: new FormControl('', Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern('[0-9]*'),
        Validators.required
      ]))
    });
  }

  onSubmit() {
    if (!this.Phoneform.valid) {
      console.log(this.Phoneform.value);
    }
  }

  onKey(e) {
    if (e.keyCode === 13) {
      if (!this.Phoneform.valid) {
        this.router.navigate(['/code']);
      } else {
        this.ValidateForm();
      }
    }
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: '¿Estas seguro?',
      message: 'Si cancelas la verificación, tu proceso se perderá y tendrás que volver a empezar',
      buttons: [
        {
          text: 'NO',
          role: 'NO',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          cssClass: 'danger',
          role: 'Cancelar',
          text: 'Cancelar',
          handler: () => {
            console.log('Confirm Okay');
            this.router.navigate(['/home']);
          }
        }
      ]
    });

    await alert.present();
  }

  inputClear(event) {
    if (event.detail.value === '') {
      this.presentAlertConfirm();
    }
  }

  async ValidateForm() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Debe ingresar un número de teléfono valido',
      buttons: ['OK']
    });

    await alert.present();
  }
}
