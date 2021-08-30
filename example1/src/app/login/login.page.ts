import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController, LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonServiceService } from '../service/common-service.service';
import { environment } from 'src/environments/environment.prod';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public apiversion = '1.0.0';
  public loginForm: FormGroup;
  public emailid: any;
  public password: any;
  public TUTORIAL_USER_DETAILS: any;
  private _storage: Storage | null = null;

  constructor(private storage: Storage, public commonService: CommonServiceService, public formBuilder: FormBuilder, public menu: MenuController, public loadingController: LoadingController, public router: Router, public alertController: AlertController) {
    this.loginForm = this.formBuilder.group({
      emailid: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.menu.enable(false);

  }
  async login() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      translucent: true,
      backdropDismiss: false
    });
    await loading.present();
    const actionURL = "domain/login/" + this.loginForm.value.emailid + "/" + this.loginForm.value.password + '?targetDomainKey=' + environment.DOMAIN_KEY;
    await this.commonService.getAllCall(actionURL)
      .subscribe(async res => {
        if (res) {
          const storage = await this.storage.create();
          this._storage = storage;
          this._storage?.set("TUTORIAL_USER_DETAILS", res);
          this.router.navigate(['/home']);

        } else {
          this.commonService.presentToast('Username/Password Invalid')
        }
        loading.dismiss();
      }, err => {

        this.commonService.presentToast('Username/Password Invalid')

        loading.dismiss();
      });
  }
}
