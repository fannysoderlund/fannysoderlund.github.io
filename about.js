const funFactText = document.getElementById('fun-fact-text')
const birds = document.getElementById('birds')
funFactText.innerHTML = 'Press for a random fun fact about me'
const funs = [
  'Current favorite song is \'Seasons in the sun\' by Terry Jacks',
  'I made my own egg hatching machine for a project in school and so far it has produced 15 chickens',
  'I have both a diving certificate and a flying certificate (and then I got a driver\'s licence too)',
  'Before I started studying, I was in the restaurant business and had my own coffee house and night club in Greece',
  'I like to paint, but I only paint birds'
]

// eslint-disable-next-line no-unused-vars
function newFun () {
  const i = (Math.random() * funs.length) | 0
  funFactText.innerHTML = funs[i]

  if (i === 4) {
    birds.style.opacity = 1
  } else {
    birds.style.opacity = 0
  }
}
