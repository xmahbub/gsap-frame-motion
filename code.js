// gsap.to(".container img", { 
    
//     duration: 2,
//     stagger:{
//         each:0.2,
//         from:"end"

//     }

// });
const tl = gsap.timeline()

  

tl.fromTo(".container img", {opacity: 0,  }, {opacity: 100, duration: 4,repeat:-1,stagger:{
    each:0.3,
    from:"start",
    

}},)




var container = document.getElementById("containerPartical")
const count = 100

var partical = "partical",
    w = container.offsetWidth,
    h = container.offsetHeight,
    n = container.offsetHeight - 600,
    elem,
    particalColor= ["#33FFF0","#337AFF","#CDF7FD"];


for(var i=0;i<count;i++){
    elem = document.createElement('div')
    elem.className=partical
    container.appendChild(elem)

    tl.set(elem, {
        
        x:gsap.utils.random(0,w),
        y:gsap.utils.random(0,h)-(h*4),
        scale:gsap.utils.random(0.5,1),
        backgroundColor:gsap.utils.random(particalColor),

    })
    animateA(elem);


}

function animateA(elem){

    tl.to(elem,gsap.utils.random(5,10),{
        y: 10,
        ease:'none',
        repeat:-1,
        delay:-10,
     
    },)

    gsap.to(elem,gsap.utils.random(1,6),{
        x:"+=50",
        ease:'power1.inOut',
        repeat:-1,
        yoyo:true,
     
    })

}



// gsap.fromTo(".container img", {scale:0.6}, {scale:1, duration: 4,repeat:-1,},);