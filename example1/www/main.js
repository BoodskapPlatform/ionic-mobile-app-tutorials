(self["webpackChunkboodskap_tutorial_app"] = self["webpackChunkboodskap_tutorial_app"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 107)).then(m => m.LoginPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage-angular */ 1628);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);







let AppComponent = class AppComponent {
    constructor(router, storage, menu) {
        this.router = router;
        this.storage = storage;
        this.menu = menu;
        this._storage = null;
        this.selectedIndex = 1;
        this.appPages = [
            { title: 'Dashboard', url: '/home', icon: 'analytics-outline' },
            { title: 'Location Finder', url: '/home', icon: 'location-outline' },
            { title: 'Status', url: '/folder/Inbox', icon: 'paper-plane-outline' },
            { title: 'Logout', url: '/login', icon: 'log-out-outline' },
        ];
        this.labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
        this.getUserDetails();
    }
    ngOnInit() {
        this.menu.enable(true);
    }
    getUserDetails() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const storage = yield this.storage.create();
            const userDetails = yield storage.get('TUTORIAL_USER_DETAILS');
            let lastname = userDetails.user.lastName ? userDetails.user.lastName : "";
            this.a_user_name = userDetails.user.firstName + lastname;
            this.a_user_id = userDetails.user.email;
        });
    }
    closeIcon() {
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (yield this.menu.isOpen()) {
                this.storage.set('TUTORIAL_USER_DETAILS', null);
                yield this.menu.close();
                yield this.menu.enable(false);
                this.router.navigate(['/login']);
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 7152);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ 4925);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _drive_popover_drive_popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drive-popover/drive-popover.component */ 2113);











let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _drive_popover_drive_popover_component__WEBPACK_IMPORTED_MODULE_3__.DrivePopoverComponent],
        entryComponents: [_drive_popover_drive_popover_component__WEBPACK_IMPORTED_MODULE_3__.DrivePopoverComponent],
        imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.IonicStorageModule.forRoot(), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule],
        providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_0__.Geolocation, { provide: _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicRouteStrategy }],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_5__.CUSTOM_ELEMENTS_SCHEMA],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 2113:
/*!**********************************************************!*\
  !*** ./src/app/drive-popover/drive-popover.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrivePopoverComponent": () => (/* binding */ DrivePopoverComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_drive_popover_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./drive-popover.component.html */ 5038);
/* harmony import */ var _drive_popover_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drive-popover.component.scss */ 2344);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _service_common_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/common-service.service */ 1693);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ 1628);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.prod */ 9019);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 7152);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);









