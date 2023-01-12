var ls = gsap.timeline();


ls.from('.loader img',{
    scale:0,
    duration:1,
    opacity:0
})
.to('.loader',{
    top:-1000,
    duration:2,
    opacity:10
})
.from("#nav" ,{
    top: -10 ,
    opacity: 0,
    duration: 0.5
} , '-=.5')
.from("#leftc>h2 " ,{
    x : -50 ,
    opacity: 0,
    duration: .5
} ,'-=.2')
.from("#leftc>h1 " ,{
    x : -50 ,
    opacity: 0,
    duration: .5
} ,'-=.2')
.from("#leftc #stars " ,{
    x : -50 ,
    opacity: 0,
    duration: .5
} ,'-=.2')

.from("#leftc p " ,{
    x : -50 ,
    opacity: 0,
    duration: .5
} ,'-=.2')

.from("#leftc button " ,{
    scale: 0,
    opacity: 0,
    duration: .5
} ,'-=.2')

.from("#main>img " ,{
    x : 150 ,
    rotate: 160,
    opacity: 0,
    duration: 1
} ,'-=.2')

.from("#navl " ,{
    x : -50 ,
    opacity: 0,
    duration: .5
} ,'-=.2')

.from("#rightwala " ,{
    x : 50 ,
    opacity: 0,
    duration: .5
} ,'-=.4')










