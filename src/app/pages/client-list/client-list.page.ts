import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonToolbar, 
  IonContent, 
  IonHeader, 
  IonItem, 
  IonList, 
  IonAvatar, 
  IonLabel, 
  IonButton, 
  IonIcon, 
  IonButtons, 
  IonBackButton, 
  IonTitle 
} from "@ionic/angular/standalone";

interface Cliente {
  id: number;
  nombre: string;
  imagenPerfil: string;
  saldo: number;
}

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.page.html',
  styleUrls: ['./client-list.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonToolbar, 
    IonContent, 
    IonHeader, 
    IonItem, 
    IonList, 
    IonAvatar, 
    IonLabel, 
    IonButton, 
    IonIcon, 
    IonButtons, 
    IonBackButton, 
    IonTitle
  ]
})
export class ClientListPage implements OnInit {

  clientes: Cliente[] = [];

  constructor() { }

  ngOnInit() {
    this.cargarClientes();
  }

  cargarClientes() {
    // Datos de ejemplo - en una aplicación real esto vendría de un servicio
    this.clientes = [
      {
        id: 1,
        nombre: 'Juan Pérez',
        imagenPerfil: 'J',
        saldo: 1850.50
      },
      {
        id: 2,
        nombre: 'María García',
        imagenPerfil: 'M',
        saldo: 2300.75
      },
      {
        id: 3,
        nombre: 'Carlos López',
        imagenPerfil: 'C',
        saldo: 950.25
      },
      {
        id: 4,
        nombre: 'Ana Rodríguez',
        imagenPerfil: 'A',
        saldo: 3200.00
      },
      {
        id: 5,
        nombre: 'Luis Martínez',
        imagenPerfil: 'L',
        saldo: 1500.80
      },
      {
        id: 6,
        nombre: 'Carmen Silva',
        imagenPerfil: 'C',
        saldo: 2750.30
      },
      {
        id: 7,
        nombre: 'Roberto Díaz',
        imagenPerfil: 'R',
        saldo: 1800.45
      },
      {
        id: 8,
        nombre: 'Patricia Ruiz',
        imagenPerfil: 'P',
        saldo: 4100.20
      },
      {
        id: 9,
        nombre: 'Fernando Torres',
        imagenPerfil: 'F',
        saldo: 1200.90
      },
      {
        id: 10,
        nombre: 'Isabel Morales',
        imagenPerfil: 'I',
        saldo: 3600.60
      }
    ];
  }

  formatearMoneda(valor: number): string {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(valor);
  }
}
