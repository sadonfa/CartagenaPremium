import { NavController } from '@ionic/angular';
import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, Validators, FormControl, FormsModule, FormBuilder, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [],
  entryComponents: [],
  imports: [
    FormGroup,
    Validators,
    FormControl,
    FormsModule,
    FormBuilder,
    ReactiveFormsModule
  ],
  providers: []
})

@Component({
  selector: 'app-chek-in',
  templateUrl: './chek-in.page.html',
  styleUrls: ['./chek-in.page.scss'],
})
export class ChekInPage implements OnInit {

  public formulario = {
    reserva : "",
    nombre : "",
    apellidos : "",
    ubicacion : "",
    direccion : "",
    telefono : ""
  };

  constructor(
    public navCrl: NavController
  ) { }

  ngOnInit() {
  }

  saveInfo(){
    console.log(this.formulario);
  }

}
