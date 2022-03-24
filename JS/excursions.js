
/**
 * *variables globales
 */
let accountant = 0;
let listImg;

/**
 * *datos flotantes
 */
// datos flotantes de las imagenes principales "3medias"
dataFloat();
function dataFloat() {
    let targetAllImg = document.documentElement.querySelectorAll('.click');
    let mediaExcursions = document.documentElement.querySelector('.fullscreen'); //container excurisions
    let btnCancel = document.documentElement.querySelector('.btn-close-fullscreen');
    let backdropBox = document.documentElement.querySelector('.backdrop-box');
    let body = document.documentElement.querySelector('body');

    /**
     * +agregando eventos a cada imágen
     */
    targetAllImg.forEach((e) => {
        //agregando eventos o funciones a cada imagen en particular de las tarjetas del contenedor "excursions"
        e.addEventListener('click', function (e) {
            let img = document.documentElement.querySelector('.img-fullscreen');
            let title = document.documentElement.querySelector('.textTitle-fullscreen');
            let description = document.documentElement.querySelector('.text-des-fullscreen');

            /**
             * ?activando backdrop y dataFloat
             */
            //activando el backdrop y la ventana flotante
            mediaExcursions.classList.add('active'); //active            
            body.classList.add('active');
            backdropBox.classList.add('active');
            /**
             * ?rellenando la imágen
             */
            //rellenando la imágen de la ventana flotante
            img.innerHTML = `<img src="${e.target.src}" alt="">`;

            /**
             * ?rellenando el título
             */
            // rellenando el título de la ventana flotante
            title.innerHTML = e.target.parentNode.parentNode.parentNode.parentNode.children[1].children[0].innerHTML;

            /**
             * ?rellenando la descripción
             */
            // rellenando la descripción de la ventana flotante
            refillingDescription();
            function refillingDescription() {
                /**
                 * ?ballena jorobada
                 */
                if (img.innerHTML.includes('ballena-jorobada1')) {
                    description.innerHTML = `Ballena Jorobada, Samaná (República Dominicana)`;
                }
                /**
                 * ?cayo levantado
                 */
                else if (img.innerHTML.includes('cayo-levantado1')) {
                    description.innerHTML = `Cayo Levantado, Samaná (República Dominicana)`;
                }
                /**
                 * ?ballena jorobada
                 */
                else if (img.innerHTML.includes('ballena-jorobada2')) {
                    description.innerHTML = `Ballena Jorobada, Samaná (República Dominicana)`;
                }
                /**
                 * ?los haitises
                 */
                else if (img.innerHTML.includes('los-haitises1')) {
                    description.innerHTML = `Los Haitises, Samaná (República Dominicana)`;
                }
                /**
                 * ?cayo levantado
                 */
                else if (img.innerHTML.includes('cayo-levantado2')) {
                    description.innerHTML = `Cayo Levantado, Samaná (República Dominicana)`;
                }
                /**
                 * ?los haitises
                 */
                else if (img.innerHTML.includes('los-haitises2')) {
                    description.innerHTML = `Los Haitises, Samaná (República Dominicana)`;
                }
                /**
                 * ?playas el rincón
                 */
                else if (img.innerHTML.includes('playa-rincon1') || img.innerHTML.includes('playa-rincon2') || img.innerHTML.includes('playa-rincon3')) {
                    description.innerHTML = `Playa el Rincón, Samaná (República Dominicana)`;
                }
                /**
                 * ?playas madamas
                 */
                else if (img.innerHTML.includes('playa-madama1') || img.innerHTML.includes('playa-madama2') || img.innerHTML.includes('playa-madama3')) {
                    description.innerHTML = `Playa el Madama, Samaná (República Dominicana)`;
                }
                /**
                 * ?salto el limón
                 */
                else if (img.innerHTML.includes('salto-el-limon1') || img.innerHTML.includes('salto-el-limon2') || img.innerHTML.includes('salto-el-limon3')) {
                    description.innerHTML = `Salto el Limón, Samaná (República Dominicana)`;
                }
                /**
                 * ?las terrenas
                 */
                else if (img.innerHTML.includes('las-terrenas1') || img.innerHTML.includes('las-terrenas2') || img.innerHTML.includes('las-terrenas3')) {
                    description.innerHTML = `Las Terrenas, Samaná (República Dominicana)`;
                }
            };
        });

        /**
         * ?desactivando la ventana flotante
         */
        //desactivando la ventana de los datos flotantes de cada foto dentro de c/u de las tarjetas del contenedor "escursions"
        offDataFloat();
        function offDataFloat() {
            btnCancel.addEventListener('click', function () {
                mediaExcursions.classList.remove('active');
                backdropBox.classList.remove('active');
                body.classList.remove('active');

            });

            backdropBox.addEventListener('click', function () {
                mediaExcursions.classList.remove('active');
                backdropBox.classList.remove('active');
                body.classList.remove('active');
            });
        }
    });
};


