const tl = gsap.timeline()

const rand1 = gsap.utils.random(0, 100, 5);
const rand2 = gsap.utils.random(-20, 20)

console.log(rand1)
console.log(rand2)

tl.to(".flex svg",{scale:2,duration:2,ease:"linear",})
.fromTo(".flex svg",{rotation:0,duration:2,y:"-10vh",ease:"circ",},{rotation:360,duration:2,y:`${rand1}vh`, x: `${rand2}`,ease:"circ",stagger:{
    each:0.3,
    from:"end",  
}},"<")
.fromTo(".flex svg",{opacity:100},{duration:2,opacity:0,stagger:0.1,},"<")

tl.repeat(-1)
