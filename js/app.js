$("a").creep({
  offset: 0,
  speed: 1000
});

// Back to top button
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    $('.top').fadeIn();
  } else {
    $('.top').fadeOut();
  }
});

$(".toggle").click(function(){
  $(".extra-content").fadeToggle(1000);
});

// Select the button
const btn = document.querySelector('.btn-toggle');

// Listen for a click on the button
btn.addEventListener('click', function() {
  const icon = this.querySelector('i');

  if (icon.classList.contains('fa-moon')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }  
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle('dark-theme');
})