/**
 * *Incluye
 */
//agregando evento a cada btn "qué incluye" de c/u de las tarjetas
openIncluded();
function openIncluded() {
    let cards = document.querySelectorAll(".cards");
    let btnClose = document.querySelectorAll(".wraper-excursions-content .btn-close");

    /**
     * ?abriendo descripción
     */
    //abriendo la descripción de lo que incluye la tarjeta para el viaje
    cards.forEach((e) => {

        e.addEventListener('click', function (e) {
            let btnValue = e.target.innerHTML;

            if (btnValue == 'Qué Incluye?') {
                //navegando dentro de la card para encontrar el elemento "includes" y poder activarlo
                e.target.parentNode.parentNode.parentNode.children[3].classList.toggle('active');
            } else if (btnValue == '<h3>Qué Incluye?</h3>') {
                //navegando dentro de la card para encontrar el elemento "includes" y poder activarlo
                //navengando para el mismo objetivo pero de forma diferente para poder encontrarlo
                e.target.parentNode.parentNode.children[3].classList.toggle('active');
            }
        });
    });

    /**
     * ?cerrando descripción
     */
    //cerrando la descripción de lo que incluye la tarjeta para el viaje
    btnClose.forEach((e) => {
        e.addEventListener('click', function (e) {
            //navegando dentro de la card para encontrar el elemento "includes" y desactivándolo
            e.target.parentNode.parentNode.parentNode.children[3].classList.toggle('active')
        });
    });
};

/**
 * *Experiencias
 */
