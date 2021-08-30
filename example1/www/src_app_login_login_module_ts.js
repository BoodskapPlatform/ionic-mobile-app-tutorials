(self["webpackChunkboodskap_tutorial_app"] = self["webpackChunkboodskap_tutorial_app"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 6770);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 1339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _service_common_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/common-service.service */ 1693);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.prod */ 9019);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage-angular */ 1628);










let LoginPage = class LoginPage {
    constructor(storage, commonService, formBuilder, menu, loadingController, router, alertController) {
        this.storage = storage;
        this.commonService = commonService;
        this.formBuilder = formBuilder;
        this.menu = menu;
        this.loadingController = loadingController;
        this.router = router;
        this.alertController = alertController;
        this.apiversion = '1.0.0';
        this._storage = null;
        this.loginForm = this.formBuilder.group({
            emailid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        });
    }
    ngOnInit() {
        this.menu.enable(false);
    }
    login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Loading...',
                translucent: true,
                backdropDismiss: false
            });
            yield loading.present();
            const actionURL = "domain/login/" + this.loginForm.value.emailid + "/" + this.loginForm.value.password + '?targetDomainKey=' + src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__.environment.DOMAIN_KEY;
            yield this.commonService.getAllCall(actionURL)
                .subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                var _a;
                if (res) {
                    const storage = yield this.storage.create();
                    this._storage = storage;
                    (_a = this._storage) === null || _a === void 0 ? void 0 : _a.set("TUTORIAL_USER_DETAILS", res);
                    this.router.navigate(['/home']);
                }
                else {
                    this.commonService.presentToast('Username/Password Invalid');
                }
                loading.dismiss();
            }), err => {
                this.commonService.presentToast('Username/Password Invalid');
                loading.dismiss();
            });
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__.Storage },
    { type: _service_common_service_service__WEBPACK_IMPORTED_MODULE_2__.CommonServiceService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 1339:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-label {\n  display: block;\n  font-size: 13px;\n  color: #000;\n  text-align: left;\n  width: 100%;\n}\n\n.sc-ion-input-ios-h,\nion-input {\n  display: block;\n  border-top: none;\n  border-left: none;\n  font-size: 13px;\n  border-right: none;\n  background: transparent;\n  border-bottom: 1px solid;\n  width: 100%;\n  margin: 8px 0 17px;\n  text-align: left;\n}\n\ninput:focus {\n  outline: none;\n  background: transparent;\n}\n\nform {\n  width: 85%;\n  margin: 0 auto;\n  color: #000;\n  text-align: center;\n}\n\nion-button {\n  width: 80%;\n  font-weight: bold;\n  margin-top: 20px;\n}\n\nh6 {\n  margin-bottom: 35px;\n}\n\nion-img {\n  width: 250px;\n  margin: 140px auto 0px;\n}\n\n.font13 {\n  font-size: 13px;\n}\n\n.powerby {\n  margin: 30px auto 0px;\n  text-align: center;\n}\n\n.powerby ion-img {\n  width: 30px;\n  display: inline-block;\n  position: absolute;\n  margin-top: -7px;\n}\n\n.boodskaptext {\n  margin-left: 33px;\n}\n\n.position-absolute {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}\n\n.login-right-bottom ion-img {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n}\n\n.font15 {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBOztFQUVJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksbUJBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtBQUdKOztBQUFBO0VBQ0ksZUFBQTtBQUdKOztBQUFBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtBQUdKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksaUJBQUE7QUFJSjs7QUFGQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFLSjs7QUFIQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQU1BOztBQUpBO0VBQ0ksZUFBQTtBQU9KIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1sYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5zYy1pb24taW5wdXQtaW9zLWgsXG5pb24taW5wdXQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiA4cHggMCAxN3B4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5mb3JtIHtcbiAgICB3aWR0aDogODUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiBcbmlvbi1idXR0b257XG4gICAgd2lkdGg6IDgwJTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuaDZ7XG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cbmlvbi1pbWd7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIG1hcmdpbjogMTQwcHggYXV0byAwcHg7XG59XG5cbi5mb250MTN7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ucG93ZXJieSB7XG4gICAgbWFyZ2luOiAzMHB4IGF1dG8gMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBvd2VyYnkgaW9uLWltZyB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tdG9wOiAtN3B4O1xufVxuLmJvb2Rza2FwdGV4dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDMzcHg7XG59XG4ucG9zaXRpb24tYWJzb2x1dGV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbn0gXG4ubG9naW4tcmlnaHQtYm90dG9tIGlvbi1pbWd7XG53aWR0aDogMTAwJTtcbmhlaWdodDogMTAwJTtcbm1hcmdpbjogMDtcbn1cbi5mb250MTV7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ 6770:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-img src=\"/assets/icon/bdskap-logo.png\"></ion-img>\n  <h5 class=\"ion-text-center theme-bold-color\">Boodskap Tutorial</h5>\n  <form [formGroup]=\"loginForm\">\n    <ion-label for=\"username\">Username</ion-label>\n    <ion-input type=\"email\" id=\"username\" formControlName=\"emailid\" required>\n    </ion-input>\n    <ion-label for=\"loginpwd\">Password</ion-label>\n    <ion-input type=\"password\" formControlName=\"password\" id=\"loginpwd\" required>\n    </ion-input>\n\n    <ion-button class=\"login-button m-10 text-center\" [disabled]=\"loginForm.invalid\" (click)=\"login()\">\n      <span id=\"loginTxt\" class=\"login-fdbk\" style=\"font-family: 'Roboto', sans-serif;\">Log In</span>\n      <span id=\"loginFdbk\" class=\"login-fdbk\" style=\"display: none;\">\n        <i class=\"fa fa-circle-o-notch fa-spin\"></i>\n        <span style=\"font-family: Play;\">Loading...</span>\n      </span>\n    </ion-button>\n    <p class=\"font13\">v <span>{{apiversion}}</span></p>\n    <div class=\"powerby\">\n      <span class=\"font15\"> Powered by </span>\n      <ion-img src=\"/assets/icon/boodskap-logos.png\"></ion-img> <span class=\"boodskaptext font15\">Boodskap</span>\n    </div>\n  </form>\n  <div class=\"position-absolute login-right-bottom\">\n    <ion-img src=\"/assets/icon/login-right-bottom.svg\"></ion-img>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map