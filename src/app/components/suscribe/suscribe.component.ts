import { Component, inject  } from '@angular/core';
import { environment } from '../../../environments/environment';
import emailjs from 'emailjs-com';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-suscribe',
  imports: [FormsModule, CommonModule],
  templateUrl: './suscribe.component.html',
  styleUrl: './suscribe.component.css',
})
export class SuscribeComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  message: string = '';
  isLoading: boolean = false;
  showErrorMessage: boolean = false;

  private readonly _modalSvc = inject(ModalService);

  sendEmail() {

    this.showErrorMessage = false;

    if (!this.name || !this.email || !this.message) {
      this.showErrorMessage = true;
      return; 
    }

    this.isLoading = true;

    const templateParams = {
      name: this.name,
      email: this.email,
      message: this.message,
      phone: this.phone,
    };

    emailjs
      .send(
        environment.emailServiceId,
        environment.emailTemplateId,
        templateParams,
        environment.emailUserId
      )
      .then((response) => {
        console.log('Email enviado correctamente', response);
        this._modalSvc.openModal<ModalComponent>(ModalComponent, "success");
        this.resetForm();
        this.isLoading = false;
      })
      .catch((error) => {
        console.error('Error enviando email', error);
        alert('Ocurrió un error al enviar el mensaje.');
        this.isLoading = false;
      });
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.phone = '';
    this.message = '';
  }

}
