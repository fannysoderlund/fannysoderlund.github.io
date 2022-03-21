let funs;
let funFactText;

function funFact() {

  funs = [
    'Current favorite song is \'Seasons in the sun\' by Terry Jacks',
    'I made my own egg hatching machine for a project in school and so far it has produced 15 chickens',
    'I have both a diving certificate and a flying certificate (and then I got a driver\'s licence too)',
    'Before I started studying, I was in the restaurant business and had my own café and night club in Greece',
    'I like to paint, but I only paint birds'
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
