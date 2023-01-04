import './styles/style.css'

console.log('this is working')

import gsap from 'gsap'

gsap.to('.heading-huge', { xPercent: 100, duration: 3, ease: 'power2.out' })
