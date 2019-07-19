iziToast.settings({
  theme: 'light',
  timeout: 3000,
  // resetOnHover: true,
  icon: 'material-icons',
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
  position: "bottomLeft",
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
  }
]

let count = 0;
let lenght = messages.length;

setInterval(()=> {
  let i = messages[count];
  iziToast.show({
    title: `Someone from ${i.location}`,
    message: 'Just joined the training!',
    layout: 2,
    // imageWidth: '200',
    maxWidth: '300',
    image: i.image,
  });
  if (count+1 == lenght) return count = 0;
  count++
}, 3000);