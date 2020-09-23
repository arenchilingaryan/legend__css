const arrowToTop = document.querySelector('.footer__scroll')
const openOurTeamBtn = document.querySelector('.team__button-mobile')
const ouwTeam = document.querySelector('.team__items')

function moveToTop() {
    window.scrollBy(0,-70)
    if (window.pageYOffset > 0) {requestAnimationFrame(moveToTop)}
}
arrowToTop.addEventListener('click', function() {
    moveToTop()
}, false)

openOurTeamBtn.addEventListener('click', () => {
    ouwTeam.classList.toggle('team-open')
})