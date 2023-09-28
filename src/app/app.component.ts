import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestTecAir';

  isMobile: boolean;

  constructor() {
    this.isMobile = window.innerWidth <= 767;
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 767;
    });
  }

  openLoginDialog(): void {
    console.log("Mostrar dialogo");
  }

  test(): void {
    console.log("Probar boton");
  }
}
