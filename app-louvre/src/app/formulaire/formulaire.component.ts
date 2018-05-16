import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'fr' }
  ]
})




export class FormulaireComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


  ticket: any = {

    tarif: '',
    type: false, // mettre a true apres 14 heures
    nombre: 1,
    nom: '',
    date: ''

  };
  listeNoms: Array<string> = [];
  nombreNoms: any;
  halfDay: any = false;
  minDate: any = new Date();

  constructor(private adapter: DateAdapter<any>) {
    this.adapter.setLocale('fr');
  }

  ngOnInit() {
  }


  consolelog() {

    console.log(this.ticket);

    /*  this.comparerDates(); */
  }


  checkNames() {

    if (this.ticket.nom !== '') {
      this.listeNoms = this.ticket.nom.split('\n');
      console.log(this.listeNoms.length);
      console.log(this.listeNoms);

      if (this.listeNoms[this.listeNoms.length - 1] !== '') {
        console.log(this.listeNoms.length + ' noms');

        this.nombreNoms = this.listeNoms.length;
      } else {
        console.log(this.listeNoms.length - 1 + ' noms');
        this.nombreNoms = this.listeNoms.length - 1;
      }

    }
    if (this.nombreNoms > this.ticket.nombre) {
      this.listeNoms.pop();
      this.ticket.nom = this.listeNoms.join('\n');
    }

  }


  comparerDates() {
    const dateTicket = new Date(this.ticket.date);
    const now = new Date();
    if (now.getDay() === dateTicket.getDay()
      && now.getFullYear() === dateTicket.getFullYear()
      && now.getMonth() === dateTicket.getMonth()
      && now.getHours() >= 14) {
      console.log('demi journée obligatoire' + now);
      this.ticket.type = true;
      this.halfDay = true;
      return true;
    } else {
      console.log('journée complete accepté');
      this.halfDay = false;
      return false;
    }

  }


  upNombreTickets() {

    if (this.ticket.nombre < 30) {
      this.ticket.nombre++;
    }

  }
  downNombreTicket() {
    if (this.ticket.nombre > 1) {
      this.ticket.nombre--;
    }

  }


}
