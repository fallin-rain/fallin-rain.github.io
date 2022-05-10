import './tailwind.css'

import 'flowbite'

import Splide from '@splidejs/splide'

import '@splidejs/splide/css'

import {
  el,
  elall,
  log
} from './util.js'

const nav = el('nav[data-navbar]')

onscroll = () => {
  // add background on scroll
  scrollY > 10 ?
    nav.classList.add('bg-background') :
    nav.classList.remove('bg-background')
}

onload = () => {
  new Splide( '.splide', {
    perPage: 2,
    type: 'loop',
    focus: 'center',
    lazyLoad: 'nearby',
    height: '30rem',
    gap: '3rem',
    breakpoints: {
      1180: {
        perPage: 1
      },
      640: {
        perPage: 1,
        gap: '2rem',
        height: '16rem'
      }
    },
  } ).mount();
}

// Hide "artist" section and link
// remove the line when completed
elall('[data-wip]').forEach(el => el.classList.add('hidden'))
