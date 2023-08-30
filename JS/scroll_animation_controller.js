/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    Delay: 400,
    // reset: true, // animation repeat
})

sr.reveal(`.home__img, .newsletter__content, .footer__logo, .footer__description, .footer__content, .footer__info`)
sr.reveal(`.home__data`, { origin: 'bottom' })
sr.reveal(`.about__data, .recently__data`, { origin: 'left' })
sr.reveal(`.about__img, .recently__img`, { origin: 'right' })
sr.reveal(`.news-container`, { origin: 'left' })
sr.reveal(`.news-container-2`, { origin: 'left' })
sr.reveal(`.news-container-3`, { origin: 'left' })
sr.reveal(`.time`, { origin: 'left' })
sr.reveal(`.date`, { origin: 'right' })
sr.reveal(`.table__text, .table__body`, { origin: 'right' })