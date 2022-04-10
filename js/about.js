let funs;
let funFactText;
let index = 0;

function funFact() {

  funs = [
    'My favourite artist is Ted Gärdestad',
    'I made an egg hatching machine for a project in school and so far it has produced 21 chickens',
    'I got a diving certificate and a flying certificate before I got my driver\'s licence',
    'Before I started studying, I was in the restaurant business and co-owned a café and bar in Greece',
    'I like to paint, but only birds',
    'I enjoy folklore, old tales and other mythologies, especially Nordic and Greek',
    'Opinion: Cuphead\'s design is the definition of fine arts',
    'Most recently read book is \'Kirke\' by Madeline Miller',
    'Recommended podcast: \'Mytologier\' by Munck for Spotify',
    'Opinion: Minimalism is for lazy people'
  ];

  funFactText = document.querySelector('#fun-fact-text')

  funFactText.innerHTML = 'Press for a fun fact about me'
  const funFact = document.querySelector('.about-fun-fact');

  funFact.addEventListener('click', newFun);

}

function newFun() {
  const birds = document.getElementById('birds')
  funFactText.innerHTML = funs[index]

  if (index === 4) {
    birds.style.opacity = 1
  } else {
    birds.style.opacity = 0
  }

  index++;

  if (index === funs.length) {
    index = 0;
  }
}
