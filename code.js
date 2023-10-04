// gsap.to(".container img", { 
    
//     duration: 2,
//     stagger:{
//         each:0.2,
//         from:"end"

//     }

// });
  

gsap.fromTo(".container img", {opacity: 0,  }, {opacity: 100, duration: 3,repeat:-1,stagger:{
    each:0.3,
    from:"start",
    

}},);


var container = document.getElementById("containerPartical")
const count = 100

var partical = "partical",
    w = container.offsetWidth,
    h = container.offsetHeight,
    elem,
    particalColor= ["#33FFF0","#337AFF","#CDF7FD"];


for(var i=0;i<count;i++){
    elem = document.createElement('div')
    elem.className=partical
    container.appendChild(elem)

    gsap.set(elem, {
        x:gsap.utils.random(0,w),
        y:gsap.utils.random(0,h)-(h*0.9),
        scale:gsap.utils.random(0.5,1),
        backgroundColor:gsap.utils.random(particalColor),

    })
    animateA(elem);


}

function animateA(elem){

    gsap.to(elem,gsap.utils.random(5,10),{
        y:container.offsetHeight,
        ease:'none',
        repeat:-1,
        delay:-10,
     
    })

    // gsap.to(elem,gsap.utils.random(1,6),{
    //     x:"+=50",
    //     ease:'power1.inOut',
    //     repeat:-1,
    //     yoyo:true,
     
    // })

}



// gsap.fromTo(".container img", {scale:0.6}, {scale:1, duration: 4,repeat:-1,},);