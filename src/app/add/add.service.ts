import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddService {


  constructor( private http: HttpClient) { }
  url = "http://3.29.109.84/admin/api/v1/services"
  // private getToken(): string {
  //   const userDataString = localStorage.getItem('userData');
  //   const userData = JSON.parse(userDataString!);
  //   const accessToken = userData?.data?.token?.accessToken ?? ''; // Use nullish coalescing operator
  //   return accessToken;

  // }
  // postApiData(data: any){

  //   const token = this.getToken();
  //   if(!token){
  //     throw new Error('Token not available');
  //   }
  //   const headers = new HttpHeaders({'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json'});
  //    return this.http.post(this.apiUrl,{headers}, data);
  // }
saveService(data:any){
  const token = this.getToken();
  if(!token){
    throw new Error('Token not available');
  }
  const headers = new HttpHeaders({'Authorization': `Bearer ${token}`});
  return this.http.post(this.url,data,{headers});
}
private getToken(): string {
  const userDataString = localStorage.getItem('userData');
  const userData = JSON.parse(userDataString!);
  const accessToken = userData?.data?.token?.accessToken ?? ''; // Use nullish coalescing operator
  return accessToken;

}
}
