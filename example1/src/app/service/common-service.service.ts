import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { ToastController } from '@ionic/angular';
// import { platform } from 'os';
import { Storage } from '@ionic/storage-angular';

const apiUrl = environment.apiUrl;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  public destinationPoint:any;
  public switchActive:boolean=false;
  public driverEnable:boolean=true;

 
  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  
  };
  
  constructor(private http: HttpClient, public toastController: ToastController,public storage:Storage) {
this.getUserDetails()

  }
  async getUserDetails(){
    const storage = await this.storage.create();
    const userDetails = await storage.get('TUTORIAL_USER_DETAILS');
     this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json','TOKEN': userDetails.token, 
      'KEY': userDetails.apiKey}),
      
    };
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1000,
      position: 'middle',
    });
    toast.present();
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

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.presentToast('Service connection failed contact administator')
      return of(result as T);
    };
  }

  getAllCall(actionURL): Observable<any> {
    return this.http.get<any>(apiUrl + '/' + actionURL).pipe(
      tap(_ => true),
      catchError(this.handleError<any>(`failed`))
    );
  }
  getCallByID(actionURL, id): Observable<any> {
    const url = `${apiUrl}/${actionURL}/${id}`;
    return this.http.get<any>(url).pipe(
      tap(_ => console.log(`success`)),
      catchError(this.handleError<any>(`failed`))
    );
  }
  pushJson(actionURL, data,destination): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json',"dkey":environment.DOMAIN_KEY,"akey":environment.API_KEY })   
    };
  this.destinationPoint=destination
    return this.http.post<any>(apiUrl + '/' + actionURL, data, httpOptions).pipe(
      tap((result: any) => {
        this.switchActive=true
     
      }),
      catchError(this.handleError<any>('failed'))
    );
  }
  postCall(actionURL, data): Observable<any> {

  
    return this.http.post<any>(apiUrl + '/' + actionURL, data, httpOptions).pipe(
      tap((result: any) => {
        console.log("result--------------");
        console.log(result);
      }),
      catchError(this.handleError<any>('failed'))
    );
  }
  async invokedApi(actionURL, data): Promise<Observable<any>> {
    const storage = await this.storage.create();
    const userDetails = await storage.get('TUTORIAL_USER_DETAILS');
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json','TOKEN': userDetails.token,'KEY': userDetails.apiKey}),
      
    };

      return this.http.post<any>(apiUrl + '/' + actionURL, data,httpOptions).pipe(
        tap((result: any) => {
          console.log("result--------------");
          console.log(result);
        }),
        catchError(this.handleError<any>('failed'))
      );
    }


  binaryfileCall(actionURL, data): Observable<any> {
    return this.http.post<any>(apiUrl + '/push/bin/file/' + actionURL,data,this.httpOptions).pipe(
      tap((data: any) => console.log(`success`)),
      catchError(this.handleError<any>('failed'))

    );
  }

  // loginCall(actionURL,data): Observable<any> {
  //   return this.http.post<any>(apiUrl + '/' + actionURL, data).pipe(
  //     tap((data: any) => console.log(`success`)),
  //     catchError(this.handleError<any>('failed'))
  //   );
  // }

  elasticInsert(actionURL, data): Observable<any> {
    return this.http.post<any>(apiUrl + '/' + actionURL, data, {
      headers: new HttpHeaders({ 'Content-Type': 'text/plain' })
    }).pipe(
      tap((data: any) => console.log(`success`)),
      catchError(this.handleError<any>('failed'))
    );
  }

  updateCall(actionURL, id, data): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url + '/' + actionURL, data, this.httpOptions).pipe(
      tap(_ => console.log(`success`)),
      catchError(this.handleError<any>('failed'))
    );
  }

  deleteCallByID(actionURL, id): Observable<any> {
    const url = `${apiUrl}/${actionURL}/${id}`;

    return this.http.delete<any>(url, this.httpOptions).pipe(
      tap(_ => console.log(`success`)),
      catchError(this.handleError<any>('failed'))
    );
  }

  sendMessage(actionURL, data): Observable<any> {
    const httpOption = {
      headers: new HttpHeaders({ 'Content-Type': 'text/plain' })
    };
    return this.http.post<any>(apiUrl + '/' + actionURL, data, httpOption).pipe(
      tap(_ => console.log(`success`)),
      catchError(this.handleError<any>('failed'))
    );
  }

  ////////////////////////////////////////// restfull service call ended///////////////////////////////////////

  elasticQueryFormatter(data) {

    var resultObj = {
      total: 0,
      data: {},
      aggregations: {}
    }

    if (data && data.httpCode === 200) {
      var arrayData = JSON.parse(data.result);
      var totalRecords = arrayData.hits.total ? arrayData.hits.total.value : 0;
      var records = arrayData.hits.hits;
      var aggregations = arrayData.aggregations ? arrayData.aggregations : {};
      var count = 0;
      var tempData = []
      for (var i = 0; i < records.length; i++) {
        if (records[i]['_id'] != '_search') {
          records[i]['_source']['_id'] = records[i]['_id'];
          tempData.push(records[i]['_source']);
        } else {
          count++;
        }
      }
      totalRecords = totalRecords > 0 ? totalRecords - count : 0
      var dataArray = [];
      for (var i = 0; i < records.length; i++) {
        dataArray.push(records[i]._source)
      }
      resultObj = {
        "total": totalRecords,
        "data": {
          "recordsTotal": totalRecords,
          "recordsFiltered": totalRecords,
          "data": dataArray
        },
        aggregations: aggregations
      }
      return resultObj;
    } else {
      return resultObj;
    }
  }
}
