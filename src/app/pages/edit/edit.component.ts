import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Taxi } from 'src/app/models/product.model';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  id!: any;
  model: Taxi

  constructor(private crudService:CrudService , private router : Router, private activatedRoute : ActivatedRoute, private alertifyService:AlertifyService){

  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.crudService.getProduct(this.id).subscribe((res) => {
      this.model = {
        _id: res.id,
        telefono_usuario: res.telefono_usuario,
        direccion: res.direccion,
        barrio: res.barrio,
        observacion: res.observacion,
        movil_taxi: res.movil_taxi,
        placa_taxi: res.placa_taxi,
        llego: res.llego,
        recepcionado: res.recepcionado,
        asignado: res.asignado,
        recogido: res.recogido,
        // description: res.description,
        // price: res.price,
        // stock: res.stock,
      };
    });
  }

  onSubmit(taxi: Taxi){
    this.crudService.updateProduct(this.id, taxi).subscribe({
      next: ()=>{
        this.alertifyService.success('Viaje actualizado')
        this.router.navigateByUrl('/')
      },
      error: (error) =>{
        this.alertifyService.error(error);
        console.log(error)
      }
    })
  }

}