let DrivePopoverComponent = class DrivePopoverComponent {
    constructor(params, popoverController, geolocation, commonService, storage) {
        this.params = params;
        this.popoverController = popoverController;
        this.geolocation = geolocation;
        this.commonService = commonService;
        this.storage = storage;
        this.destinationList = [];
        this.locationTraces = [];
        this.slugName = "tutorial";
        this.apiName = "ETA";
        this.destinationListCall();
        this.getuserLocation();
    }
    ngOnInit() { }
    getuserLocation() {
        var timeoutVal = 10 * 1000 * 1000;
        this.options = {
            enableHighAccuracy: false,
            timeout: timeoutVal
        };
        this.geolocation.getCurrentPosition(this.options).then((resp) => {
            // resp.coords.latitude
            // resp.coords.longitude
            this.currentLat = resp.coords.latitude;
            this.currentLong = resp.coords.longitude;
        }).catch((error) => {
            console.log('Error getting location', error);
        });
        this.locationSubscription = this.geolocation.watchPosition();
        this.locationSubscription.subscribe((resp) => {
            this.locationWatchStarted = true;
            this.locationTraces.push({
                latitude: resp.coords.latitude,
                longitude: resp.coords.latitude,
                accuracy: resp.coords.accuracy,
                timestamp: resp.timestamp
            });
            console.log(this.locationTraces);
        });
    }
    destinationListCall() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const storage = yield this.storage.create();
            const userDetails = yield storage.get('TUTORIAL_USER_DETAILS');
            let method = "lnames";
            const actionURL = "micro/service/" + this.slugName + "/" + this.apiName + '/' + method;
            const sendObj = {
                TOKEN: userDetails.token,
                KEY: userDetails.apiKey,
                slug: this.slugName,
                api: this.apiName,
                method: method,
                params: {}
            };
            yield (yield this.commonService.invokedApi(actionURL, JSON.stringify(sendObj)))
                .subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                if (res) {
                    this.destinationList = res;
                }
                else {
                    this.commonService.presentToast(' Invalid');
                }
            }), err => {
                this.commonService.presentToast('Something went wrong');
            });
        });
    }
    driveStartFn(destination) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let value = document.getElementById('destination_name') ? document.getElementById('destination_name').value : null;
            if (value) {
                this.parentPage = this.params.get('ref');
                this.parentPage.markerCreate(value);
                yield this.popoverController.dismiss();
            }
            let destination1 = value ? value : destination;
            const storage = yield this.storage.create();
            const userDetails = yield storage.get('TUTORIAL_USER_DETAILS');
            const actionURL = "push/v2/json/" + userDetails.user.email + '/-/-/' + src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__.environment.Simulator_message_spec;
            const sendObj = {
                "destination": destination1,
                "latitude": this.currentLat,
                "longitude": this.currentLong
            };
            yield this.commonService.pushJson(actionURL, sendObj, destination1)
                .subscribe(res => {
                if (res) {
                    this.commonService.switchActive = true;
                    setTimeout(() => {
                        this.locationSubscription = this.geolocation.watchPosition();
                        if (this.locationSubscription._isScalar) {
                            this.locationSubscription.subscribe((resp) => {
                                this.currentLat = resp.coords.latitude;
                                this.currentLong = resp.coords.longitude;
                                if (this.commonService.driverEnable) {
                                    this.driveStartFn(destination1);
                                }
                            });
                        }
                        else {
                            this.currentLat = this.currentLat;
                            this.currentLong = this.currentLong;
                            if (this.commonService.driverEnable) {
                                this.driveStartFn(destination1);
                            }
                        }
                    }, 1000);
                }
                else {
                    this.commonService.presentToast(' Invalid');
                }
            }, err => {
                this.commonService.presentToast('Something went wrong');
            });
        });
    }
};
DrivePopoverComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.PopoverController },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__.Geolocation },
    { type: _service_common_service_service__WEBPACK_IMPORTED_MODULE_2__.CommonServiceService },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.Storage }
];
DrivePopoverComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-drive-popover',
        template: _raw_loader_drive_popover_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_drive_popover_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DrivePopoverComponent);



/***/ }),

/***/ 1693:
/*!***************************************************!*\
  !*** ./src/app/service/common-service.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonServiceService": () => (/* binding */ CommonServiceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 9019);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ 1628);







// import { platform } from 'os';

