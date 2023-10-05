gsap.to('h1', {
    duration: 4,
    y: 60,


    delay: 3,
    color: 'black',
    ease: 'bounce.out',
    opacity: "100",


});

gsap.to('h2', {
    duration: 4,
    y: 80,


    delay: 3,
    color: 'black',
    ease: 'bounce.out',
    opacity: "100",

    //estos valores se modifican desde el ease greensock visualizer

});

gsap.from('.row', {
    duration: 3,
    x: 0,
    y: 800,
    delay: 2,
    ease: 'circ.out',

});

gsap.from('.mi-foto', {
    duration: 3,
    x: -50,
    y: 200,
    delay: 2,
    opacity: '100',
    ease: 'circ.in',
});