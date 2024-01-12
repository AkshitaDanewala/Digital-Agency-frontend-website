var tl = gsap.timeline()


tl.from("nav",{
    opacity: 0,
    delay: 0.8,
duraton:1,
y:-20
})


tl.from(".pg1-content",{
    opacity: 0,
    duraton: 0.8,
    delay:0.3,
x: -50

})

gsap.from(".pg2-right-img",{
    opacity: 0,
    duraton: 0.8,
    delay:1,
    scale: 0.8,
    scrollTrigger:{
trigger: ".pg2-right-img",
scroller: "body",
    }


})


gsap.from(".box",{
    opacity: 0,
    duraton: 0.4,
    delay:0.8,
    scale: 0.8,
stagger: 0.4,
    scrollTrigger:{
trigger: ".box",
scroller: "body",
    }


})