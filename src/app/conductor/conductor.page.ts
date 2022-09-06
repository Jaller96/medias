import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {

  constructor(private alertController: AlertController) {}

  ngOnInit() {
  }
  
  async publicar() {
    const alert = await this.alertController.create({
      header: 'Su anuncio a sido publicado con Exito',
      subHeader: '',
      message: 'La publicacion que ha detallado se a relizado con exito en la base de datos',
      buttons: ['OK'],
    });

    await alert.present();
  }

}

