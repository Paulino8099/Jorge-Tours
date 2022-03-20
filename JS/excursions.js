
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
 * *included
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
            console.log(e.target.parentNode.parentNode.parentNode.children[3])
            
            if (btnValue == 'Qué Incluye?') {
                //navegando dentro de la card para encontrar el elemento "includes" y poder activarlo
                e.target.parentNode.parentNode.parentNode.children[3].classList.toggle('active');
                
                // console.log(e.target.parentNode.parentNode.parentNode)
            } else if (btnValue == '<h3>Qué Incluye?</h3>') {
                //navegando dentro de la card para encontrar el elemento "includes" y poder activarlo
                //navengando para el mismo objetivo pero de forma diferente para poder encontrarlo
                e.target.parentNode.parentNode.children[3].classList.toggle('active');
                
                // console.log(e.target.parentNode.parentNode)
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