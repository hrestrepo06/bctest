import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/interface/users.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class UserListPage implements OnInit {

  usuarios: User[] = [];

  // inyeccion del servicio para extraer los usuarios
  usersService = inject(UsersService)
  constructor() { }

  // Carga de los datos de los usuarios, para ser mostradors en el template
  ngOnInit() {
    this.usersService.getUser().subscribe( usuarios => {
      this.usuarios = usuarios
    })
  }

}
