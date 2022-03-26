
/**
 * *variables de usos contínuos
 */
let accountant = 0;
let listImg;

/**
 * *3medias
 */
// datos flotantes de las imagenes principales "3medias".
dataFloat();
function dataFloat() {
    let experiencesContainer = document.documentElement.querySelectorAll('.wraper-excursions article');
    let btnsNavigationScreen = document.documentElement.querySelector('.fullscreen .btns-navigation-fullscreen');
    let backdropBox = document.documentElement.querySelector('.backdrop-box');
    let description = document.documentElement.querySelector('.text-des-fullscreen');
    let fullScreen = document.documentElement.querySelector('.fullscreen');
    let img3Media = document.documentElement.querySelectorAll('.click');
    let btnCancel = document.documentElement.querySelector('.btn-close-fullscreen');
    let title = document.documentElement.querySelector('.textTitle-fullscreen');
    let body = document.documentElement.querySelector('body');
    let img = document.documentElement.querySelector('.img-fullscreen');

    /**
     * +agregando eventos a cada imágen
     */
    img3Media.forEach((e) => {
        //agregando eventos o funciones a cada imagen en particular de las tarjetas del contenedor 
        //"excursions".
        e.addEventListener('click', function (e) {
            // desactivando los botones de navegación del "fullScreen".
            btnsNavigationScreen.style.display = 'none';

            //cerrrando todos contenedores "experiencias".
            close();
            function close() {
                experiencesContainer.forEach((e) => {
                    accountant = 0;
                    listImg = '';
                    e.classList.remove('active');
                });
            };

            //activando el "backdrop" y "fullScreen".
            fullScreen.classList.add('active');
            body.classList.add('active');
            backdropBox.classList.add('active');

            //rellenando la imágen de "fullScreen".
            img.innerHTML = `<img src="${e.target.src}" alt="">`;

            // centrando la ventana "fullScreen".
            fullScreen.style.left = `calc(50% - ${img.offsetWidth / 2}px)`;
            fullScreen.style.top = `calc(50% - ${img.offsetHeight / 2}px)`;

            // rellenando el título de "fullScreen".
            title.innerHTML = e.target.parentNode.parentNode.parentNode.parentNode.children[1].children[0].innerHTML;

            // rellenando la descripción de "fullScreen".
            let refillingDescription = e.target.parentNode.parentNode.parentNode.parentNode.children[1].children[0].innerHTML;
            description.innerHTML = `${refillingDescription}, Samaná (República Dominicana)`;
        });

        /**
         * ?desactivando la ventana flotante
         */
        //desactivando la ventana de los datos flotantes de cada foto dentro de c/u de las tarjetas del contenedor "escursions"
        offDataFloat();
        function offDataFloat() {
            btnCancel.addEventListener('click', function () {
                fullScreen.classList.remove('active');
                backdropBox.classList.remove('active');
                body.classList.remove('active');

            });

            backdropBox.addEventListener('click', function () {
                fullScreen.classList.remove('active');
                backdropBox.classList.remove('active');
                body.classList.remove('active');
            });
        }
    });
};


/**
 * *qué Incluye
 */
//agregando evento a cada btn "qué incluye" de c/u de las tarjetas.
incluye();
function incluye() {
    let cards = document.querySelectorAll(".cards");
    let btnClose = document.querySelectorAll(".wraper-excursions-content .btn-close");

    //abriendo el contenedor "qué incluye" la tarjeta para el viaje.
    cards.forEach((e) => {
        e.addEventListener('click', function (e) {
            let btnValue = e.target.innerHTML;

            if (btnValue == 'Qué Incluye?') {
                //activando el contenedor "qué incluye" al dar click en btn "qué incluye" de las tarjetas.
                e.target.parentNode.parentNode.parentNode.children[3].classList.toggle('active');
            } else if (btnValue == '<h3>Qué Incluye?</h3>') {
                //activando el contenedor "qué incluye" al dar click en btn "qué incluye" de las tarjetas.
                e.target.parentNode.parentNode.children[3].classList.toggle('active');
            };
        });
    });

    //cerrando el contenedor "que incluye" al dar click en "btn close".
    btnClose.forEach((e) => {
        e.addEventListener('click', function (e) {
            // cerrando el contenedor "qué incluye" al dar click en su propio "btn close".
            e.target.parentNode.parentNode.parentNode.children[3].classList.toggle('active')
        });
    });
};

/**
 * *experiencias
 */
