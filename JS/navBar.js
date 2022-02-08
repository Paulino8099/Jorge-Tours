
/**
 * ?navBar active...
 */
navBarBtn();
function navBarBtn() {
    let navBar = document.documentElement.querySelector('.navBar'); //contendor de menú de navegación
    let btnNavBar = document.documentElement.querySelector('.btn-open-navBar'); //btn del menú de navegación
    let home = document.documentElement.querySelector('.home'); //contenedor de la sección de "home"
    let backdropBox = document.documentElement.querySelector('.backdrop-box'); //caja para dar opacidad al fondo

    /**
     * todo|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
     * todo|||||||||||||||||||||||||||||||||||||||||All|||||||||||||||||||||||||||||||||||||||||
     * todo|||||||||||||||||||||||||||||||||All|||||||||||||All|||||||||||||||||||||||||||||||||
     * todo|||||||||||||||||||||||||All||||||||||||||||||||||||||||||All||||||||||||||||||||||||
     * todo|||||||||||||||||||||||||||||||||All|||||||||||||All|||||||||||||||||||||||||||||||||
     * todo|||||||||||||||||||||||||||||||||||||||||All|||||||||||||||||||||||||||||||||||||||||
     * todo|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
     */
    backdropBox.addEventListener('click', function () {
        backdropBox.classList.toggle('active'); //caja para dar opacidad a fondo
    });
    /**
     * todo|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
     * todo|||||||||||||||||||||||||||||||||||||||||Desktop|||||||||||||||||||||||||||||||||||||
     * todo|||||||||||||||||||||||||||||||||Desktop|||||||||Desktop|||||||||||||||||||||||||||||
     * todo|||||||||||||||||||||||||Desktop||||||||||||||||||||||||||Desktop||||||||||||||||||||
     * todo|||||||||||||||||||||||||||||||||Desktop|||||||||Desktop|||||||||||||||||||||||||||||
     * todo|||||||||||||||||||||||||||||||||||||||||Desktop|||||||||||||||||||||||||||||||||||||
     * todo|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
     */
    if (document.documentElement.scrollWidth > 750) {
        navBar.classList.add('active-Desktop'); //contenedor del menú de navegación 
        home.classList.add('active-Desktop'); //contenedor de la sección de "home"

        // configurando el desplazamiento del menú de navegación
        btnNavBar.addEventListener('click', function () {
            btnNavBar.classList.toggle('active-Desktop'); //btn de la menú de navegación
            navBar.classList.toggle('active-Desktop'); //contenedor de menú de navegación
            home.classList.toggle('active-Desktop'); //contenedor de sección "home"
        });
        // off main and backdrop
        backdropBox.addEventListener('click', function () { 
            btnNavBar.classList.toggle('active-Desktop'); //btn de la menú de navegación
            navBar.classList.toggle('active-Desktop'); //contendor de menú de navegación
            home.classList.toggle('active-Desktop'); //contenedor de sección "home"
        });
    }
    /**
     * todo|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
     * todo|||||||||||||||||||||||||||||||||||||||||Mobile||||||||||||||||||||||||||||||||||||||
     * todo|||||||||||||||||||||||||||||||||Mobile||||||||||Mobile||||||||||||||||||||||||||||||
     * todo|||||||||||||||||||||||||Mobile|||||||||||||||||||||||||||Mobile|||||||||||||||||||||
     * todo|||||||||||||||||||||||||||||||||Mobile||||||||||Mobile||||||||||||||||||||||||||||||
     * todo|||||||||||||||||||||||||||||||||||||||||Mobile||||||||||||||||||||||||||||||||||||||
     * todo|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
     */

    // ocultando menú de navegación (click en btn "navBar")
    btnNavBar.addEventListener('click', function () {
        backdropBox.classList.toggle('active'); //caja para dar opacidad  a fondo
        btnNavBar.classList.toggle('active'); //btn del menú de navegación
        navBar.classList.toggle('active'); //contenedor del menú de navegación 
    });
    // ocultando menú de navegación y quitar opacidad de fondo (click contenedor backdrop)
    backdropBox.addEventListener('click', function () {
        btnNavBar.classList.toggle('active'); // btn para el menú de navegación
        navBar.classList.toggle('active'); //contenedor del menú de navegación
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