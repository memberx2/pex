$(document).ready(function () {
  window.sr = ScrollReveal().reveal('.scroll')
  var $menu = $('.header-nav-list')
  $('.hamburger-menu-spans').click(function (e) {
    e.preventDefault()
    $menu.slideToggle(function () {
      $('.span1').toggleClass('s1-open')
      $('.span2').toggleClass('s2-open')
      $('.span3').toggleClass('s3-open')
    })
  })
})
