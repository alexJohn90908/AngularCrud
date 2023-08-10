import { Component } from '@angular/core';
import { AddService } from './add.service';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
// ServiceName: string;


constructor (private addService: AddService, private route: Router, private sharedService: SharedService){ }

createService(data:any){


this.addService.saveService(data).subscribe((response)=>{
// console.warn(response);
this.route.navigate(["/home"]);

});
}

}
