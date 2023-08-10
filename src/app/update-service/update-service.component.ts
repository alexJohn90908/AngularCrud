import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { UpdateServiceService } from './update.service';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.css']
})
export class UpdateServiceComponent implements OnInit {
  matchedObject: any;
  updateForm: any = {}; // To store form data for updating

  constructor (private router: ActivatedRoute, private update_service: UpdateServiceService, private navigateRouter:Router){}

  ngOnInit(): void {
    let serviceId = this.router.snapshot.paramMap.get('_id');

    if (serviceId) {
      this.update_service.getService(serviceId).subscribe((updateData:any) => {
        const dataArray = updateData.data;
        this.matchedObject = dataArray.find((item: { _id: string }) => item._id === serviceId);

        if (this.matchedObject) {
          // Fill the form with matched object data
          this.updateForm = { ...this.matchedObject };
        }
      });
    }
  }

  update(updateForm:any) {
    // Update logic here
    this.update_service.updateData(this.matchedObject._id, this.updateForm).subscribe(response => {
      console.log('Update response:', response);
      console.log('Update Data:', this.updateForm);
      // Handle success or error response as needed
      this.navigateRouter.navigate(["/home"]);
    });
  }
}