const apiUrl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json' })
};
let CommonServiceService = class CommonServiceService {
    constructor(http, toastController, storage) {
        this.http = http;
        this.toastController = toastController;
        this.storage = storage;
        this.switchActive = false;
        this.driverEnable = true;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json' })
        };
        this.getUserDetails();
    }
    getUserDetails() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const storage = yield this.storage.create();
            const userDetails = yield storage.get('TUTORIAL_USER_DETAILS');
            this.httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json', 'TOKEN': userDetails.token,
                    'KEY': userDetails.apiKey }),
            };
        });
    }
    presentToast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 1000,
                position: 'middle',
            });
            toast.present();
        });
    }
    guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
    ////////////////////////////////////////// restfull service call started ///////////////////////////////////////
    handleError(operation = 'operation', result) {
        return (error) => {
            this.presentToast('Service connection failed contact administator');
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(result);
        };
    }
    getAllCall(actionURL) {
        return this.http.get(apiUrl + '/' + actionURL).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(_ => true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError(`failed`)));
    }
    getCallByID(actionURL, id) {
        const url = `${apiUrl}/${actionURL}/${id}`;
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(_ => console.log(`success`)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError(`failed`)));
    }
    pushJson(actionURL, data, destination) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json', "dkey": src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.DOMAIN_KEY, "akey": src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.API_KEY })
        };
        this.destinationPoint = destination;
        return this.http.post(apiUrl + '/' + actionURL, data, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((result) => {
            this.switchActive = true;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('failed')));
    }
    postCall(actionURL, data) {
        return this.http.post(apiUrl + '/' + actionURL, data, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((result) => {
            console.log("result--------------");
            console.log(result);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('failed')));
    }
    invokedApi(actionURL, data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const storage = yield this.storage.create();
            const userDetails = yield storage.get('TUTORIAL_USER_DETAILS');
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json', 'TOKEN': userDetails.token, 'KEY': userDetails.apiKey }),
            };
            return this.http.post(apiUrl + '/' + actionURL, data, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((result) => {
                console.log("result--------------");
                console.log(result);
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('failed')));
        });
    }
    binaryfileCall(actionURL, data) {
        return this.http.post(apiUrl + '/push/bin/file/' + actionURL, data, this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((data) => console.log(`success`)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('failed')));
    }
    // loginCall(actionURL,data): Observable<any> {
    //   return this.http.post<any>(apiUrl + '/' + actionURL, data).pipe(
    //     tap((data: any) => console.log(`success`)),
    //     catchError(this.handleError<any>('failed'))
    //   );
    // }
    elasticInsert(actionURL, data) {
        return this.http.post(apiUrl + '/' + actionURL, data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'text/plain' })
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((data) => console.log(`success`)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('failed')));
    }
    updateCall(actionURL, id, data) {
        const url = `${apiUrl}/${id}`;
        return this.http.put(url + '/' + actionURL, data, this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(_ => console.log(`success`)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('failed')));
    }
    deleteCallByID(actionURL, id) {
        const url = `${apiUrl}/${actionURL}/${id}`;
        return this.http.delete(url, this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(_ => console.log(`success`)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('failed')));
    }
    sendMessage(actionURL, data) {
        const httpOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'text/plain' })
        };
        return this.http.post(apiUrl + '/' + actionURL, data, httpOption).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(_ => console.log(`success`)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError('failed')));
    }
    ////////////////////////////////////////// restfull service call ended///////////////////////////////////////
    elasticQueryFormatter(data) {
        var resultObj = {
            total: 0,
            data: {},
            aggregations: {}
        };
        if (data && data.httpCode === 200) {
            var arrayData = JSON.parse(data.result);
            var totalRecords = arrayData.hits.total ? arrayData.hits.total.value : 0;
            var records = arrayData.hits.hits;
            var aggregations = arrayData.aggregations ? arrayData.aggregations : {};
            var count = 0;
            var tempData = [];
            for (var i = 0; i < records.length; i++) {
                if (records[i]['_id'] != '_search') {
                    records[i]['_source']['_id'] = records[i]['_id'];
                    tempData.push(records[i]['_source']);
                }
                else {
                    count++;
                }
            }
            totalRecords = totalRecords > 0 ? totalRecords - count : 0;
            var dataArray = [];
            for (var i = 0; i < records.length; i++) {
                dataArray.push(records[i]._source);
            }
            resultObj = {
                "total": totalRecords,
                "data": {
                    "recordsTotal": totalRecords,
                    "recordsFiltered": totalRecords,
                    "data": dataArray
                },
                aggregations: aggregations
            };
            return resultObj;
        }
        else {
            return resultObj;
        }
    }
};
CommonServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.Storage }
];
CommonServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
    })
], CommonServiceService);



/***/ }),

