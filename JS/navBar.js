
/**
 * ?navBar active...
 */
navBarBtn();
function navBarBtn() {
    let navBar = document.documentElement.querySelector('.navBar'); //contendor de menú de navegación
    let btnNavBar = document.documentElement.querySelector('.btn-open-navBar'); //btn del menú de navegación
    let home = document.documentElement.querySelector('.home'); //contenedor de la sección de "home"
    let backdropBox = document.documentElement.querySelector('.backdrop-box'); //caja para dar opacidad al fondo
    let linesNavBarBtn = document.documentElement.querySelector('.lines-btn-navBar'); //lineas del btn del navBar

    /**
     * todo|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
     * todo|||||||||||||||||||||||||||||||||||||||||Desktop|||||||||||||||||||||||||||||||||||||
     * todo|||||||||||||||||||||||||||||||||Desktop|||||||||Desktop|||||||||||||||||||||||||||||
     * todo|||||||||||||||||||||||||Desktop||||||||||||||||||||||||||Desktop||||||||||||||||||||
     * todo|||||||||||||||||||||||||||||||||Desktop|||||||||Desktop|||||||||||||||||||||||||||||
     * todo|||||||||||||||||||||||||||||||||||||||||Desktop|||||||||||||||||||||||||||||||||||||
     * todo|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
     */
    /**
     * ?onOff navBar
     */
    openNavBar();
    function openNavBar() {
        /**
         * ?btn navBar
         */
        btnNavBar.addEventListener('click', function () {
            navBar.classList.toggle('active');
            btnNavBar.classList.toggle('active');
            backdropBox.classList.toggle('active');
            linesNavBarBtn.classList.toggle('active');
        });
        /**
         * ?box backdrop
         */
        backdropBox.addEventListener('click', function () {
            navBar.classList.toggle('active');
            backdropBox.classList.toggle('active');
            btnNavBar.classList.toggle('active');
            linesNavBarBtn.classList.toggle('active');
        });

    };
    /**
     * todo|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
     * todo|||||||||||||||||||||||||||||||||||||||||Mobile||||||||||||||||||||||||||||||||||||||
     * todo|||||||||||||||||||||||||||||||||Mobile||||||||||Mobile||||||||||||||||||||||||||||||
     * todo|||||||||||||||||||||||||Mobile|||||||||||||||||||||||||||Mobile|||||||||||||||||||||
     * todo|||||||||||||||||||||||||||||||||Mobile||||||||||Mobile||||||||||||||||||||||||||||||
     * todo|||||||||||||||||||||||||||||||||||||||||Mobile||||||||||||||||||||||||||||||||||||||
     * todo|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
     */
};

/**
 * ?observando secciones...
 */
observadorSection();
function observadorSection() {
    let sections = document.documentElement.querySelectorAll('.sections');

    function obser(entry, salida) {
        // var btns
        let btnHome = document.documentElement.querySelector('.btn-home-navBar');
        let btnExcursions = document.documentElement.querySelector('.btn-excursions-navBar');
        let btnExperiences = document.documentElement.querySelector('.btn-experiences-navBar');
        let btnAbout = document.documentElement.querySelector('.btn-about-navBar');
        let btnContact = document.documentElement.querySelector('.btn-contact-navBar');

        entry.forEach(function (entry) {
            if (entry.isIntersecting) {
                console.log(entry.target.classList.value)
                /**
                 * ?home...
                 */
                //si detecta que la section captada tiene algunas de las siguientes clases hará lo indicado a continuación
                if (entry.target.classList == 'home sections') {
                    btnHome.classList.add('active');
                    btnExcursions.classList.remove('active');
                }
                else if (entry.target.classList == 'excursions sections') {
                    btnHome.classList.remove('active');
                    btnExcursions.classList.add('active');
                } 
            };
        })
    };

    const observador = new IntersectionObserver(obser, {
        root: null,
        rootMargin: "-50%",
    });

    sections.forEach(e => {
        observador.observe(e);
    });
};