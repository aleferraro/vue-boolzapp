/*
Milestone 1:
Grafica (80%): realizzare l'interfaccia grafica prima nella sua struttura portante (HTML) per intero, successivamente dedicatevi ai dettagli stilistici (CSS)
Logica (20%): inizializzare l'istanza Vue per il controllo dell'app. Inserire i dati necessari a generare le parti dell'interfaccia che dipendono da questi dati ( TEMPLATE HTML + JS )
*/

const myApp = new Vue({
  el: '#root',
  data: {
    mainUser: {
      name: 'Alessandro',
      imageUrl: 'img/avatar_io.jpg'
    },
    contacts: [
      {
        name: 'Michele',
        imageUrl: 'img/avatar_1.jpg',
        lastAccess: '20 Nov, 15.33',
        messages: [
          {
            text: 'Ciao Michele!',
            date: '15/11/2020 12.44',
            sent: true
          },
          {
            text: 'Come va?',
            date: '15/11/2020 12.44',
            sent: true
          },
          {
            text: 'Ciao Ale! Io tutto ok! Tu?',
            date: '15/11/2020 12.44',
            sent: false
          }
        ]
      },
      {
        name: 'Fabio',
        imageUrl: 'img/avatar_2.jpg',
        lastAccess: 'oggi, 9.43',
        messages: [
          {
            text: 'Ciao Michele!',
            date: '15/11/2020 12.44',
            sent: true
          },
          {
            text: 'Come va?',
            date: '15/11/2020 12.44',
            sent: true
          },
          {
            text: 'Ciao Ale! Io tutto ok! Tu?',
            date: '15/11/2020 12.44',
            sent: false
          }
        ]
      },
      {
        name: 'Samuele',
        imageUrl: 'img/avatar_3.jpg',
        lastAccess: 'ieri, 18.54',
        messages: [
          {
            text: 'Ciao Michele!',
            date: '15/11/2020 12.44',
            sent: true
          },
          {
            text: 'Come va?',
            date: '15/11/2020 12.44',
            sent: true
          },
          {
            text: 'Ciao Ale! Io tutto ok! Tu?',
            date: '15/11/2020 12.44',
            sent: false
          }
        ]
      },
      {
        name: 'Luisa',
        imageUrl: 'img/avatar_4.jpg',
        lastAccess: '10 Ago, 12.00',
        messages: [
          {
            text: 'Ciao Michele!',
            date: '15/11/2020 12.44',
            sent: true
          },
          {
            text: 'Come va?',
            date: '15/11/2020 12.44',
            sent: true
          },
          {
            text: 'Ciao Ale! Io tutto ok! Tu?',
            date: '15/11/2020 12.44',
            sent: false
          }
        ]
      }
    ],
    activeChat: 0
  },
  methods: {
    selectChat: function(index){
      this.activeChat = index
    }
  },
  computed: {
  }
})
