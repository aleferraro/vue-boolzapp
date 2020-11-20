/*
Milestone 1:
Grafica (80%): realizzare l'interfaccia grafica prima nella sua struttura portante (HTML) per intero, successivamente dedicatevi ai dettagli stilistici (CSS)
Logica (20%): inizializzare l'istanza Vue per il controllo dell'app. Inserire i dati necessari a generare le parti dell'interfaccia che dipendono da questi dati ( TEMPLATE HTML + JS )
*/

const myApp = new Vue({
  el: '#root',
  data: {
    mainUser: {
      name: 'Nome Utente',
      imageUrl: 'img/avatar_io.jpg'
    },
    contacts: [
      {
        name: 'Michele',
        imageUrl: 'img/avatar_1.jpg',
        lastAccess: 'ultimo accesso'
      },
      {
        name: 'Fabio',
        imageUrl: 'img/avatar_2.jpg',
        lastAccess: 'ultimo accesso'
      },
      {
        name: 'Samuele',
        imageUrl: 'img/avatar_3.jpg',
        lastAccess: 'ultimo accesso'
      },
      {
        name: 'Luisa',
        imageUrl: 'img/avatar_4.jpg',
        lastAccess: 'ultimo accesso'
      }
    ]
  },
  methods: {

  },
  computed: {
    
  }
})
