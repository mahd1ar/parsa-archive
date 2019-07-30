// paralex scroll plus
const plus = document.getElementById('plus');
x = plus.style.bottom.split('px');
document.addEventListener('scroll', e => {
    let offset = window.pageYOffset / 3;
    offset += Number(x[0])
    plus.style.bottom = `${offset}px`;
})

//flags scrolling
window.onload = () => {
    let slider = tns({
        container: '.flags-slider',
        items: 4,
        slideBy: 'page',
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3500,
        speed: 700,
        autoplayText: false,
        autoplayButtonOutput: false,
        // autoplayButton: false,
        mouseDrag: true,
        swipeAngle: false,
        controlsContainer: false
    });

    let hospitals = tns({
        container: '.hospital-slider',
        items: 4,
        slideBy: 'page',
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 4000,
        gutter:50,
        speed: 1200,
        autoplayText: false,
        autoplayButtonOutput: false,
        // autoplayButton: false,
        mouseDrag: true,
        swipeAngle: false,
        controlsContainer: false
    });

    document.querySelectorAll('[aria-label').forEach(x=>{
        x.style.display = "none"
    })

    // vivus
   
}


//an other parallex
SmoothParallax.init();
// document.designMode = "on"

//----- particles --------
try {
    particlesJS.load('particles-js', 'lib/particlesjs.json', function () {
        console.log('callback - particles.js config loaded');
    });
} catch (e) {
    console.log(e)
}

//wow
try {

    new WOW().init();
} catch (e) {
    console.log(`WOW is not working Err: ${e}`)
}

//humberger menu
const xbtn = document.querySelector('#x');
xbtn.addEventListener('click', (e) => {
    console.log('e', e);
    document.querySelector('nav').classList.toggle('swupDown')
})


// step by step

document.querySelector('#steps-title').addEventListener('click', e => {
    c = e.target.parentElement.classList.value
    regex = /step-\d/g;
    if (regex.test(c)) {
        d = document.querySelectorAll(`.${c}`);
        target = d[1].classList[1];
        if (target == 'hide') {
            f = document.querySelectorAll('#steps-desc>li')
            f.forEach(elem => {
                elem.classList.remove('show')
                elem.classList.add('hide')
            });
            d[1].classList.remove('hide')
            d[1].classList.add('show')
        }
        console.log(e.path[2].children)
        Array.from(e.path[2].children).forEach(i => {

            if (e.target.parentElement == i) {
                console.log('i :', i);
                i.classList.add('selected')
            } else if (i.classList.contains('selected')) {
                i.classList.remove('selected')
            }

        })


    }
})