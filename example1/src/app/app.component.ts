import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { MenuController, LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private _storage: Storage | null = null;
public a_user_name:any;
public a_user_id:any;
public selectedIndex = 1;
  public appPages = [
    { title: 'Dashboard', url: '/home', icon: 'analytics-outline' },
    { title: 'Location Finder', url: '/home', icon: 'location-outline' },
    { title: 'Status', url: '/folder/Inbox', icon: 'paper-plane-outline' },

    { title: 'Logout', url: '/login', icon: 'log-out-outline' },


  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public router:Router, public storage:Storage,public menu:MenuController) {
this.getUserDetails()
  }
  ngOnInit() {
    this.menu.enable(true);

  }
  async getUserDetails(){
    const storage = await this.storage.create();
    const userDetails = await storage.get('TUTORIAL_USER_DETAILS');
    let lastname= userDetails.user.lastName ? userDetails.user.lastName : ""
    this.a_user_name=userDetails.user.firstName + lastname
  this.a_user_id=userDetails.user.email
  }
  closeIcon(){
  }
  async logout(){
    if (await this.menu.isOpen()) {
      this.storage.set('TUTORIAL_USER_DETAILS', null);
      await this.menu.close();
      await this.menu.enable(false);
      this.router.navigate(['/login']);
}
  }
}
