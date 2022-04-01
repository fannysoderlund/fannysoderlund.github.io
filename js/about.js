let funs;
let funFactText;

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
    'Recommended podcast: \'Mytologier\' by Munck for Spotify'
  ];

  funFactText = document.querySelector('#fun-fact-text')

  funFactText.innerHTML = 'Press for a random fun fact about me'
  const funFact = document.querySelector('.about-fun-fact');

  funFact.addEventListener('click', newFun);

}

function newFun() {
  const birds = document.getElementById('birds')
  let i = (Math.random() * funs.length) | 0
  if (funFactText.innerHTML === funs[i]) {
    i = (i + 1) % funs.length;
  }
  funFactText.innerHTML = funs[i]

  console.log(funs[i])

  if (i === 4) {
    birds.style.opacity = 1
  } else {
    birds.style.opacity = 0
  }
}
