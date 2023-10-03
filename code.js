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

// gsap.fromTo(".container img", {scale:0.6}, {scale:1, duration: 4,repeat:-1,},);