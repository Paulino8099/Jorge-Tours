
/**
 * ?navBar active...
 */
navBarBtn();
function navBarBtn() {
    let linesNavBarBtn = document.querySelector('.lines-btn-navBar'); //lineas del btn del navBar
    let backdropBox = document.querySelector('.backdrop-box'); //caja para dar opacidad al fondo
    let infoPerson = document.querySelector('.info-person'); //recuadro de información personal en la parte inferior del menu "navBar"
    let btnToggle = document.querySelector('.btn-open-navBar'); //btn del menú de navegación
    let btnsMain = document.documentElement.querySelectorAll('.btn-main'); //botones del menú del "navBar"
    let navBar = document.querySelector('.navBar'); //contendor de menú de navegación
    let home = document.querySelector('.home'); //contenedor de la sección de "home"
    let body = document.querySelector('body'); //contenedor de la sección de home

    /**
     * *onOff navBar
     */
    onOffNavBar();
    function onOffNavBar() {
        // todas las acciones para activar o desactivar el menú de navegación (navBar).

        // activando menú al dar click en "btn" on/off.
        btnToggle.addEventListener('click', function () {
            body.classList.toggle('active');
            navBar.classList.toggle('active');
            btnToggle.classList.toggle('active');
            infoPerson.classList.toggle('active');
            linesNavBarBtn.classList.toggle('active');

            // activando difuminación del backdrop.
            backdropBox.classList.toggle('active');
        });


        // ocultando menú al dar click en "backdrop".
        backdropBox.addEventListener('click', function () {
            body.classList.remove('active');
            navBar.classList.remove('active');
            btnToggle.classList.remove('active');
            infoPerson.classList.remove('active');
            linesNavBarBtn.classList.remove('active');

            // desactivando difuminación del backdrop.
            backdropBox.classList.remove('active');
        });

        // ocultando menú al dar click en cualquiera de los botones del menú de "navBar".
        btnsMain.forEach((e) => {
            e.addEventListener('click', function () {
                body.classList.remove('active');
                navBar.classList.remove('active');
                btnToggle.classList.remove('active');
                infoPerson.classList.remove('active');
                linesNavBarBtn.classList.remove('active');

                // activando difuminación del backdrop.
                backdropBox.classList.remove('active');
            });
        });
    }

    //cambiando el color de fondo del btn on/off al estar fuera de la parte principal de la página "home".
    ColorBtn();
    function ColorBtn() {
        addEventListener('scroll', function () {
            if (document.documentElement.scrollTop > home.offsetHeight) {
                btnToggle.style.background = "#155db1";
            }
            else {
                btnToggle.style.background = "none";
            }
        })
    };

    //indicador de secciones automatico al al navegar entre las secciones principales de la página.
    observadorSection();
    function observadorSection() {
        let sections = document.documentElement.querySelectorAll('.sections');
        let btnHome = document.documentElement.querySelector('.btn-home-navBar');
        let btnExcursions = document.documentElement.querySelector('.btn-excursions-navBar');
        let btnAbout = document.documentElement.querySelector('.btn-about-navBar');
        let btnContact = document.documentElement.querySelector('.btn-contact-navBar');


        function obser(entry, salida) {
            // si se detecta que el nombre de cada clase coincide con los 
            // parametros de cada sentencia, se le indicará qué hacer indicado por cada sentencia 
            // de lo contrario no se va a ejecutar ninguna función.
            entry.forEach(function (entry) {
                if (entry.isIntersecting) {
                    // sección "home".
                    if (entry.target.classList.value == 'home sections') {
                        btnHome.classList.add('active');
                    } else if (!(entry.target.classList.value == 'home sections')) {
                        btnHome.classList.remove('active');
                    }
                    // sección "excursiones".
                    if (entry.target.classList.value == 'excursions sections') {
                        btnExcursions.classList.add('active');
                    } else if (!(entry.target.classList.value == 'excursions sections')) {
                        btnExcursions.classList.remove('active');
                    }
                    // sección "sobre nosotros".
                    if (entry.target.classList.value == 'aboutUs sections') {
                        btnAbout.classList.add('active');
                    } else if (!(entry.target.classList.value == 'aboutUs sections')) {
                        btnAbout.classList.remove('active');
                    }
                    // sección "contacto".
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

        sections.forEach((e) => {
            observador.observe(e);
        });
    };
};
