import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../service/common-service.service';
import { Storage } from '@ionic/storage-angular';
import { environment } from 'src/environments/environment.prod';
import { Geolocation,GeolocationOptions } from '@ionic-native/geolocation/ngx';
import { MenuController, LoadingController, AlertController,PopoverController, NavParams } from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  Environment,
  Marker,
  GoogleMapsEvent,
  GoogleMapOptions

} from '@ionic-native/google-maps';

@Component({
  selector: 'app-drive-popover',
  templateUrl: './drive-popover.component.html',
  styleUrls: ['./drive-popover.component.scss'],
})
export class DrivePopoverComponent implements OnInit {
  public destinationList:any=[];
  public slugName:any;
  public apiName:any;
  public currentLat : any;
options : GeolocationOptions;
map: GoogleMap;
parentPage: any;
public currentLong : any;
public locationSubscription:any;
public locationWatchStarted:any;
public locationTraces:any=[];
  constructor( public params: NavParams,public popoverController:PopoverController,private geolocation: Geolocation,public commonService:CommonServiceService,public storage:Storage) { 
    this.slugName="tutorial"
    this.apiName="ETA"
    this.destinationListCall()

    this.getuserLocation()


  }

  ngOnInit() {}
  getuserLocation(){
    var timeoutVal = 10 * 1000 * 1000;
  this.options = {
    enableHighAccuracy : false,
    timeout:timeoutVal
    };
    this.geolocation.getCurrentPosition(this.options).then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.currentLat=resp.coords.latitude
      this.currentLong=resp.coords.longitude
  
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     this.locationSubscription = this.geolocation.watchPosition();
     this.locationSubscription.subscribe((resp) => {

       this.locationWatchStarted = true;
       this.locationTraces.push({
         latitude:resp.coords.latitude,
         longitude:resp.coords.latitude,
         accuracy:resp.coords.accuracy,
         timestamp:resp.timestamp
       });
     });
  }
  async destinationListCall(){
    const storage = await this.storage.create();
    const userDetails = await storage.get('TUTORIAL_USER_DETAILS');

  let method="lnames"
      const actionURL = "micro/service/" + this.slugName+ "/" + this.apiName + '/' + method;
      const sendObj={
        TOKEN:userDetails.token,
        KEY:userDetails.apiKey,
        slug:this.slugName,
        api:this.apiName,
        method:method,
        params:{}
      }
      await (await this.commonService.invokedApi(actionURL, JSON.stringify(sendObj)))
        .subscribe(async res => {
          if (res) {
         this.destinationList=res

          } else {
            this.commonService.presentToast(' Invalid')
          }
        }, err => {
  
          this.commonService.presentToast('Something went wrong')
  
        });
    }
  async driveStartFn(destination){

    let value = (<HTMLSelectElement>document.getElementById('destination_name')) ? (<HTMLSelectElement>document.getElementById('destination_name')).value: null;
  if(value){
    this.parentPage = this.params.get('ref');
    this.parentPage.markerCreate(value);
  await this.popoverController.dismiss()

  }
    let destination1=value?value:destination
    const storage = await this.storage.create();
    const userDetails = await storage.get('TUTORIAL_USER_DETAILS');
    const actionURL = "push/v2/json/" + userDetails.user.email+'/-/-/'+environment.Simulator_message_spec ;
    const sendObj={
   "destination":destination1,
    "latitude": this.currentLat,
    "longitude":this.currentLong 
  }

    await this.commonService.pushJson(actionURL,sendObj,destination1)
      .subscribe(res => {
        if (res) {
    this.commonService.switchActive=true

          setTimeout(() => {
            this.locationSubscription = this.geolocation.watchPosition();
if(this.locationSubscription._isScalar){
  this.locationSubscription.subscribe((resp) => {
    this.currentLat=resp.coords.latitude
    this.currentLong=resp.coords.longitude
if(this.commonService.driverEnable){
  this.driveStartFn(destination1)

}
    
      });
}else{
  this.currentLat= this.currentLat
  this.currentLong=this.currentLong
  if(this.commonService.driverEnable){
    this.driveStartFn(destination1)
  
  }
}
          
          }, 1000);
          
        } else {
          this.commonService.presentToast(' Invalid')
        }
      }, err => {
        this.commonService.presentToast('Something went wrong')
      });
  }
}