/***/ 9019:
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: true,
    apiUrl: "https://dev.boodskap.io/api",
    fileUrl: "https://api.boodskap.io/files/download/",
    DOMAIN_KEY: "FUZGOXZNYR",
    API_KEY: "D3uAhX3v6txC",
    API_TOKEN: "FUZGOXZNYR:D3uAhX3v6txC",
    mqtt: {
        server: 'dev.boodskap.io',
        protocol: "wss",
        port: 443
    },
    Simulator_message_spec: 1000
};


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		7321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		1489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		5830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		7757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		6911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		8695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		6034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		8837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		4195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5931,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		8056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		1855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		8708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		3527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		9921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		1602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		6164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		7162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		7896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		5043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		7802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		9072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		2191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\n.profileouter {\n  top: 4%;\n  position: absolute;\n  left: 32%;\n  width: 111px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-end: 10px;\n}\n\n.iconColorSelect {\n  color: #fff;\n}\n\nion-menu.md ion-item.selected {\n  --background: #FB7400;\n  --color:#fff;\n  color: #fff;\n}\n\nion-menu.md ion-item {\n  --background: #fff;\n  color: #313E52;\n}\n\nion-menu.md ion-item.selected ion-icon {\n  --color: #fff;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n  margin-top: 15px;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n.profileimg {\n  background: #342E29;\n  color: #fff;\n  padding: 25px;\n}\n\n.user-img {\n  background: #fff;\n  height: 75px;\n  width: 75px;\n  border-radius: 50%;\n  border: 3px solid #ddd;\n  margin: 0 auto;\n  padding: 3px;\n}\n\n.usermail {\n  text-align: center;\n  font-size: 13px;\n}\n\n.userName {\n  text-align: center;\n  margin-bottom: 0px;\n  text-transform: capitalize;\n}\n\n.photo {\n  font-size: 13px;\n  margin-top: 7px;\n}\n\n.w-100 {\n  width: 100%;\n}\n\n.closings {\n  position: absolute;\n  right: 10px;\n  color: #fff;\n  top: 10px;\n}\n\nion-img img {\n  border-radius: 50% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBSUE7RUFDRSxPQUFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQURKOztBQUdBO0VBQ0UsZUFBQTtBQUFGOztBQUdBO0VBQ0UsbUJBQUE7QUFBRjs7QUFHQTs7RUFFRSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsMkRBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLG1CQUFBO0FBSkY7O0FBT0E7RUFDRSxXQUFBO0FBSkY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7QUFIRjs7QUFPQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLHNCQUFBO0FBSkY7O0FBT0E7RUFDRSxtQkFBQTtBQUpGOztBQU9BO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUpGOztBQU9BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSkY7O0FBT0E7RUFDRSwrQkFBQTtBQUpGOztBQU9BO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0FBSkY7O0FBT0E7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7QUFKRjs7QUFPQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUVBLG9DQUFBO0FBTEY7O0FBUUE7RUFDRSxpQ0FBQTtBQUxGOztBQU9BO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0YsYUFBQTtBQUpBOztBQU1BO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUhGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBRkY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUFERjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0FBQUY7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUNBO0VBQ0UsNkJBQUE7QUFFRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSAge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG59XG5cblxuXG4ucHJvZmlsZW91dGVye1xuICB0b3A6IDQlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAzMiU7XG4gICAgd2lkdGg6IDExMXB4O1xufVxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG5cbiAgY29sb3I6ICM3NTc1NzU7XG5cbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICAvLyBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uaWNvbkNvbG9yU2VsZWN0e1xuICBjb2xvcjogI2ZmZjtcbn1cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkI3NDAwO1xuICAtLWNvbG9yOiNmZmY7XG4gIGNvbG9yOiAjZmZmO1xuXG59XG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMzMTNFNTI7XG5cbn1cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgLS1jb2xvcjogI2ZmZjtcbn1cblxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM3Mzg0OWE7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW5vdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG5cbmlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLnByb2ZpbGVpbWd7XG4gIGJhY2tncm91bmQ6ICMzNDJFMjk7XG4gIGNvbG9yOiAjZmZmO1xucGFkZGluZzogMjVweDtcbn1cbi51c2VyLWltZ3tcbiAgYmFja2dyb3VuZDojZmZmO1xuICBoZWlnaHQ6IDc1cHg7XG4gIHdpZHRoOiA3NXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNkZGQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAzcHg7XG59XG4udXNlcm1haWx7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLnVzZXJOYW1le1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5waG90b3tcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tdG9wOiA3cHg7XG59XG5cbi53LTEwMHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2xvc2luZ3N7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0b3A6IDEwcHg7XG59XG5pb24taW1nIGltZ3tcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ 2344:
/*!************************************************************!*\
  !*** ./src/app/drive-popover/drive-popover.component.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcml2ZS1wb3BvdmVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n     \n      <ion-content>\n        <p class=\"closings\" (click)=\"closeIcon()\"><i class=\"fa fa-times\" (click)=\"closeIcon()\" aria-hidden=\"true\"></i></p>\n\n        <div class=\"profileimg ion-text-center\">\n                <div>\n                  <img src=\"/assets/icon/user.png\" class=\"user-img\">\n\n                </div>  \n         \n              <p class=\"userName\" ><b>{{a_user_name}}</b></p>\n              <p class=\"usermail ion-no-margin\">{{a_user_id}}</p>\n        </div> \n \n     \n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n          \n            <ion-item (click)=\"selectedIndex = i\" routerDirection=\"root\" *ngIf=\"p.icon != 'log-out-outline'\" [routerLink]=\"[p.url]\" lines=\"none\"\n            detail=\"false\" [class.selected]=\"selectedIndex == i\">\n            <ion-icon slot=\"start\" *ngIf=\"selectedIndex == i\" [name]=\"p.icon\" class=\"iconColorSelect\" ></ion-icon>\n            <ion-icon slot=\"start\" *ngIf=\"!(selectedIndex == i)\" [name]=\"p.icon\" class=\"iconColor\" ></ion-icon>\n\n           \n            <ion-label>{{ p.title }}</ion-label><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\n          </ion-item>\n          <ion-item  *ngIf=\"p.icon == 'log-out-outline'\" (click)=\"logout()\" >\n            <!-- <ion-img class=\"leftmenu\" src={{p.img1}} *ngIf=\"selectedIndex == i\"></ion-img>\n            <ion-img class=\"leftmenu\" src={{p.img2}} *ngIf=\"!(selectedIndex == i)\"></ion-img> -->\n           \n            <ion-icon slot=\"start\" [name]=\"p.icon\"  *ngIf=\"!(selectedIndex == i)\" class=\"iconColor\" ></ion-icon>\n            <ion-label >\n              {{p.title}}\n            </ion-label> \n          </ion-item>\n          </ion-menu-toggle>\n          \n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n");

/***/ }),

/***/ 5038:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/drive-popover/drive-popover.component.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<div style=\"padding: 10px;\">\n  <ion-row>  <ion-col size=\"12\"><ion-label style=\" letter-spacing: 1px;font-size: 15px;font-weight: 400;\" position=\"floating\">Destination</ion-label>\n    <ion-select id=\"destination_name\" style=\"border:1px solid #ccc;border-radius:5px;background: #fff;color: #000;margin-top: 7px;\" placeholder=\"Select your destination\">\n     <ion-select-option *ngFor=\"let item of destinationList; let i = index\"  value=\"{{item}}\">{{item}}</ion-select-option>\n   </ion-select>\n  </ion-col>\n   </ion-row><div style=\"text-align:right\">\n    <!-- <ion-button (click)=\"driveStopFn()\" style=\"margin-top: 7px;margin-right:7px\" color=\"secondary\">Stop</ion-button> -->\n    <ion-button (click)=\"driveStartFn('')\" style=\"margin-top: 7px;\" color=\"primary\">Start</ion-button></div>  \n</div>\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map