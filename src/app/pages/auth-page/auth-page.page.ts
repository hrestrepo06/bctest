import { Component, inject, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.page.html',
  styleUrls: ['./auth-page.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AuthPagePage implements OnInit {

  email: string = '';
  password: string = '';
  private ruta = inject(Router);

  constructor() { }

  ngOnInit() {
  }

  // funcioar para validar que el usuario ingreso como admin
  validar(){
    if (this.password=='admin') {
        this.ruta.navigate(['user-list']);
    }
    return;
  }

}
