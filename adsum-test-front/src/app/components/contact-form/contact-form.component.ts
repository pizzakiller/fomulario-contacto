import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  constructor(private serviceContacto: ContactoService, private formBuilder: FormBuilder, 
    private http: HttpClient) { }
  contacto: FormGroup
  enviado = false
  title:string = 'Contactenos'
  opciones = ["Facturación", "Soporte técnico", "Ventas", "Información general"]
  ngOnInit() {
    this.contacto = this.formBuilder.group({
      nombre: ['', Validators.required],
      empresa: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      categoria: ['', Validators.required],
      mensaje: ['', Validators.required],
    })
  }

  get f() {return this.contacto.controls}

  onSubmit() {
    this.enviado = true
    if(this.contacto.invalid){
      return
    }
     this.agregar()     
  }

  agregar(){
    this.serviceContacto.agregarContacto(this.contacto.value).subscribe(
      data => {
        if(data['resultado'] == 'OK') {
           alert(data['mensaje'])
        }
      }
    )
  }

}
