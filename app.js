function scroll (target, duration) {
  target = document.querySelector(target)
  const targetPosition = target.getBoundingClientRect().top
  const startPosition = window.pageYOffset
  const distance = targetPosition - startPosition
  let startTime = null

  function animation (currentTime) {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const run = ease(timeElapsed, startPosition, distance, duration)
    window.scrollTo(0, run)
    if (timeElapsed < duration) requestAnimationFrame(animation)
  }

  function ease (t, b, c, d) {
    t /= d / 2
    if (t < 1) return c / 2 * t * t + b
    t--
    return -c / 2 * (t * (t - 2) - 1) + b
  }

  requestAnimationFrame(animation)
}

const goAbout = document.querySelector('.go-about')
const goPortfolio = document.querySelector('.go-portfolio')
const goContact = document.querySelector('.go-contact')

goAbout.addEventListener('click', function () {
  scroll('.about', 1000)
})

goPortfolio.addEventListener('click', function () {
  scroll('.portfolio', 1000)
})

goContact.addEventListener('click', function () {
  scroll('.contacts', 1000)
})

const type = document.querySelectorAll('#type path')

for (let i = 0; i < type.length; i++) {
  console.log(`Letter ${i} is ${type[i].getTotalLength()}`)
}

if (window.innerWidth < 650) {
  alert("Flip me");
}
