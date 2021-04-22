
new Vue({
  el: '#root',
  data: {
    popUp:'display',
    listNav:[
      {nav:'HOME',
      title:'home'
    },
      {nav:'THE CLUB',
      title:'the club'
    },
      {nav:'EVENTS',
      title:'events'
    },
      {nav:'JOBS',
      title:'jobs'
    },
      {nav:'NEWS',
      title:'news'
    },
      {nav:'CONTACT US',
      title:'CONTACT US'
    }],
    show: false,
    // listNavbar:[
    //   {nav:'JOBS',
    //   title:'jobs'},
    //   {nav:'NEWS',
    //   title:'news'},
    //   {nav:'CONTACT US',
    //   title:'CONTACT US'}
    // ],
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
    //   videos: [
    //   { video:'video/video1.mp4',
    //   title:'Dj Fusion',
    //   date:'August 28, 2021 @ 22.00 am'},
  //   {video:'video/video2.mov',
  //   title:'House Nation',
  //   date:'September 9, 2021 @ 22.00 am'},
  //   {video:'video/video3.mp4',
  //   title:'VIP Taste Session',
  //   date:'April 3, 2021 @ 22.00 am'}
  // ],
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
    date:'July 19, 2021 @ 22.00 am'}],
    currentUser:0
  },
  computed: { },
  methods: {
    prova:function(index){
    this.currentUser=index;
    console.log(this.currentUser);
  },
  popUpdown:function(){
    if (this.popUp == 'display') {
       this.popUp = 'popup';
    } else{
      this.popUp = 'display';
    }

  },
   //  beforeEnter: function (el) {
   //   el.style.opacity = 0
   //   el.style.transformOrigin = 'left'
   // },
   // enter: function (el, done) {
   //   Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
   //   Velocity(el, { fontSize: '1em' }, { complete: done })
   // },
   // leave: function (el, done) {
   //   Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
   //   Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
   //   Velocity(el, {
   //     rotateZ: '45deg',
   //     translateY: '30px',
   //     translateX: '30px',
   //     opacity: 0
   //   }, { complete: done })
   // },
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
