import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Yeysoon', icon: '/icons/Github.png' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/yeysoon/', icon: '/icons/Linkedin.png' },
    { name: 'YouTube', url: 'https://www.youtube.com/@yeysoon', icon: '/icons/Youtube.png' },
    { name: 'WhatsApp', url: 'https://wa.me/+50246402539', icon: '/icons/Whatsapp.png' }
  ];

  secondTimeSending: boolean = false;
  constructor(private router: Router) {}

  updateGreeting() {
    const name = this.contact.name || '';
    const greetingElement = document.getElementById('greeting');
    if (greetingElement) {
      if (this.secondTimeSending) {
        greetingElement.textContent = `¿Otro Mensaje ${name}? 🥰 Venga, cuéntame más. 😏`;
      } else {
        greetingElement.textContent = `Hey ${name}, después de revisar mi perfil, ¿crees que encajo en tu equipo? Hazmelo Saber.`;
      }
    }
  }

  adjustTextareaHeight() {
    const textarea = document.getElementById('message');
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  }

  checkFormValidity(contactForm: any) {
    if (contactForm.invalid) {
      const missingFields = [];
      if (!this.contact.name) missingFields.push('Nombre');
      if (!this.contact.email) missingFields.push('Correo Electrónico');
      if (!this.contact.message) missingFields.push('Mensaje');
      const missingFieldsText = missingFields.join(', ');

      Swal.fire({
        title: 'Error',
        text: `Por favor, completa todos los campos. Te falta ${missingFieldsText}.`,
        icon: 'error',
        confirmButtonText: 'Volver'
      });
    } else {
      this.onSubmit(contactForm);
    }
  }

  onSubmit(contactForm: any) {
    emailjs.sendForm('service_4p6nbnn', 'template_xxg2k1e', '#contactForm', 'pP79nKH1V7EFkYfKx')
      .then((result: { text: any; }) => {
        console.log('Mensaje enviado:', result.text);
        Swal.fire({
          title: '¡Enviado a Yeysoon!',
          text: `Gracias por tu mensaje, ${this.contact.name}. En breve te respondo. 😊`,
          icon: 'success',
          confirmButtonText: 'Aceptar'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: '¿Deseas enviar otro mensaje?',
              showDenyButton: true,
              confirmButtonText: 'Sí',
              denyButtonText: 'No',
            }).then((result) => {
              if (result.isConfirmed) {
                const name = this.contact.name;
                contactForm.resetForm({ name: name });
                this.contact.email = '';
                this.contact.message = '';
                this.secondTimeSending = true;
                this.updateGreeting();
              } else if (result.isDenied) {
                this.router.navigate(['/home']);
              }
            });
          }
        });
      }, (error: { text: any; }) => {
        console.error('Error al enviar el mensaje:', error.text);
        Swal.fire({
          title: 'Error',
          text: 'Ocurrió un error al enviar el mensaje. Si falla nuevamente, escríbeme a mis redes sociales.',
          icon: 'error',
          confirmButtonText: 'Intentarlo de Nuevo'
        });
      });
  }
}
