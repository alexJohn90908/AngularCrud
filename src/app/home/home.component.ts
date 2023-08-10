import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  services: any;
  deleteMessage:undefined | string;
  ngOnInit(): void {
this.listService();
  }
  constructor(private serviceData: HomeService){}

deleteService(_id:any){
console.warn("Test Id: ", _id);
this.serviceData.deleteServiceItem(_id).subscribe((response)=>{
if(response){
this.deleteMessage="Service has been Deleted!..";
this.listService();
setTimeout(() => {
  this.deleteMessage = undefined;
  }, 3000);
}

})

}

listService(){
  this.serviceData.getApiData().subscribe((data)=>{
    this.services=data
    });
}
}
