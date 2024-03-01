import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HotelService } from '../service/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {
  constructor(private hotel: HotelService) { }
  listHotel!: any;
  showform!: boolean;
  hotleAreserve!: string;
  validationMarie!: string;
  validationAdultes!: string;
  adultes!: number;
  maried!: any;
  enfants!: number;
  Marieyes!: boolean;
  Du!: any;
  Au!: any;
  chambres!: any;
  Adultes!: any;
  statue!: any;
  holemane!: string;
  validationform!: boolean;
  filteredHotels: any[] = [];
  nomHotle!: string;
  recherched!: string;
  message!: string;
  ngOnInit() {
    this.showform = false;
    this.Marieyes = false;
    this.validationform = false;
    this.getHotel();
  }
  getHotel() {
    this.hotel.GetHotleJson().subscribe(data => { this.listHotel = data });
  }

  reserver(hotel: any) {

    this.hotleAreserve = hotel;
    if (this.hotleAreserve != null) {
      this.showform = true;
    }

  }
  Marie() {

    this.Marieyes = true;

  }
  Marie2() {

    this.Marieyes = false;

  }
  Rechercher() {
    if (this.nomHotle !=null) {
      this.filteredHotels = this.listHotel.filter((hotels: any) =>
        hotels.nom.toLowerCase().includes(this.nomHotle.toLowerCase())
      );
    } else {
      this.getHotel();
    }
  }
  Form(form: NgForm) {


    if (!this.statue) {
      this.validationMarie = 'Champs statue obligatoire';
    } else {
      this.validationMarie = '';
    }

    if (this.Adultes == null) {
      this.validationAdultes = 'Champs adultes obligatoire';
    } else {
      this.validationAdultes = '';
    }
    if (this.Adultes != null && this.statue) {
      this.validationform = true;
      this.message = 'Vous aves reserve l\'hotel ' + this.hotleAreserve + ' du ' + form.value.Du + ' au ' + form.value.Au + ' nomber de chambres ' + form.value.chambres + ' ,et' + form.value.Adultes + ' adultes.'

    }
  }

}

