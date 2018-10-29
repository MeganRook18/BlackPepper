var instance = new TypeIt('#index-type1', {
    speed: 80,
    cursor: false,
    autoStart: false
    })
    .type('Hello')
    .pause(800)
    .delete()
    .pause(7000)
    .type('WELCOME');
new TypeIt('#index-type2', {
    speed: 90,
    autoStart: true,
    startDelay: 2000
    })
    .type('I\'m Megan')
    .pause(2500)
    .delete()
    .destroy();
new TypeIt('#index-type3', {
    speed: 80,
    autoStart: true,
    startDelay: 2100
    })
    .type('Interactive Front-end Developer.')
    .pause(1600)
    .delete()
    .destroy();
new TypeIt('#about-type', {
    speed: 200,
    autoStart: false
    })
    .type('ABOUT');
new TypeIt('#work-type1', {
    speed: 90,
    cursor: false,
    autoStart: false
    })
    .type('KITCH LTD');
new TypeIt('#work-type2', {
    speed: 80,
    autoStart: false
    })
    .type('My work');

new TypeIt('#contact-type', {
    speed: 200,
    autoStart: false
    })
    .type('CONTACT');
