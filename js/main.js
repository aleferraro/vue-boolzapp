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
            date: '19/11/2020 12.44',
            sent: true
          },
          {
            text: 'Come va?',
            date: '19/11/2020 12.44',
            sent: true
          },
          {
            text: 'Ciao Ale! Io tutto ok! Tu?',
            date: '19/11/2020 12.47',
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
            text: 'Ciao Ale! Che fai oggi? Vieni a giocare a calcetto?',
            date: '18/11/2020 14.30',
            sent: false
          },
          {
            text: 'Hei Fabio! Ci sto! A che ora e dove?',
            date: '18/11/2020 14.44',
            sent: true
          },
          {
            text: 'Ci vediamo al campo alle 18.00',
            date: '18/11/2020 15.05',
            sent: false
          }
        ]
      },
      {
        name: 'Stefano',
        imageUrl: 'img/avatar_3.jpg',
        lastAccess: 'ieri, 18.54',
        messages: [
          {
            text: 'Ci sei per una pizza domani sera?',
            date: '15/11/2020 19.42',
            sent: true
          },
          {
            text: 'Si dai! è da tanto che non ci vediamo, così ti racconto un po di cose',
            date: '15/11/2020 20.13',
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
            text: 'Buongiorno!',
            date: '12/11/2020 8.22',
            sent: true
          },
          {
            text: 'Buongiorno, mi sono appena svegliata.. Come va?',
            date: '12/11/2020 10.44',
            sent: false
          },
          {
            text: 'Tutto ok! Hai fatto le ore piccole? :D',
            date: '12/11/2020 11.02',
            sent: true
          }
        ]
      }
    ],
    activeChat: 0,
    newMessage: '',
    filter: ''
  },
  methods: {
    selectChat: function(index){
      this.activeChat = index
    },
    isActive: function(index){
      if(this.activeChat == index){
        return true
      }
    },
    pushMessage: function(){
      let newMessageObj = {
        text: this.newMessage,
        date: this.actualTime(),
        sent: true
      };
      this.contacts[this.activeChat].messages.push(newMessageObj);

      this.newMessage = '';

      window.setTimeout(this.pushResponse, 3000);
    },
    pushResponse: function(){
      const automaticRespose = {
        text: 'ciao!',
        date: this.actualTime(),
        sent: false
      };

      this.contacts[this.activeChat].messages.push(automaticRespose);
    },
    actualTime: function(){
      let today = new Date();
      let gg = String(today.getDate()).padStart(2, 0);
      let mm = String(today.getMonth() + 1).padStart(2, '0');
      let yyyy = today.getFullYear();
      let hours = today.getHours();
      let minutes = today.getMinutes();

      return `${gg}/${mm}/${yyyy} ${hours}.${minutes}`;
    },
  },
  computed: {
  }
})
