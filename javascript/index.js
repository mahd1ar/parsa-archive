window.onload = () => {
    // paralex scroll plus
    const plus = document.getElementById('plus');
    x = plus.style.bottom.split('px');
    document.addEventListener('scroll', e => {
        let offset = window.pageYOffset / 3;
        offset += Number(x[0])
        plus.style.bottom = `${offset}px`;
    })

    //flags scrolling
    console.info("DOC loaded")
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


    function desideTns() {
        let ts = {
            container: '.hospital-slider',
            items: 4,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout: 4000,
            gutter: 50,
            speed: 1200,
            autoplayText: false,
            autoplayButtonOutput: false,
            mouseDrag: true,
            swipeAngle: false,
            controlsContainer: false
        }


        if (window.innerWidth < 768) {
            ts.items = 3;
            if (window.innerWidth < 576) {
                ts.items = 2;
            }
        }


        let hospitals = tns(ts);

        document.querySelectorAll('[aria-label').forEach(x => {
            x.style.display = "none"
        })
    }
    desideTns();

    setTimeout(() => {
        document.querySelector('#loader').style.clipPath = "circle(0% at 50% 50%)";
    }, 2000);


    //mm menu
    new Mmenu(document.querySelector('#menu'), {
        "extensions": [
            "pagedim-black"
        ]
    });




    try {
        new WOW().init();
    } catch (e) {
        console.log(`WOW is not working Err: ${e}`)
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
            if (window.innerWidth < 577) {
                let to = window.pageYOffset + 300;
                window.scrollTo(0, to);
            }
        }
    })
}