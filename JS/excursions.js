
/**
 * *datos flotantes
 */
// datos flotantes de las imagenes principales "3medias"
dataFloat();
function dataFloat() {
    let targetAllImg = document.documentElement.querySelectorAll('.click');
    let mediaExcursions = document.documentElement.querySelector('.medias-excursions'); //container excurisions
    let btnCancel = document.documentElement.querySelector('.btn-medias-excursions');
    let backdropBox = document.documentElement.querySelector('.backdrop-box');
    let body = document.documentElement.querySelector('body');

    /**
     * *agregando eventos a cada imágen
     *///agregando eventos o funciones a cada imagen en particular de las tarjetas del contenedor "excursions"
    targetAllImg.forEach((e) => {
        e.addEventListener('click', function (e) {
            let img = document.documentElement.querySelector('.img-medias-excursions');
            let title = document.documentElement.querySelector('.textTitle-medias-excursions');
            let description = document.documentElement.querySelector('.text-des-medias-excursions');

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
    let accountant;
    let listImg;
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

                    e.target.parentNode.parentNode.parentNode.children[4].classList.toggle('active');
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
                // contador
                accountant = 0;
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
                 * +on/off btns navigation
                 */
                // activando o desactivando los botones de navegación. Esto solo va a suceder en caso de que ya 
                //no hayan mas imagenes que mostrar al retroceder o adelantar
                onOffBtns();
                function onOffBtns() {
                    /**
                     * ?on/off btn "back"
                     */
                    if (accountant == 0) {
                        btnBack.classList.toggle('desactive');
                    }
                    /**
                     * ?on/off btn "next"
                     */
                    if (accountant == listImg.length - 1) {
                        btnNext.classList.toggle('desactive');
                    }
                }

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
                };
            });
        });
    };
};