import { NavController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit, NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  entryComponents: [],
  imports: [
    FormBuilder,
    FormControl,
    FormGroup,
    FormsModule,
    Validators,
    ReactiveFormsModule
  ],
  providers: []
})

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.page.html',
  styleUrls: ['./pagos.page.scss'],
})
export class PagosPage implements OnInit {

  public formPago = {
    reserva : "",
    tarjeta : "",
    fecha : "",
    cvc : ""
  };

  constructor(
    public navCrl : NavController
  ) { }

  ngOnInit() {
  }

  // Funciones

  savePago(){
    console.log(this.formPago);
  }
}
