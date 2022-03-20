
/**
 * *datos flotantes
 */
// datos flotantes de las imagenes principales
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
//agregando evento a cada btn; "qué incluye" de c/u de las tarjetas
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

    /**
     * ?abriendo experiencias
     */
    //abriendo todo el contenido de "expereriencias"
    openExperiences();
    function openExperiences() {
        let btnsExperiences = document.querySelectorAll('.wraper-excursions .btn-experiences');

        btnsExperiences.forEach((e) => {
            // abriendo experiencias al dar click en cualquiera de los btns "experiencias" de las tarjetas 
            e.addEventListener('click', function (e) {
                //recorriendo los elementos necesarios dentro de la card para hallar y activar 
                // el contenido de "experiencias"
                e.target.parentNode.parentNode.parentNode.children[4].classList.toggle('active');
            })
        });
    };
    /**
     * ?cerrando experiencias
     */
    //cerrando todo el contenido de "expereriencias"
    closeExperiences();
    function closeExperiences() {
        let btnsCloseExperiences = document.querySelectorAll('.wraper-excursions .btns-close');

        btnsCloseExperiences.forEach((e) => {
            e.addEventListener('click', function (e) {
                //recorriendo los elementos necesarios dentro de la card para hallar y desactivar
                // el contenido de "experiencias"
                e.target.parentNode.parentNode.parentNode.parentNode.parentNode.children[4].classList.toggle('active')
            });
        });
    };
    /**
     * ?rellenando area de imagenes
     */
    // rellenando las imagenes del contenido de "experiencias"
    refillingImg();
    function refillingImg() {
        let btnsExperiences = document.querySelectorAll('.wraper-excursions .btn-experiences');

        btnsExperiences.forEach((e) => {

            e.addEventListener('click', function (e) {
                // lista de todas las imagenes concernientes a la tarjeta que se le hizo click en "experiencias"
                listImg = e.target.parentNode.parentNode.parentNode.children[4].children[0].children[2].children;
                // contador
                accountant = 0;
                // seleccionando btn back de c/u de las tarjetas
                let btnBack = e.target.parentNode.parentNode.parentNode.children[4].children[0].children[0].children[1];
                // seleccionando btn next de c/u de las tarjetas
                let btnNext = e.target.parentNode.parentNode.parentNode.children[4].children[0].children[0].children[2];

                /**
                 * +on/off btns navigation
                 */
                onOffBtns();
                // desactivando o activando btns de navegación adelantar o retroceder las imagenes
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
                 * +navegando hacia atrás (btn back)
                 */
                //navegando hacia atrás entre las imagenes
                btnBack.addEventListener('click', function () {
                    if (accountant >= 1) {
                        accountant -= 1;
                    };
                    /**
                     * ?rellenado de imagenes
                     */
                    //rellenado de imagen al dar click en btn "back"
                    e.target.parentNode.parentNode.parentNode.children[4].children[0].children[1].innerHTML = `<img src="${listImg[accountant].src}" alt="">`;

                    onOffBtns();
                });
                /**
                 * +navegando hacia adelante (btn next)
                 */
                //navegando hacia adelante entre las imagenes
                btnNext.addEventListener('click', function () {
                    if (accountant <= (listImg.length - 2)) {
                        accountant += 1;
                    };
                    /**
                     * ?rellenado de imagenes
                     */
                    //rellenado de imagen al dar click en btn "next"
                    e.target.parentNode.parentNode.parentNode.children[4].children[0].children[1].innerHTML = `<img src="${listImg[accountant].src}" alt="">`;
                });

                e.target.parentNode.parentNode.parentNode.children[4].children[0].children[1].innerHTML = `<img src="${listImg[accountant].src}" alt="">`;
                onOffBtns();
            });
        });
    };
};