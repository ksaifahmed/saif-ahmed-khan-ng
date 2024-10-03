import { Component, ElementRef, Input, Signal, ViewChild } from '@angular/core';
import { Contacts } from './contact.dummy';
import { environment } from '../../environments/environment';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';
import { LoaderComponent } from '../loader/loader.component';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @Input() backgroundHue!: Signal<number>;
  @ViewChild('form') form!: ElementRef<HTMLFormElement>;
  @ViewChild('loader') loader!: LoaderComponent;

  listOfContacts = Contacts

  constructor (private toastr: ToastrService) {}

  adjustTextBoxHeight(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto'; // Reset height
    textarea.style.height = `${textarea.scrollHeight}px`; // Set to scroll height
  }

  sendEmail(event: Event): void {
    event.preventDefault();
    // this.loader.showProcessLoader();

    emailjs.sendForm(
      environment.EMAILJS_SERVICE_ID,
      environment.EMAILJS_TEMPLATE_ID,
      this.form.nativeElement, 
      environment.EMAILJS_USER_ID,
  ).then((result) => {
      //this.form.nativeElement.reset();
      //this.loader.hideProcessLoader();
      this.toastr.success('Message Sent!', 'Success');
  }, (error) => {
    this.loader.hideProcessLoader();
      this.toastr.error('Something Went Wrong!', 'Error');
  });

  }


  
}
