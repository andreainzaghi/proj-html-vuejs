
new Vue({
  el: '#root',
  data: {
    listNav:['HOME','THE CLUB','EVENTS'],
    listNavbar:['JOBS','NEWS','CONTACT US'],
    fotoUno:[
      { date:'img/1.jpg',
      message: 'dance lounge'},
      { date:'img/2.jpg',
      message: 'rooftopbar'},
      { date:'img/3.jpg',
      message: 'vip lounge'},
      { date:'img/4.jpg',
      message: 'resident dj'}
    ],

    items: [{ img:'img/111.jpg',
    title:'Dj Fusion',
    date:'August 28, 2021 @ 22.00 am'},
    {img:'img/222.jpg',
    title:'House Nation',
    date:'September 9, 2021 @ 22.00 am'},
    {img:'img/333.jpg',
    title:'VIP Taste Session',
    date:'April 3, 2021 @ 22.00 am'},
    {img:'img/444.jpg',
    title:'Funky House Rave',
    date:'May 17, 2021 @ 22.00 am'},
    {img:'img/555.jpg',
    title:'June Night',
    date:'August 22, 2021 @ 22.00 am'},
    {img:'img/665.jpg',
    title:'Urban Vibes',
    date:'July 19, 2021 @ 22.00 am'}]

  },
  computed: { },
  methods: {
    shuffle: function () {
      let counter = this.items.length;

      while (counter > 0) {
        let randomIndex = Math.floor(Math.random() * counter);

        counter--;

        let temp = this.items[counter];
        Vue.set(this.items, counter, this.items[randomIndex]);
        Vue.set(this.items, randomIndex, temp);
      }

      this.shuffledDeck = true;
      this.shuffleCount++;
    }
  }
})