experiences();
function experiences() {
    let experiencesContainer = document.documentElement.querySelectorAll('.wraper-excursions article');
    let btnsExperiences = document.querySelectorAll('.wraper-excursions .btn-experiences');
    let btnBack;
    let btnNext;

    /**
     * ?on/off experiencias (container)
     */
    onOffExperiences();
    function onOffExperiences() {
        // abriendo o cerrando contenedor "experiencias" al dar click en cualquiera de los btns 
        // "experiencias" que están dentro de las tarjetas.
        btnsExperiences.forEach((e) => {
            e.addEventListener('click', function (e) {
                //cerrrando contenedores de "experiencias".
                close();
                function close() {
                    experiencesContainer.forEach((e) => {
                        // cerrando todos los contenedores "experiencias" al dar click en cualquiera de los btns
                        // "experiencias" ubicado en c/u de las tarjetas.

                        accountant = 0;
                        listImg = '';
                        e.classList.remove('active');
                    });
                };

                // abriendo contenedores de "experiencias".
                // cuando se le de click para abrir un contenedor se van a cerrar todos los demás.
                open();
                function open() {
                    // abriendo contenedor "experiencias" de la tarjeta a la que se le dió click.
                    if (e.target.innerHTML == 'Experiencias') {
                        e.target.parentNode.parentNode.parentNode.children[4].classList.toggle('active');
                    }
                    // abriendo contenedor "experiencias" de la tarjeta a la que se le dió click.
                    else if (e.target.innerHTML == '<h3>Experiencias</h3>') {
                        e.target.parentNode.parentNode.children[4].classList.toggle('active');
                    }
                };
            });
        });

        // cerrando el contendor "experiencia" que está abierto al dar click en btn "close".
        closeExperiences();
        function closeExperiences() {
            //cerrando contenedor "expereriencias" al dar click en btn "close".
            let btnsCloseExperiences = document.querySelectorAll('.wraper-excursions .btns-close');

            btnsCloseExperiences.forEach((e) => {
                e.addEventListener('click', function (e) {
                    //recorriendo los elementos necesarios dentro de la card para hallar y desactivar
                    // el contenido de "experiencias".
                    e.target.parentNode.parentNode.parentNode.parentNode.parentNode.children[4].classList.toggle('active')
                });
            });
        };
    };
    /**
     * ?rellenando area de imágen
     */
    refillingImg();
    function refillingImg() {
        // rellenando las imagenes del contenedor "experiencias".
        let btnsExperiences = document.querySelectorAll('.wraper-excursions .btn-experiences');

        btnsExperiences.forEach((e) => {
            e.addEventListener('click', function (e) {
                /**
                 * +variables
                 */
                // lista de todas las imagenes concernientes a la tarjeta que se le hizo click en "experiencias".
                listImg = e.target.parentNode.parentNode.parentNode.children[4].children[0].children[2].children;
                // seleccionando btn back de c/u de las tarjetas.
                btnBack = e.target.parentNode.parentNode.parentNode.children[4].children[0].children[0].children[1];
                // seleccionando btn next de c/u de las tarjetas.
                btnNext = e.target.parentNode.parentNode.parentNode.children[4].children[0].children[0].children[2];
                /**
                 * +funciones
                 */
                //escogiendo una imagen de la lista de imagenes (que se encuentra al hacer click en alguna de las tarjetas)
                //al dar click en btn "back". Esto para rellenar con la imágen siguiente o la imágen anterior.
                refillingIMg();
                function refillingIMg() {
                    e.target.parentNode.parentNode.parentNode.children[4].children[0].children[1].innerHTML = `<img src="${listImg[accountant].src}" alt="">`;
                };

                /**
                 * ??????????????????????????????????????????????????????????????????????????????????????
                 * ??????????????????????????????????????????????????????????????????????????????????????
                 * ??????????????????????????????????????????????????????????????????????????????????????
                 */

                /**
                 * +navegando con btns (left, back)
                 */
                btnLeftBack();
                function btnLeftBack() {
                    //navegando hacia atrás entre las imagenes.
                    btnBack.addEventListener('click', btnBack2);
                    //navegando hacia adelante entre las imagenes.
                    btnNext.addEventListener('click', btnNext2);

                    // removiendo eventListener del btn.
                    btnsExperiences.forEach((e) => {
                        e.addEventListener('click', function () {
                            btnBack.removeEventListener('click', btnBack2);
                            btnNext.removeEventListener('click', btnNext2);
                        });
                    });

                    function btnBack2() {
                        if (accountant >= 1) {
                            accountant -= 1;
                        };

                        refillingIMg();
                        onOffBtns();
                    };
                    function btnNext2() {
                        if (accountant <= (listImg.length - 2)) {
                            accountant += 1;
                        };

                        refillingIMg();
                        onOffBtns();
                    };
                };
            });
        });
    };
    /**
     * ?abriendo imágen en grande
     */
    imgBig();
    function imgBig() {
        let btnsNavigationScreen = document.documentElement.querySelector('.fullscreen .btns-navigation-fullscreen');
        let updateImgExperiences;
        let btnRightScreen = document.querySelector('.btn-right-fullscreen');
        let btnCloseScreen = document.documentElement.querySelector('.fullscreen .btn-close-fullscreen');
        let btnLeftScreen = document.querySelector('.btn-left-fullscreen');
        let backdropBox = document.documentElement.querySelector('.backdrop-box');
        let description = document.documentElement.querySelector('.text-des-fullscreen');
        let fullScreen = document.documentElement.querySelector('.fullscreen');
        let btnBigImg = document.querySelectorAll('.wraper-excursions .fa-expand');
        let title = document.documentElement.querySelector('.textTitle-fullscreen');
        let body = document.documentElement.querySelector('body');
        let img = document.documentElement.querySelector('.img-fullscreen');

        btnBigImg.forEach((e) => {
            e.addEventListener('click', function (e) {
                updateImgExperiences = e.target.parentNode.parentNode.parentNode.children[1];

                //activando el "backdrop" y la "fullScreen" para mostrar la foto en grande.
                fullScreen.classList.add('active');
                backdropBox.classList.add('active');
                body.classList.add('active');

                // activando botones de navegación.
                btnsNavigationScreen.style.display = 'grid';

                /**
                 * +navegando con btns (left, back)
                 */
                btnLeftBack();
                function btnLeftBack() {
                    //navegando hacia adelante entre las imagenes
                    btnLeftScreen.addEventListener('click', btnLeft2);
                    //navegando hacia atrás entre las imagenes
                    btnRightScreen.addEventListener('click', btnRight2);

                    function btnLeft2() {
                        if (accountant >= 1) {
                            accountant -= 1;
                        };

                        refilling();
                    };
                    function btnRight2() {
                        if (accountant <= (listImg.length - 2)) {
                            accountant += 1;
                        };

                        refilling();
                    };
                    // removiendo eventListener de los btns de navegación al salir de la ventana "fullScreen"
                    btnCloseScreen.addEventListener('click', function () {
                        btnLeftScreen.removeEventListener('click', btnLeft2);
                        btnRightScreen.removeEventListener('click', btnRight2);
                    });
                    // removiendo eventListener de los btns de navegación al dar click en la ventana "backDrop"
                    backdropBox.addEventListener('click', function () {
                        btnLeftScreen.removeEventListener('click', btnLeft2);
                        btnRightScreen.removeEventListener('click', btnRight2);
                    });

                    // removiendo fondo que es una imágen y también el filter estilo blur.
                    btnCloseScreen.addEventListener('click', function () {
                        backdropBox.style.filter = 'blur(0)';
                        backdropBox.style.background = ``;
                    });

                    // removiendo fondo que es una imágen y también el filter estilo blur.
                    backdropBox.addEventListener('click', function () {
                        backdropBox.style.filter = 'blur(0)';
                        backdropBox.style.background = ``;
                    });
                };

                // insertando imágen en grande y actualizando la imágen de "experiencias".
                refilling();
                function refilling() {
                    console.log(accountant)

                    // rellenando datos del bg del fondo.
                    backdropBox.style.background = `url(${listImg[accountant].src})`;
                    backdropBox.style.backgroundSize = 'cover';
                    backdropBox.style.backgroundPosition = 'center';
                    backdropBox.style.backgroundRepeat = 'no-repeat';
                    backdropBox.style.filter = 'blur(5px)';

                    // rellenando imágen de ventana en grande.
                    img.innerHTML = `<img src="${listImg[accountant].src}" alt="">`;

                    // centrando la ventana "fullScreen".
                    fullScreen.style.top = `calc(50% - ${img.offsetHeight / 2}px)`;
                    fullScreen.style.left = `calc(50% - ${img.offsetWidth / 2}px)`;

                    // actualizando imágen del contenedor "experiencias" al ir navegando entre las
                    // imagenes de "fullScreen".
                    updateImgExperiences.innerHTML = `<img src="${listImg[accountant].src}" alt="">`;
                };

                // rellenando datos del título de la ventana flotante.
                title.innerHTML = '';
                // rellenando los datos de la descrición de la ventana flotante.
                description.innerHTML = '';
            });
        });
    };
};