import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QR2';
  myAngularxQrCode: any;
  Peli:string = ``;
  Media: number = 0;
  Pelicula: Array<any> = []  ;  
  
  constructor(){
    // this.Peli = "Peli 1 ";
    // this.Media = Math.random()*100;
    // this.myAngularxQrCode = `Pelicula: ` + this.Peli + 
    // `Media:` + this.Media;
  }

  generarQR(){
    const num = Math.round(Math.random()*3);
    const data = [
      {
        name: 'Pelicula 1: ',
        data: [Math.random()*100],
      },
      {
        name: 'Pelicula 2: ',
        data: [Math.random()*100],
      },
      {
        name: 'Pelicula 3: ',
        data: [Math.random()*100],
      },
      {
        name: 'Pelicula 4: ',
        data: [Math.random()*100],
      }
    ]
    console.log(data[num]);
    // this.myAngularxQrCode = data[num].name + "\n Puntuación: " + data[num].data;
    this.myAngularxQrCode = "https://joaquine7.github.io/miniproyecto2/movie-details/" + Math.round(Math.random()*(1130000-195000)+195000);
    
  }
}
