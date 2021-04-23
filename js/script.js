
new Vue({
  el: '#root',
  data: {
    overlayBleach:'display-n',
    overlayBleach1:'display-n',
    immagineFesta:'img-fest',
    popUp:'display',
    popUp1:'display',
    popUp2:'display',
    listNav:[
      {nav:'HOME',
      title:'img/f1.jfif'
    },
    {nav:'THE CLUB',
    title:'img/f2.jfif'
  },
  {nav:'EVENTS',
  title:'img/f3.jfif'
}],
images: [
     'https://jethros4u.com/images/new-orleans-louisiana-family-travel-guide.jpg',
     'https://www.viaggi-usa.it/wp-content/uploads/2018/11/New-Orleans-Quando-Andare-Clima-e-Temperature.jpg',
     'https://www.tripsavvy.com/thmb/G6pksG59f0VmQ9iG5FjlVcspXC0=/3865x2576/filters:fill(auto,1)/historic-green-tram-new-orleans-678716925-5a726323d8fdd500362640f9.jpg',
     'https://i.pinimg.com/originals/2b/1f/c3/2b1fc350fb8ec2969e4560f505ff226e.jpg',
     'https://i.pinimg.com/originals/f9/a4/80/f9a480f2957e8136e0329b1d44655bc2.png'
   ],
   slideIndex: 0,

show: false,
listNavbar:[
  {nav:'JOBS',
  title:'img/f6.jfif'
},
{nav:'NEWS',
title:'img/f5.jfif'
},
{nav:'CONTACT US',
title:'img/f6.jfif'
}
],
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
date:'August 28, 2021 @ 22.00 pm'},
{img:'img/222.jpg',
title:'House Nation',
date:'September 9, 2021 @ 22.00 pm'},
{img:'img/333.jpg',
title:'VIP Taste Session',
date:'April 3, 2021 @ 22.00 pm'},
{img:'img/444.jpg',
title:'Funky House Rave',
date:'May 17, 2021 @ 22.00 pm'},
{img:'img/555.jpg',
title:'June Night',
date:'August 22, 2021 @ 22.00 pm'},
{img:'img/665.jpg',
title:'Urban Vibes',
date:'July 19, 2021 @ 22.00 pm'}],
currentUser:0,
currentUser1:0
},
computed: { },
methods: {

  prova:function(index){
    this.currentUser=index;
    console.log(this.currentUser);
  },
  prova1:function(index){
    this.currentUser1=index;
    console.log(this.currentUser1);
  },
  popUpdown:function(){
    if (this.popUp == 'display') {
      this.popUp = 'popup';
      this.popUp1 = 'display';
        this.popUp2 = 'display';
    }

  },
  flip:function(){
    if (this.immagineFesta == 'img-fest') {
      this.immagineFesta = 'img-trasf';
    }else{   this.immagineFesta = 'img-fest';
  }



},
slider:function(){
  if (this.overlayBleach== 'display-n') {
    this.overlayBleach = 'overlay-blach';
  }else{
    this.overlayBleach = 'display-n';
  }



},
slider1:function(){
  if (this.overlayBleach1== 'display-n') {
    this.overlayBleach1 = 'overlay-blach';
  }else{
    this.overlayBleach1 = 'display-n';
  }



},
popDown:function(){
  if (this.popUp == 'popup') {
    this.popUp = 'display';
  }

},
popUpdown1:function(){
  if (this.popUp1 == 'display') {
    this.popUp1 = 'popup';
    this.popUp = 'display';
    this.popUp2 = 'display';
  }

},
popUpdown2:function(){
  if (this.popUp2 == 'display') {
    this.popUp2 = 'popup';
    this.popUp1 = 'display';
      this.popUp = 'display';
  }

},
popDown1:function(){
  if (this.popUp1 == 'popup') {
    this.popUp1 = 'display';
  }

},
popDown2:function(){
  if (this.popUp2 == 'popup') {
    this.popUp2 = 'display';
  }

},
// prev slide al click
   prevSlide: function() {
     this.slideIndex--;
     if (this.slideIndex < 0) {
       this.slideIndex = this.images.length -1;
     }
   },
   // next slide al clicks
   nextSlide: function() {
     this.slideIndex++;
     if (this.slideIndex == this.images.length) {
       this.slideIndex = 0;
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
