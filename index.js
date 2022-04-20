'use strict'

const menuPhoto = document.querySelector('.menu-photo');
const navlinks = document.getElementById('menu-bar');
const modalBtns = document.querySelectorAll('.modal-btn');
const modalBg = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.modal-close');
const modal = document.getElementById("sendBtn");
const btnScroll = document.querySelector('.scroll-1');
const section1 = document.querySelector('#section-1');
const btnScroll2 = document.querySelector('.scroll-2');
const section2 = document.querySelector('#section-2');
const scrollTop = document.querySelector('.scrollTop');
const expBtn1 = document.querySelector('.exp-btn');
const expBtn2 = document.querySelector('.exp-btn2');
const expBtn3 = document.querySelector('.exp-btn3');
const expContent = document.querySelector('.exp-content');
const expContent2 = document.querySelector('.exp-content2');
const expContent3 = document.querySelector('.exp-content3');

// Menu button phone mode

menuPhoto.addEventListener('click', function() {
    navlinks.classList.toggle('active');
});


//Scrolling Smooth

btnScroll.addEventListener('click', function(e) {
    e.preventDefault();
    const s1coords = section1.getBoundingClientRect();
    section1.scrollIntoView({ behavior: 'smooth' });
});

btnScroll2.addEventListener('click', function(e) {
    e.preventDefault();
    const s1coords = section2.getBoundingClientRect();
    section2.scrollIntoView({ behavior: 'smooth' });
});



// SCroll to the top

scrollTop.addEventListener('click', function() {
    window.scrollTo(0, 0);
});

// Contact me Modal form

const openModal = function(e) {
    e.preventDefault();
    modalBg.classList.add('active');
}
modalBtns.forEach(btn => btn.addEventListener('click', openModal));

modalClose.addEventListener('click', function() {
    modalBg.classList.remove('active');
});

// Contact Me Message Sendig

modal.addEventListener('click', function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "eraldokanani2@gmail.com",
        Password: "izupfqpsagqxjorm",
        To: 'eraldokanani04@yahoo.com',
        From: document.getElementById("email").value,
        Subject: "New Email from a visitor",
        Body: "Name: " + document.getElementById("name").value +
            "<br> Email: " + document.getElementById("email").value +
            "<br> Phone Number: " + document.getElementById("number").value + "<br> message: " + document.getElementById("message").value
    }).then(
        message => alert("You Have send the Message")
    );
});


/*  Showing Experiences */

expBtn1.addEventListener('click', function() {
    expContent.classList.remove('hidden');
    expContent2.classList.add('hidden');
    expContent3.classList.add('hidden');
});

expBtn2.addEventListener('click', function() {
    expContent2.classList.remove('hidden');
    expContent.classList.add('hidden');
    expContent3.classList.add('hidden');
});

expBtn3.addEventListener('click', function() {
    expContent3.classList.remove('hidden');
    expContent.classList.add('hidden');
    expContent2.classList.add('hidden');
});