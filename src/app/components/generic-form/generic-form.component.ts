import { Component , OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup,Validators} from  '@angular/forms'
import { CrudService } from 'src/app/services/crud.service';
import { Route, Router } from '@angular/router';
import { Taxi } from 'src/app/models/product.model';


@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.css']
})
export class GenericFormComponent implements OnInit {
  constructor (private formBuilder : FormBuilder, private crudServide : CrudService, private router: Router){

  }
  formProduct: FormGroup

  @Input()
  modelProduct : Taxi

  @Output()
  submitValues: EventEmitter<Taxi> = new EventEmitter<Taxi>
 
  
  ngOnInit(): void {
    this.formProduct = this.formBuilder.group({
      telefono_usuario: ['',Validators.required],
      direccion: ['',Validators.required],
      barrio: ['',Validators.required],
      observacion: ['',Validators.required],
      movil_taxi: [''],
      placa_taxi: [''],
      llego: [''],
      recepcionado: [''],
      asignado: [''],
      recogido: [''],

      // description: ['',Validators.required],
      // price:['',Validators.required],
      // stock: ['',Validators.required],
    })
    if (this.modelProduct !== undefined) {
      this.formProduct.patchValue(this.modelProduct)
    }
  }

  onSubmit(): void{
    // console.log("taxi");
    this.submitValues.emit(this.formProduct.value)
  }

}
