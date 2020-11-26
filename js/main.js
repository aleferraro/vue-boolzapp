/*
Milestone 1:

Grafica (80%): realizzare l'interfaccia grafica prima nella sua struttura portante (HTML) per intero, successivamente dedicatevi ai dettagli stilistici (CSS)
Logica (20%): inizializzare l'istanza Vue per il controllo dell'app. Inserire i dati necessari a generare le parti dell'interfaccia che dipendono da questi dati ( TEMPLATE HTML + JS )

Milestone 2:

- Possibilita' di selezionare un contatto e mostrare la chat relativa a quel contatto nel box dei messagi ( nome, last seen e storico messaggi )
- Il contatto selezionato nella sidebar cambia il suo background color
- I messaggi, oltre al testo e alla data, hanno un determinato stato, ricevuto o inviato, e in base a questo deve mostrarsi come in figura

Milestone 3:

Abilitare l'utente all'invio dei messaggi. Fare in modo che l'utente possa inserire un testo nell'input predisposto e che alla pressione del tasto 'Enter' questo messaggio si visualizzi correttamente nell'interfaccia ( diventa parte dello storico dei messaggi relativi a quell'utente... ). Inoltre, dopo 3 secondi dall'evento di invio messaggio, simulare una risposta standard da parte del contatto attivo in quel momento.

Milestone 4:

Abilitare l'utente a filtrare i contatti nella sezione di sinistra. Il filtraggio deve attivarsi quando l'utente inizia a inserire dei caratteri nell'input ed il confronto (inclusione... ) deve essere fatto con il nome dei contatti.

*/

const emoticons = [
  'surprise',
  'smile-wink',
  'smile-beam',
  'sad-tear',
  'sad-cry',
  'meh-rolling-eyes',
  'meh-blank',
  'meh',
  'grin-wink',
  'grin-stars',
  'grin-squint-tears',
  'grin-squint',
  'grin-hearts',
  'grin-beam',
  'grin-alt',
  'grin',
  'tired',
  'smile',
  'laugh-wink',
  'laugh-squint',
  'laugh-beam',
  'laugh',
  'kiss-wink-heart',
  'kiss-beam',
  'kiss',
  'grin-tongue-wink',
  'grin-tongue-squint',
  'grin-tongue',
  'grin-tears',
  'grin-beam-sweat',
  'grimace',
  'frown-open',
  'frown',
  'flushed',
  'angry',
  'dizzy'
];


const myApp = new Vue({
  el: '#root',
  data: {
    // main user data
    mainUser: {
      name: 'Alessandro',
      imageUrl: 'img/avatar_io.jpg'
    },
    // list of all contacts,  contains name, image url, last access and history of messages
    contacts: [
      {
        name: 'michele',
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
        name: 'fabio',
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
        name: 'stefano',
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
        name: 'luisa',
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
    // gives an object to the active chat
    activeContact: null,
    //initialize the new message, it will be refreshed changing the text in the message bar
    newMessage: '',
    //a list of possible answers
    possibleAnswers: [
      'ciao',
      'ok',
      'come stai?',
      'tutto bene',
      'domani andiamo al mare?',
      "oggi c'è il sole",
      'butta la pasta che sto arrivando',
      'a lavoro tutto bene',
      'grazie',
      'prego',
      'scusa',
      'il mio gatto fa le fusa'
    ],
    //takes input form the search box
    filter: '',
    icons: [...emoticons]
  },
  created(){
    this.activeContact = this.contacts[0]
  },
  methods: {
    //allows the viewing of the active chat
    selectChat: function(contact){
      this.activeContact = contact
    },
    //use this function to set background color on the active chat
    isActive: function(contact){
      if(this.activeContact == contact){
        return true
      }
    },
    //push the new message in the message array and allow us to view the message in the chat, after 3 seconds an automatic answer will appear
    pushMessage: function(){
      let newMessageObj = {
        text: this.newMessage,
        date: this.actualTime(),
        sent: true
      };
      this.activeContact.messages.push(newMessageObj);

      this.newMessage = '';

      window.setTimeout(() => {this.scrollToEnd()}, 100);

      let currectContact = this.activeContact;
      window.setTimeout(() => {this.pushAnswer(currectContact)}, 3000);
    },
    // set the automatic answer
    pushAnswer: function(contact){
      const automaticRespose = {
        text: this.possibleAnswers[Math.floor(Math.random() * this.possibleAnswers.length)],
        date: this.actualTime(),
        sent: false
      };

      contact.messages.push(automaticRespose);

      window.setTimeout(() => {this.scrollToEnd()}, 100);
    },
    scrollToEnd: function(){
    var element = this.$el.querySelector("#chat");
    element.scrollTop = element.scrollHeight;
    },
    //set the data that will appear in every new message
    actualTime: function(){
      let today = new Date();
      let gg = String(today.getDate()).padStart(2, 0);
      let mm = String(today.getMonth() + 1).padStart(2, '0');
      let yyyy = today.getFullYear();
      let hours = today.getHours();
      let minutes = String(today.getMinutes()).padStart(2, '0');

      return `${gg}/${mm}/${yyyy} ${hours}.${minutes}`;
    },
    deleteMessage: function(index){
      this.activeContact.messages.splice(index, 1)
    }
  },
  computed: {
    //filter the cntacts array by name and give us back the filtered list or the initital list
    filteredContacts: function() {

      if(this.filter == ''){
        return this.contacts
      } else {
        return  this.contacts.filter(contact => contact.name.toLowerCase().includes(this.filter.toLowerCase()))
      }

    }
  }
})
