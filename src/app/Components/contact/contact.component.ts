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

  constructor(private router: Router) {}
  updateGreeting() {
    const name = this.contact.name || '';
    const greetingElement = document.getElementById('greeting');
    if (greetingElement) {
      greetingElement.textContent = `Hola ${name}, envíame un mensaje`;
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
        text: `Por favor, completa todo los campos te falto: ${missingFieldsText}.`,
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
          title: '¡Mensaje enviado con éxito!',
          text: `Gracias por tu mensaje, ${this.contact.name}. En breve te responderé 😁.`,
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
                // Reiniciar el formulario pero mantener el nombre
                const name = this.contact.name;
                contactForm.resetForm({ name: name });
                this.contact.email = '';
                this.contact.message = '';
                this.updateGreeting(); // Actualizar el saludo
              } else if (result.isDenied) {
                this.router.navigate(['/home']);  // Redirigir a la página principal
              }
            });
          }
        });
      }, (error: { text: any; }) => {
        console.error('Error al enviar el mensaje:', error.text);
        Swal.fire({
          title: 'Error',
          text: 'Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      });
  }
}
