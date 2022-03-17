
/**
 * ?navBar active...
 */
navBarBtn();
function navBarBtn() {
    let navBar = document.querySelector('.navBar'); //contendor de menú de navegación
    let btnNavBar = document.querySelector('.btn-open-navBar'); //btn del menú de navegación
    let infoPerson = document.querySelector('.info-person'); //recuadro de información personal en la parte inferior del menu "navBar"
    let home = document.querySelector('.home'); //contenedor de la sección de "home"
    let backdropBox = document.querySelector('.backdrop-box'); //caja para dar opacidad al fondo
    let linesNavBarBtn = document.querySelector('.lines-btn-navBar'); //lineas del btn del navBar
    let body = document.querySelector('body'); //contenedor de la sección de home

    /**
     * *onOff navBar
     */
    onOffNavBar();
    // todas las acciones para activar o desactivar el menú de navegación (navBar)
    function onOffNavBar() {
        /**
         * ?btn navBar (on/Off)
         */
        btnNavBar.addEventListener('click', function () {
            body.classList.toggle('active');
            navBar.classList.toggle('active');
            btnNavBar.classList.toggle('active');
            infoPerson.classList.toggle('active');
            backdropBox.classList.toggle('active');
            linesNavBarBtn.classList.toggle('active');
        });
        /**
         * ?box backdrop (off)
         */
        // ocultando menú al dar click en "backdrop"
        backdropBox.addEventListener('click', function () {
            body.classList.remove('active');
            navBar.classList.remove('active');
            btnNavBar.classList.remove('active');
            infoPerson.classList.remove('active');
            backdropBox.classList.remove('active');
            linesNavBarBtn.classList.remove('active');
        });
        /**
         * ?btns navigation (off)
         */
        // ocultando menú al dar click en cualquier btn del menú de "navBar"
        btnsNavigation();
        function btnsNavigation() {
            let btns = document.documentElement.querySelectorAll('.btn-main');
            btns.forEach((e) => {
                e.addEventListener('click', function () {
                    body.classList.remove('active');
                    navBar.classList.remove('active');
                    btnNavBar.classList.remove('active');
                    infoPerson.classList.remove('active');
                    backdropBox.classList.remove('active');
                    linesNavBarBtn.classList.remove('active');
                });
            });
        };
    }
    /**
     * *changing btn color
     */
    //cambiando el color del bg del btn al detectar que se ha heco la cantidad de scroll resultante al tamaño de la sección "home"
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
     * *observando secciones...
     */
    //indicador de secciones automatico al detectar que algunas de ellas se encuentra visible para el usuario
    observadorSection();
    function observadorSection() {
        let sections = document.documentElement.querySelectorAll('.sections');

        function obser(entry, salida) {
            // var btns
            let btnHome = document.documentElement.querySelector('.btn-home-navBar');
            let btnExcursions = document.documentElement.querySelector('.btn-excursions-navBar');
            let btnAbout = document.documentElement.querySelector('.btn-about-navBar');
            let btnContact = document.documentElement.querySelector('.btn-contact-navBar');

            // si se detecta que el nombre de cada clase coincide con los 
            // parametros de cada sentencia, se le indicará qué hacer indicado por cada sentencia 
            // de lo contrario no se va a ejecutar ninguna función
            entry.forEach(function (entry) {
                if (entry.isIntersecting) {
                    /**
                     * ?home
                     */
                    if (entry.target.classList.value == 'home sections') {
                        btnHome.classList.add('active');
                    } else if (!(entry.target.classList.value == 'home sections')) {
                        btnHome.classList.remove('active');
                    }
                    /**
                     * ?excursions
                     */
                    if (entry.target.classList.value == 'excursions sections') {
                        btnExcursions.classList.add('active');
                    } else if (!(entry.target.classList.value == 'excursions sections')) {
                        btnExcursions.classList.remove('active');
                    }
                    /**
                     * ?about-us
                     */
                    if (entry.target.classList.value == 'about-us sections') {
                        btnAbout.classList.add('active');
                    } else if (!(entry.target.classList.value == 'about-us sections')) {
                        btnAbout.classList.remove('active');
                    }
                    /**
                     * ?contact
                     */
                    if (entry.target.classList.value == 'contact sections') {
                        btnContact.classList.add('active');
                    } else if (!(entry.target.classList.value == 'contact sections')) {
                        btnContact.classList.remove('active');
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
};
