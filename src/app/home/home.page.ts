import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public visits = [
    {
      name: 'Arya Stark',
      frequent: true,
      lastAccess: 'Viernes, 10 de Febrero de 2021',
      picture: 'https://media.vogue.es/photos/5ce6ddd6d84f36beba6394f5/16:9/w_1920,c_limit/arya_stark_juego_de_tronos_786.jpg',
    },
    {
      name: 'Tyrion Lannister',
      frequent: false,
      lastAccess: null,
      accessDate: 'Sábado, 2/05/2021',
      picture: 'https://pbs.twimg.com/profile_images/668279339838935040/8sUE9d4C.jpg',
    },
    {
      name: 'Arya Stark',
      frequent: true,
      lastAccess: 'Viernes, 10 de Febrero de 2021',
      picture: 'https://media.vogue.es/photos/5ce6ddd6d84f36beba6394f5/16:9/w_1920,c_limit/arya_stark_juego_de_tronos_786.jpg',
    },
    {
      name: 'Tyrion Lannister',
      frequent: false,
      lastAccess: null,
      accessDate: 'Sábado, 2/05/2021',
      picture: 'https://pbs.twimg.com/profile_images/668279339838935040/8sUE9d4C.jpg',
    },
    {
      name: 'Arya Stark',
      frequent: true,
      lastAccess: 'Viernes, 10 de Febrero de 2021',
      picture: 'https://media.vogue.es/photos/5ce6ddd6d84f36beba6394f5/16:9/w_1920,c_limit/arya_stark_juego_de_tronos_786.jpg',
    },
    {
      name: 'Tyrion Lannister',
      frequent: false,
      lastAccess: null,
      accessDate: 'Sábado, 2/05/2021',
      picture: 'https://pbs.twimg.com/profile_images/668279339838935040/8sUE9d4C.jpg',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