allConfigExperiences();
function allConfigExperiences() {
    let btnBack;
    let btnNext;
    let experiencesContainer;

    /**
     * ?on/off experiencias (container)
     */
    onOffExperiences();
    function onOffExperiences() {
        // abriendo o cerrando contenedor "experiencias" al dar click en cualquiera de los btns 
        // "experiencias" que están dentro de las tarjetas.
        let btnsExperiences = document.querySelectorAll('.wraper-excursions .btn-experiences');
        experiencesContainer = document.documentElement.querySelectorAll('.wraper-excursions article');

        btnsExperiences.forEach((e) => {
            e.addEventListener('click', function (e) {
                /**
                 * +cerrando contenedores "experiencias"
                 */
                closeContainersExperiences();
                function closeContainersExperiences() {
                    experiencesContainer.forEach((e) => {
                        // cerrando todos los contenedores "experiencias" al dar click en cualquiera de los btns
                        // "experiencias" ubicado en c/u de las tarjetas.

                        accountant = 0;
                        listImg = '';
                        e.classList.remove('active');
                    });
                };
                /**
                 * +abriendo contenedor "experiencias"
                 */
                openContainerExperiences();
                function openContainerExperiences() {

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

        /**
         * +cerrando contenedor "experiencias"
         */
        closeExperiences();
        function closeExperiences() {
            //cerrando todo el contenedor "expereriencias" al dar click en btn "close".
            let btnsCloseExperiences = document.querySelectorAll('.wraper-excursions .btns-close');

            btnsCloseExperiences.forEach((e) => {
                e.addEventListener('click', function (e) {
                    //recorriendo los elementos necesarios dentro de la card para hallar y desactivar
                    // el contenido de "experiencias"
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
        // rellenando las imagenes del contenedor "experiencias"
        let btnsExperiences = document.querySelectorAll('.wraper-excursions .btn-experiences');

        btnsExperiences.forEach((e) => {
            e.addEventListener('click', function (e) {
                /**
                 * +variables
                 */
                // lista de todas las imagenes concernientes a la tarjeta que se le hizo click en "experiencias"
                listImg = e.target.parentNode.parentNode.parentNode.children[4].children[0].children[2].children;
                // seleccionando btn back de c/u de las tarjetas
                btnBack = e.target.parentNode.parentNode.parentNode.children[4].children[0].children[0].children[1];
                // seleccionando btn next de c/u de las tarjetas
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
                    //navegando hacia atrás entre las imagenes
                    btnBack.addEventListener('click', btnBack2);
                    //navegando hacia adelante entre las imagenes
                    btnNext.addEventListener('click', btnNext2);

                    // removiendo eventListener del btn 
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
                    /**
                     * +on/off btns navigation
                     */
                    // activando o desactivando los botones de navegación. Esto solo va a suceder en caso de que ya 
                    //no hayan mas imagenes que mostrar al retroceder o adelantar
                    onOffBtns();
                    function onOffBtns() {
                        let btnRight = document.querySelectorAll('.fa-solid fa-angle-right');
                        let btnLeft = document.querySelectorAll('.fa-solid fa-angle-left');

                        /**
                         * ?on/off btn "back"
                         */
                        if (accountant == 0) {
                            btnRight.forEach((e) => {
                                console.log(e.target);
                            });
                        }
                        /**
                         * ?on/off btn "next"
                         */
                        if (accountant == listImg.length - 1) {
                            btnNext.style.color = '#ff0000';
                        }
                    }
                };
            });
        });
    };
    /**
     * ?abriendo imágen en grande
     */
    imgBig();
    function imgBig() {
        let mediaExcursions = document.documentElement.querySelector('.fullscreen'); //container excurisions
        let btnRightScreen = document.querySelector('.btn-right-fullscreen');
        let btnCloseScreen = document.documentElement.querySelector('.fullscreen .btn-close-fullscreen');
        let btnLeftScreen = document.querySelector('.btn-left-fullscreen');
        let backdropBox = document.documentElement.querySelector('.backdrop-box');
        let description = document.documentElement.querySelector('.text-des-fullscreen');
        let btnBigImg = document.querySelectorAll('.wraper-excursions .fa-expand');
        let title = document.documentElement.querySelector('.textTitle-fullscreen');
        let body = document.documentElement.querySelector('body');
        let img = document.documentElement.querySelector('.img-fullscreen');
        let updateImgExperiences;

        btnBigImg.forEach((e) => {
            e.addEventListener('click', function (e) {
                updateImgExperiences = e.target.parentNode.parentNode.parentNode.children[1];
                
                //activando el backdrop y la ventana flotante para mostrar la foto en grande
                mediaExcursions.classList.add('active');
                backdropBox.classList.add('active');
                body.classList.add('active');

                /**
                 * +navegando con btns (left, back)
                 */
                btnLeftBack();
                function btnLeftBack() {
                    //navegando hacia adelante entre las imagenes
                    btnLeftScreen.addEventListener('click', function () {
                        btnLeft2();
                    });
                    //navegando hacia atrás entre las imagenes
                    btnRightScreen.addEventListener('click', function () {
                        btnRight2();
                    });

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

                    // removiendo fondo de imágen
                    btnCloseScreen.addEventListener('click', function () {
                        backdropBox.style.background = ``;
                    });

                    // removiendo fondo de imágen
                    backdropBox.addEventListener('click', function () {
                        backdropBox.style.background = ``;
                    });

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
                };

                // rellenando datos de imágen en grande y actualizando la imágen de "experiencias".
                refilling();
                function refilling() {
                    // rellenando datos del bg del fondo.
                    backdropBox.style.background = `url(${listImg[accountant].src})`;
                    backdropBox.style.backgroundSize = 'cover';
                    backdropBox.style.backgroundPosition = 'center';
                    backdropBox.style.backgroundRepeat = 'no-repeat';

                    // rellenando imágen de ventana en grande.
                    img.innerHTML = `<img src="${listImg[accountant].src}" alt="">`;

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



                // console.log(e.target.parentNode.parentNode.parentNode.children[1]);