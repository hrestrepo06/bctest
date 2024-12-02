import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../interface/users.interface';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { UserModalComponent } from '../pages/user-modal/user-modal.component';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl: string = 'https://jsonplaceholder.typicode.com/users';
  http = inject(HttpClient);
  modalCtrl = inject(ModalController);

  constructor() {}
  // Funcion para obtener los usuarios de la Api
  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: UserModalComponent,
      componentProps: {
        foo: 'hello',
        bar: 'world',
      },
    });
    return await modal.present();
  }

  dismissModal(data?: any) {
    return this.modalCtrl.dismiss(data);
  }
}
