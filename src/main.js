import './styles/style.css'

console.log('this is working')

import gsap from 'gsap'

var mySplitText = new SplitText('.stagger-text')

gsap.registerPlugin(SplitText)
