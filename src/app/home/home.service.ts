import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = "http://3.29.109.84/admin/api/v1/services";

  constructor(private http: HttpClient) {}


  getApiData() {
    const token = this.getToken();
    if(!token){
      throw new Error('Token not available');
    }
    const headers = new HttpHeaders({'Authorization': `Bearer ${token}`});
     return this.http.get<any>(this.apiUrl,{headers});
  }

private getToken(): string {
  const userDataString = localStorage.getItem('userData');
  const userData = JSON.parse(userDataString!);
  const accessToken = userData?.data?.token?.accessToken ?? ''; // Use nullish coalescing operator
  return accessToken;

}

deleteServiceItem(_id:any){
  const token = this.deletegetToken();
    if(!token){
      throw new Error('Token not available');
    }

    const headers = new HttpHeaders({'Authorization': `Bearer ${token}`});
    const deleteUrl = `${this.apiUrl}/${_id}`;
    return this.http.delete<any>(deleteUrl,{headers});
}
private deletegetToken(): string {
  const userDataString = localStorage.getItem('userData');
  const userData = JSON.parse(userDataString!);
  const accessToken = userData?.data?.token?.accessToken ?? ''; // Use nullish coalescing operator
  return accessToken;

}
}
