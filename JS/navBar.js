
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
    let body = document.documentElement.querySelector('body'); //contenedor de la sección de home

    /**
     * ?onOff navBar
     */
    onOffNavBar();
    function onOffNavBar() {
        /**
         * ?btn navBar
         */
        btnNavBar.addEventListener('click', function () {
            body.classList.toggle('active');
            navBar.classList.toggle('active');
            btnNavBar.classList.toggle('active');
            backdropBox.classList.toggle('active');
            linesNavBarBtn.classList.toggle('active');
        });
        /**
         * ?box backdrop (off)
         */
        backdropBox.addEventListener('click', function () {
            body.classList.remove('active');
            navBar.classList.remove('active');
            btnNavBar.classList.remove('active');
            backdropBox.classList.remove('active');
            linesNavBarBtn.classList.remove('active');
        });
    }
        /**
     * ?btns navigation
     */
    btnsNavigation();
    function btnsNavigation() {
        let mainContent = document.documentElement.querySelector('.main').children;
        for (let i = 0; i < mainContent.length; i++) {
            mainContent[i].addEventListener('click', function () {
                navBar.classList.remove('active');
                btnNavBar.classList.remove('active');
                backdropBox.classList.remove('active');
                linesNavBarBtn.classList.remove('active');
            });
        };
    };
    /**
     * ?changing btn color
     */
    ColorBtn();
    function ColorBtn() {
        addEventListener('scroll', function () {
            if (document.documentElement.scrollTop > home.offsetHeight) {
                btnNavBar.style.background = "#155db1";
            }
            else {
                btnNavBar.style.background = "none";
            }
        })
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
            let btnAbout = document.documentElement.querySelector('.btn-about-navBar');
            let btnContact = document.documentElement.querySelector('.btn-contact-navBar');

            entry.forEach(function (entry) {
                if (entry.isIntersecting) {
                    /**
                     * ?home...
                     */
                    //si se detecta que la el nombre de cada clase coincide con los parametros de cada sentencia, se le indicará qué hacer indicado por cada sentencia de lo contrario no se va a ejecutar ninguna función
                    if (entry.target.classList.value == 'home sections') {
                        btnHome.classList.add('active');

                    } else if (!(entry.target.classList.value == 'home sections')) {
                        btnHome.classList.remove('active');
                    }
                    if (entry.target.classList.value == 'excursions sections') {
                        btnExcursions.classList.add('active');
                    } if (!(entry.target.classList.value == 'excursions sections')) {
                        btnExcursions.classList.remove('active');
                    }
                    if (entry.target.classList.value == 'contact sections') {
                        btnContact.classList.add('active');
                    } if (!(entry.target.classList.value == 'contact sections')) {
                        btnContact.classList.remove('active');
                    }
                    // else if (!(entry.target.classList == 'home sections' || entry.target.classList == 'contact sections' || entry.target.classList == 'excursions sections')){
                    //     btnHome.classList.remove('active');
                    //     btnExcursions.classList.remove('active');
                    //     btnContact.classList.remove('active');
                    // }
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
};
