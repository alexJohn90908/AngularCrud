import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateServiceService {

  constructor(private http: HttpClient) { }
  apiurl = 'http://3.29.109.84/admin/api/v1/services';

  getService(_id:string){
    const token = this.getToken();
    if(!token){
      throw new Error('Token not available');
    }
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
   return this.http.get(this.apiurl, {headers})
  }
  private getToken(): string {
    const userDataString = localStorage.getItem('userData');
    const userData = JSON.parse(userDataString!);
    const accessToken = userData?.data?.token?.accessToken ?? ''; // Use nullish coalescing operator
    return accessToken;
 
  }
  updateData(_id:string, updateData:any){
    const token = this.getToken();
    if (!token) {
      throw new Error('Token not available');
    }
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const updateUrl = `${this.apiurl}/${_id}`;
    return this.http.patch(updateUrl,updateData,{headers});
  }
}

