import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
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
  IonTitle,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle
} from "@ionic/angular/standalone";

interface ClienteDetalle {
  id: number;
  nombre: string;
  imagenPerfil: string;
  saldo: number;
  redesSociales: {
    instagram?: string;
    whatsapp?: string;
    facebook?: string;
  };
  telefono?: string;
  email?: string;
  direccion?: string;
}

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.page.html',
  styleUrls: ['./client-detail.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
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
    IonTitle,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle
  ]
})
export class ClientDetailPage implements OnInit {

  cliente: ClienteDetalle | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.cargarCliente();
  }

  cargarCliente() {
    // Obtener el ID del cliente de los parámetros de la ruta
    const clienteId = Number(this.route.snapshot.paramMap.get('id'));
    
    // Datos de ejemplo - en una aplicación real esto vendría de un servicio
    const clientesDetalle: ClienteDetalle[] = [
      {
        id: 1,
        nombre: 'Juan Pérez',
        imagenPerfil: 'J',
        saldo: 1850.50,
        redesSociales: {
          instagram: '@juanperez',
          whatsapp: '+57 300 123 4567',
          facebook: 'Juan Pérez'
        },
        telefono: '+57 300 123 4567',
        email: 'juan.perez@email.com',
        direccion: 'Calle 123 #45-67, Bogotá'
      },
      {
        id: 2,
        nombre: 'María García',
        imagenPerfil: 'M',
        saldo: 2300.75,
        redesSociales: {
          instagram: '@mariagarcia',
          whatsapp: '+57 310 987 6543',
          facebook: 'María García'
        },
        telefono: '+57 310 987 6543',
        email: 'maria.garcia@email.com',
        direccion: 'Carrera 78 #12-34, Medellín'
      },
      {
        id: 3,
        nombre: 'Carlos López',
        imagenPerfil: 'C',
        saldo: 950.25,
        redesSociales: {
          whatsapp: '+57 315 456 7890',
          facebook: 'Carlos López'
        },
        telefono: '+57 315 456 7890',
        email: 'carlos.lopez@email.com',
        direccion: 'Avenida 5 #23-45, Cali'
      },
      {
        id: 4,
        nombre: 'Ana Rodríguez',
        imagenPerfil: 'A',
        saldo: 3200.00,
        redesSociales: {
          instagram: '@anarodriguez',
          whatsapp: '+57 320 111 2222',
          facebook: 'Ana Rodríguez'
        },
        telefono: '+57 320 111 2222',
        email: 'ana.rodriguez@email.com',
        direccion: 'Calle 89 #67-89, Barranquilla'
      },
      {
        id: 5,
        nombre: 'Luis Martínez',
        imagenPerfil: 'L',
        saldo: 1500.80,
        redesSociales: {
          instagram: '@luismartinez',
          whatsapp: '+57 325 333 4444'
        },
        telefono: '+57 325 333 4444',
        email: 'luis.martinez@email.com',
        direccion: 'Carrera 45 #12-34, Bucaramanga'
      }
    ];

    this.cliente = clientesDetalle.find(c => c.id === clienteId) || null;
  }

  formatearMoneda(valor: number): string {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(valor);
  }

  abrirRedSocial(tipo: string, valor: string) {
    let url = '';
    
    switch(tipo) {
      case 'instagram':
        url = `https://instagram.com/${valor.replace('@', '')}`;
        break;
      case 'whatsapp':
        url = `https://wa.me/${valor.replace(/\D/g, '')}`;
        break;
      case 'facebook':
        url = `https://facebook.com/${valor}`;
        break;
    }
    
    if (url) {
      window.open(url, '_blank');
    }
  }
}
