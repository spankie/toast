iziToast.settings({
  theme: 'light',
  timeout: 3000,
  // resetOnHover: true,
  icon: 'material-icons',
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
  position: "bottomLeft",
  progressBar: false,
  close: false,
  // onOpening: function(){
  //     console.log('callback abriu!');
  // },
  // onClosing: function(){
  //     console.log("callback fechou!");
  // }
});

const messages = [
  {
    location: "Turin",
    image: 'img/turin.png'
  },
  {
    location: "Lagos",
    image: 'img/lagos.png'
  },
  {
    location: "Lagos",
    image: 'img/lagos.png'
  },
  {
    location: "Abuja",
    image: 'img/lagos.png'
  },
  {
    location: "Abu Dhabi",
    image: 'img/lagos.png'
  },
  {
    location: "Dubai",
    image: 'img/lagos.png'
  },
  {
    location: "Dallas",
    image: 'img/lagos.png'
  },
  {
    location: "Charlotte",
    image: 'img/lagos.png'
  },
  {
    location: "Toronto",
    image: 'img/lagos.png'
  },
  {
    location: "Detroit",
    image: 'img/lagos.png'
  },
  {
    location: "Kumasi",
    image: 'img/lagos.png'
  },
  {
    location: "Ibadan",
    image: 'img/lagos.png'
  },
  {
    location: "Fortaleza",
    image: 'img/lagos.png'
  },
  {
    location: "Cordoba",
    image: 'img/lagos.png'
  },
  {
    location: "Trinidad and Tobago",
    image: 'img/lagos.png'
  },
  {
    location: "Las Vegas",
    image: 'img/lagos.png'
  }
]

let count = 0;
let lenght = messages.length;
let period = ["hours", "minutes", "seconds"];

function randomDate(startHour, endHour) {
  var hour = startHour + Math.random() * (endHour - startHour) | 0;
  return date;
}

setInterval(()=> {
  let i = messages[count];
  iziToast.show({
    title: `Someone from ${i.location}`,
    message: `Just joined the training.<br/><small style="margin-top: .5rem">${Math.floor(Math.random()*10)} minutes ago.</small>`,
    layout: 2,
    // imageWidth: '80',
    maxWidth: '300',
    image: i.image,
  });
  if (count+1 == lenght) return count = 0;
  count++
}, 3000);