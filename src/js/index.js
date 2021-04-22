import '@/styles/styles.scss'
import '@models/select'
import '@models/menuOpen'
import Swiper from 'swiper/swiper-bundle.min.js';
import 'swiper/swiper-bundle.min.css';

let body = document.querySelector('body')
let headerEmail = document.querySelector('.top-header__link--email')
let headerPhone = document.querySelector('.drop-top-header').closest('li')
let headerDrop = document.querySelector('.drop-top-header')
let headerDropClose = document.querySelector('.drop-top-header__close')
let headerEmailCopy = document.querySelector('.top-header__link--email div')
let headerSearchInput = document.querySelector('.search__field input')
let headerSearchResults = document.querySelector('.search__results')
let bottomHeaderItems = document.querySelectorAll('.bottom-header__item')
let bottomHeaderDrops = document.querySelectorAll('.drop-bottom-header')
let burger = document.querySelector('.burger')
let headerTop = document.querySelector('.top-header')

burger.addEventListener('click', () => {
    if (headerTop.classList.contains('show')) {
        headerTop.classList.remove('show')
        burger.classList.remove('active')
    } else {
        headerTop.classList.add('show')
        burger.classList.add('active')
    }
})

headerEmail.addEventListener('click', () => {
    if (headerEmailCopy.classList.contains('show')) {
        headerEmailCopy.classList.remove('show')
        headerEmail.closest('li').classList.remove('active')
    } else {
        headerEmailCopy.classList.add('show')
        headerEmail.closest('li').classList.add('active')
    }
})

headerPhone.addEventListener('mouseenter', function () {
    body.classList.add('lock')
    headerDrop.classList.add('show')
});

headerPhone.addEventListener('mouseleave', function () {
    body.classList.remove('lock')
    headerDrop.classList.remove('show')
});

headerDropClose.addEventListener('click', () => {
    body.classList.remove('lock')
    headerDrop.classList.remove('show')
})

headerSearchInput.addEventListener('input', () => {
    headerSearchResults.classList.add('show')
})

headerSearchInput.addEventListener('blur', () => {
    headerSearchResults.classList.remove('show')
})

headerSearchInput.addEventListener('focus', () => {
    if (headerSearchInput.value.length !== 0) {
        headerSearchResults.classList.add('show')
    }
})

bottomHeaderItems.forEach(function (e) {
    e.addEventListener("click", function (el) {
        let eDrop = e.querySelector('.drop-bottom-header')
        let flag = false
        bottomHeaderDrops.forEach(function (e) {
            if (e.classList.contains('show')) {
                flag = true
            }
        })
        if (flag && !eDrop.classList.contains('show')) {
            bottomHeaderDrops.forEach(function (e) {
                e.classList.remove('show')
                eDrop.classList.add('show')
            })
        } else if (eDrop.classList.contains('show') && (el.target.classList.contains('bottom-header__image') || el.target.classList.contains('bottom-header__name') || el.target.closest('.bottom-header__image'))) {
            eDrop.classList.remove('show')
            body.classList.remove('bottom-lock')
        } else {
            eDrop.classList.add('show')
            body.classList.add('bottom-lock')
        }
    })
})

new Swiper('.main-slider', {
    loop: true,
    effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
});