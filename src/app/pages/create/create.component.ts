import { Component } from '@angular/core';
import { Taxi } from 'src/app/models/product.model';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(private router:Router, private crudService:CrudService, private alertifyService:AlertifyService){

  }
  onSubmit(taxi:Taxi){
    this.crudService.createProduct(taxi).subscribe({
      next: ()=>{
        this.alertifyService.success('¡Viaje agregados')
        this.router.navigateByUrl("/")
      },
      error: (error) =>{
        this.alertifyService.error(error);
        console.log(error);
      }
    })

  }

}
