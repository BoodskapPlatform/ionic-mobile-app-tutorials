import { Component, OnInit, NgZone } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { CommonServiceService } from '../service/common-service.service';
import { Storage } from '@ionic/storage-angular';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular'
import {
  GoogleMaps,
  GoogleMap,
  Environment,
  Marker,
  GoogleMapsEvent,
  GoogleMapOptions,
  Geocoder,
  GeocoderResult

} from '@ionic-native/google-maps';
import { MenuController, LoadingController, AlertController, PopoverController } from '@ionic/angular';
import { AppComponent } from '../app.component';
import { DrivePopoverComponent } from '../drive-popover/drive-popover.component';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public map: GoogleMap;
  public LIVE_OBJ: any = {};
  public currentLat: any;
  public currentLong: any;
  public options: GeolocationOptions;
  public currentPos: Geoposition;
  public destinationList: any = [];
  public destinationPoint: any;
  public arrayList: any = [];
  public _storage: any;
  public setTimeInterval: any;
  public markers: Marker[] = [
  ];
  public Google = "google.map.key";
  public googleApiKey: any;
  constructor(public alertController: AlertController, private geolocation: Geolocation, public loadingController: LoadingController, public popoverCtrl: PopoverController, public storage: Storage, public commonService: CommonServiceService, public app: AppComponent, public ngZone: NgZone, public platform: Platform, public menu: MenuController) {

  }

  async ngOnInit() {
    await this.GetGoogleApiKey()
    await this.menu.enable(true);
    this.app.getUserDetails()

  }

  async getUserPosition(type) {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      translucent: true,
      backdropDismiss: false
    });
    var timeoutVal = 10 * 1000 * 1000;
    this.options = {
      enableHighAccuracy: false,
      timeout: timeoutVal
    };
    this.geolocation.getCurrentPosition(this.options).then(async (pos: Geoposition) => {
      this.currentPos = pos;
      this.currentLat = pos.coords.latitude
      this.currentLong = pos.coords.longitude
      let newObj = {
        "lat": this.currentLat,
        "lng": this.currentLong
      }
      if (this.map) {
        this.map.addMarker({
          'position': newObj,
          'title': ''
        })
      }
      this.arrayList.push({
        "lat": Number(this.currentLat),
        "lng": Number(this.currentLong)
      })
      await this.loadMap();
      loading.dismiss();
    }, (err: PositionError) => {
      loading.dismiss();
      alert(err.message);
      console.log("error : " + err.message);
    })
  }

  loadMap() {
    // This code is necessary for browser
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': this.googleApiKey,
      'API_KEY_FOR_BROWSER_DEBUG': this.googleApiKey
    });
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 11,
          lng: 78
        },
        zoom: 10,
        tilt: 30
      }
    };
    this.map = GoogleMaps.create('map_canvas', mapOptions);
    this.arrayList.push({
      "lat": this.currentLat,
      "lng": this.currentLong
    })
    this.arrayList = [...new Map(this.arrayList.map(item => [JSON.stringify(item), item])).values()];
    for (let i = 0; i < this.arrayList.length; i++) {
      this.startMarker(this.arrayList[i].lat, this.arrayList[i].lng)
    }
  }
  startMarker(lat, long) {
    let marker: Marker = this.map.addMarkerSync({
      title: '',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: Number(lat),
        lng: Number(long)
      }
    });
    marker.showInfoWindow()
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
  }
  async startdrive(ev: any) {
    if (this.commonService.switchActive) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Confirm!',
        message: 'Are you sure,Stop this drive?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Okay',
            handler: () => {
              this.commonService.switchActive = false
              this.commonService.driverEnable = false
              clearInterval(this.setTimeInterval);
            }
          }
        ]
      });

      await alert.present();

    } else {
      this.commonService.driverEnable = true
      const popover = await this.popoverCtrl.create({
        component: DrivePopoverComponent,
        event: ev,
        animated: true,
        showBackdrop: true,
        componentProps: { ref: this },
      });
      return await popover.present();
    }
  }
  markerCreate(destination) {
    Geocoder.geocode({
      address: destination
    }).then((results: GeocoderResult[]) => {

      return this.map.addMarker({
        'position': results[0].position,
        'title': 'Destination'
      })
    }
    )
    this.setTimeInterval = setInterval(() => {
      this.getUserPosition(1)
    }, 5000);
  }
  GetGoogleApiKey() {
    let actionURL = "/domain/property/get/" + environment.API_TOKEN + "/" + this.Google
    this.commonService.getAllCall(actionURL)
      .subscribe(async res => {
        if (res) {
          this.googleApiKey = JSON.parse(res.value)
          this.googleApiKey = this.googleApiKey.apiKey
          await this.platform.ready()
          await this.getUserPosition(0)
          console.log(this.googleApiKey)
        } else {
          this.commonService.presentToast('Invalid')
        }
      }, err => {
        this.commonService.presentToast('Something went wrong')
      });
  }
}
