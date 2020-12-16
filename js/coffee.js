// JS
"use strict";
console.log("Hello World!");

// preloader
jQuery(document).ready(function ($) {
  $(window).load(function () {
      setTimeout(function(){
          $('#preloader').fadeOut('slow', function () {
          });
      },2000); // set the time here
  });  
});

// Make navbar Transparent when on top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  // console.log(window.scrollY);
  // console.log('navbarHeight: ${navbarHeight}');
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  // console.log('event.target.dataset.link');
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }

  //console.log(event.target.dataset.link);
  navbarMenu.classList.remove("open");
  scrollIntoView(link);
});

// Navbar toggle for small screen
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

// handle click on "contact me" butrton on home
const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// show arrow up button when scrolled down
const arrowUp = document.querySelector(".arrow__up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

// handle click on the "arrow up" button
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

var canvasLoader = function(){
        
  var self = this;
  window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)}}();
  
  self.init = function(){ 
    self.canvas = document.getElementById('canvas');        
    self.ctx = self.canvas.getContext('2d');
    self.ctx.lineWidth = .5;
    self.ctx.strokeStyle = 'rgba(0,0,0,.75)';
    self.count = 75;
    self.rotation = 270*(Math.PI/180);    
    self.speed = 6;
    self.canvasLoop();
  };  
  
  self.updateLoader = function(){
    self.rotation += self.speed/100;                  
  };
  
  self.renderLoader = function(){             
    self.ctx.save();
    self.ctx.globalCompositeOperation = 'source-over';
    self.ctx.translate(125, 125);
    self.ctx.rotate(self.rotation); 
    var i = self.count;
    while(i--){               
      self.ctx.beginPath();
      self.ctx.arc(0, 0, i+(Math.random()*35), Math.random(), Math.PI/3+(Math.random()/12), false);               
      self.ctx.stroke();
    } 
    self.ctx.restore();                     
  };          
  
  self.canvasLoop = function(){
    requestAnimFrame(self.canvasLoop, self.canvas);     
    self.ctx.globalCompositeOperation = 'destination-out';
    self.ctx.fillStyle = 'rgba(0,0,0,.03)';
    self.ctx.fillRect(0,0,250,250);
    self.updateLoader();
    self.renderLoader();
  };
  
};

var loader = new canvasLoader();
loader.init();


