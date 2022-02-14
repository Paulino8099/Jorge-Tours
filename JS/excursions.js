
dataFloat();
function dataFloat() {
    let targetAllImg = document.documentElement.querySelectorAll('.click');
    let mediaExcursions = document.documentElement.querySelector('.medias-excursions'); //container excurisions
    let btnCancel = document.documentElement.querySelector('.btn-medias-excursions');
    let navBar = document.documentElement.querySelector('.navBar');
    let backdropBox = document.documentElement.querySelector('.backdrop-box');
    let body = document.documentElement.querySelector('body');

    let y = 0;
    let x = 0;
    let widthBox = mediaExcursions.offsetWidth / 2; //ancho de la contenedor de medias flotante

    /**
     * ?buscando coordenadas del puntero mouse
     *///redefiniendo las variables para que sus valores sean los valores devueltos por las coordenadas del eje "X" y "Y"
    window.addEventListener('mousemove', function (e) {
        y = e.clientY;
        x = e.clientX;
    });
    /**
     * ?agregando eventos a cada imágen  
     *///agregando eventos o fuunciones a cada imagen en particular del contenedor "excursions"
    targetAllImg.forEach((e) => {
        e.addEventListener('click', function (e) {
            /**
             * ?activating backdrop & dataFloat
             */
            mediaExcursions.classList.add('active'); //active            
            body.classList.add('active');
            backdropBox.classList.add('active');

            /**
             * ?refilling dataFloat
             *///
            let img = document.documentElement.querySelector('.img-medias-excursions');
            let title = document.documentElement.querySelector('.textTitle-medias-excursions');
            let description = document.documentElement.querySelector('.text-des-medias-excursions');

            //refilling the img
            img.innerHTML = `<img src="${e.target.src}" alt="">`;

            // refilling the title
            title.innerHTML = e.target.parentNode.parentNode.parentNode.parentNode.children[1].children[0].children[0].childNodes[0].nodeValue;

            // refilling the description
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
         * ?disable ventana "dataFloat"
         */
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