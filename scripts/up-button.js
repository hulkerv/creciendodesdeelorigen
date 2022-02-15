window.onscroll = () => {
  if (document.documentElement.scrollTop > 500) {
    document.querySelector('.button-up-container').classList.add('show');
  } else {
    document.querySelector(".button-up-container").classList.remove("show");
    }
}

document.querySelector('.button-up-container').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior:'smooth'
  })
})