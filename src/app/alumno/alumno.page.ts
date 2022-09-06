import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  async espera() {
    const loading = await this.loadingCtrl.create({
      message: 'Espere por favor...',
      duration: 10000,
      spinner: 'circles',
    });

    loading.present();
  }
  
}
