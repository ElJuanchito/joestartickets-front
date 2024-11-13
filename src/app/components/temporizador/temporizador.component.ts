import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-temporizador',
  standalone: true,
  templateUrl: './temporizador.component.html',
  styleUrls: ['./temporizador.component.css']
})
export class TemporizadorComponent implements OnInit, OnDestroy {
  tiempo: number = 300;  // Tiempo inicial en segundos (5 minutos)
  intervalo: any;  // Para almacenar el intervalo

  ngOnInit(): void {
    this.iniciarTemporizador();
  }

  ngOnDestroy(): void {
    // Limpiar el intervalo cuando el componente se destruya
    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
  }

  iniciarTemporizador() {
    // Iniciar un intervalo que actualiza el tiempo cada segundo
    this.intervalo = setInterval(() => {
      if (this.tiempo > 0) {
        this.tiempo--;
      } else {
        clearInterval(this.intervalo);
        alert('¡El tiempo ha terminado!');
      }
    }, 1000);  // 1000 ms = 1 segundo
  }

  detenerTemporizador() {
    clearInterval(this.intervalo);
  }

  resetearTemporizador() {
    this.tiempo = 300;  // Resetear el tiempo a 5 minutos
    this.detenerTemporizador();
    this.iniciarTemporizador();
  }

  // Función para convertir el tiempo a minutos:segundos
  getTiempoFormateado(): string {
    const minutos = Math.floor(this.tiempo / 60);
    const segundos = this.tiempo % 60;
    return `${minutos}:${segundos < 10 ? '0' + segundos : segundos}`;
  }
}
