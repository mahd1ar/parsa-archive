window.onload = () => {
    // paralex scroll plus
    const plus = document.getElementById('plus');
    x = plus.style.bottom.split('px');
    document.addEventListener('scroll', e => {
        let offset = window.pageYOffset / 3;
        if (offset % 2) {

            offset += Number(x[0])
            plus.style.bottom = `${offset}px`;
        }
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
        // controlsContainer: false,
        controls: false,
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
            // controlsContainer: false
            controls: false,
        }


        if (window.innerWidth < 768) {
            ts.items = 3;
            if (window.innerWidth < 576) {
                ts.items = 2;
            }
        }


        let hospitals = tns(ts);

    }
    try {

        desideTns();
    } catch (error) {
        alert(error);
    }

    setTimeout(() => {
        try {
            if (CSS.supports("clip-path", "circle(0% at 50% 50%)")) {
                document.querySelector('#loader').style['clip-path'] = "circle(0% at 50% 50%)";
            } else {
                document.querySelector('#loader').style['opacity'] = "0";
            }
        } catch (error) {
            console.log(error)
            document.querySelector('#loader').style['opacity'] = "0";
        } finally {
            setTimeout(() => {

                document.querySelector('#loader').style.display = 'none';
            }, 2000);
        }

    }, 200);

    try {
        //mm menu
        const menu = new Mmenu(document.querySelector('#menu'), {
            "extensions": [
                "pagedim-black"
            ]
        });


        const api = menu.API;
        api.closeAllPanels;


    } catch (error) {
        console.log('error :', error);
    }




    try {
        new WOW().init();
    } catch (e) {
        console.log(`WOW is not working Err: ${e}`)
    }



    //an other parallex
    SmoothParallax.init();

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

    // fuckin map box
    // mapboxgl.accessToken = 'pk.eyJ1IjoibWFoZGl5YXIiLCJhIjoiY2pweWk2ZnlqMDFoaTQ5bnhqZ3E3ejYxaiJ9.rFfS4mSOcPBkUa7od8-Vbg';
    try {


        var mymap = L.map('mapid').setView([35.806696, 51.464741], 14);

        let ac = "pk.eyJ1IjoibWFoZGl5YXIiLCJhIjoiY2pweWk2ZnlqMDFoaTQ5bnhqZ3E3ejYxaiJ9.rFfS4mSOcPBkUa7od8-Vbg";
        let apikey = " https://api.mapbox.com/styles/v1/mahdiyar/cjxh729ic372f1cpuwr8stjod/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFoZGl5YXIiLCJhIjoiY2pweWk2ZnlqMDFoaTQ5bnhqZ3E3ejYxaiJ9.rFfS4mSOcPBkUa7od8-Vbg";


        L.tileLayer(apikey, {
            maxZoom: 18,
            // attribution: 'mahdiyar',
        }).addTo(mymap);

        var greenIcon = L.icon({
            iconUrl: 'png/pin.png',

            iconSize: [56, 56], // size of the icon
            // shadowSize: [50, 64], // size of the shadow
            iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
        L.marker([35.806696, 51.464741], { icon: greenIcon }).addTo(mymap);
    } catch (e) {
        console.log('e', e)
    }
}