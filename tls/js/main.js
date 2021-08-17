var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })
var mySwiper1 = new Swiper('.swiper-container-1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-1',
      prevEl: '.swiper-button-prev-1',
    }
  })

const categoryes = document.querySelectorAll('.info__link');
const clients = document.querySelector('#clients'),
      doctors = document.querySelector('#doctors'),
      clinic = document.querySelector('#clinic'),
      clientsGrid = document.querySelector('.info__grid')

categoryes.forEach((cat) => {
  cat.addEventListener('click', (e) => {
    e.preventDefault()
  })
})

doctors.addEventListener('click', () => {
  $('.grid__img').fadeOut(200);
  
  setTimeout(() => $('.info__doctors').fadeIn(200).css('display','flex'), 200)
})
clients.addEventListener('click', () => {
  setTimeout(() => $('.grid__img').fadeIn(200), 200);
  $('.info__doctors').fadeOut(200);
})

// clients.addEventListener('click', () => {
//   if (clientsGrid.classList.contains('hide')) {
//     clientsGrid.classList.remove('hide');
//     clientsGrid.classList.add('show');
//   } else {
//     clientsGrid.classList.add('hide');
//     clientsGrid.classList.remove('show');
//   }
// })