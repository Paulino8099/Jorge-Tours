
/**
 * ?navBar active...
 */
navBarBtn();
function navBarBtn() {
    let navBar = document.documentElement.querySelector('.navBar');
    let btnNavBar = document.documentElement.querySelector('.btn-open-navBar');
    let home = document.documentElement.querySelector('.home');

    /**
     * ?desktop
     */
    if (document.documentElement.scrollWidth > 750) {
        navBar.classList.add('active-Desktop');
        home.classList.add('active-Desktop');
        
        btnNavBar.addEventListener('click', function () {
            btnNavBar.classList.toggle('active-Desktop');
            navBar.classList.toggle('active-Desktop');
            home.classList.toggle('active-Desktop');
        });
    }
    /**
     * ?mobile
     */
    btnNavBar.addEventListener('click', function () {
        btnNavBar.classList.toggle('active');
        navBar.classList.toggle('active');
    });

    /**
     * ?backdrop box...
     */
    // dando opacidad al toda la pantalla para que el menú quede resaltado
    let backdropBox = document.documentElement.querySelector('.backdrop-box');

    // on Off opacity back
    btnNavBar.addEventListener('click',function () {
        backdropBox.classList.toggle('active');
    });
    // off main and backdrop
    backdropBox.addEventListener('click', function () {
        backdropBox.classList.toggle('active');
        btnNavBar.classList.toggle('active-Desktop');
        navBar.classList.toggle('active-Desktop');
        home.classList.toggle('active-Desktop');
    });
};

/**
 * ?observando secciones...
 */
observadorSection();
function observadorSection() {
    let sections = document.documentElement.querySelectorAll('.section');

    const visor = (entry, salida) => {
        // var btns
        let btnHome = document.documentElement.querySelector('.btn-home-navBar');
        let btnAbout = document.documentElement.querySelector('.btn-about-navBar');
        let btnExperiences = document.documentElement.querySelector('.btn-experiences-navBar');
        let btnContact = document.documentElement.querySelector('.btn-contact-navBar');

        entry.forEach(function (entry) {
            if (entry.isIntersecting) {
                /**
                 * ?home...
                 */
                //si detecta que la section captada tiene algunas de las siguientes clases hará lo indicado a continuación
                if (entry.target.classList == 'home section' | entry.target.classList == 'home section active-Desktop') {
                    btnHome.classList.add('active');
                }
            };
        });
    };

    const observador = new IntersectionObserver(visor, {
        root: null,
        rootMargin: "-50%"
    });

    sections.forEach(e => {
        observador.observe(e);
    });
};