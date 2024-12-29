import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';


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

  updateGreeting() {
    const name = this.contact.name || '';
    const greetingElement = document.getElementById('greeting');
    if (greetingElement) {
      greetingElement.textContent = `Hola ${name}, envíame un mensaje`;
    }
  }

  adjustTextareaHeight() { const textarea = document.getElementById('message'); if (textarea)
    { textarea.style.height = 'auto'; textarea.style.height = textarea.scrollHeight + 'px'; } }

  onSubmit(contactForm: any) {
    emailjs.sendForm('service_4p6nbnn', 'template_xxg2k1e', '#contactForm', 'pP79nKH1V7EFkYfKx')
      .then((result: { text: any; }) => {
        console.log('Mensaje enviado:', result.text);
        Swal.fire({ title: '¡Mensaje enviado con éxito!', text: `Gracias por tu mensaje,
          ${this.contact.name}. En breve te respondere 😁.`, icon: 'success', confirmButtonText: 'Aceptar' });
      }, (error: { text: any; }) => {
        console.error('Error al enviar el mensaje:', error.text);
        Swal.fire({ title: 'Error', text: 'Ocurrió un error al enviar el mensaje a lo mejor ingresaste algo mal. Por favor, inténtalo de nuevo.',
        icon: 'error', confirmButtonText: 'Aceptar' });
      });
  }
}
