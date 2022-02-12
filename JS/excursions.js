
dataFloat();
function dataFloat() {
    let targetAllImg = document.documentElement.querySelectorAll('.click');
    let mediaExcursions = document.documentElement.querySelector('.medias-excursions'); //container excurisions
    let btnCancel = document.documentElement.querySelector('.btn-medias-excursions');
    let navBar = document.documentElement.querySelector('.navBar');
    let backdropBox = document.documentElement.querySelector('.backdrop-box');

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
            if (x < (widthBox)) {
                x = 250;
            }

            mediaExcursions.classList.add('active'); //active
            mediaExcursions.style.top = `${y + (e.target.offsetWidth / 3) + 'px'}`;
            mediaExcursions.style.left = x - widthBox + 'px';
            if (document.documentElement.scrollWidth <= 750) {
                mediaExcursions.style.left = 0;
                mediaExcursions.style.right = 0;

                mediaExcursions.style.left = 5 + '%';
            };
            /**
             * ?activating backdrop
             */
            backdropBox.classList.add('active');
            e.target.parentNode.style.zIndex = '11000';
            console.log(e.target.parentNode.parentNode)

            /**
             * ?refilling dataFloat
             *///
            let img = document.documentElement.querySelector('.img-medias-excursions');
            let title = document.documentElement.querySelector('.textTitle-medias-excursions');
            let description = document.documentElement.querySelector('.text-des-medias-excursions');

            //refilling img
            img.innerHTML = `<img src="${e.target.src}" alt="">`;

            // refilling title
            title.innerHTML = e.target.parentNode.parentNode.parentNode.parentNode.children[1].children[0].children[0].childNodes[0].nodeValue;

            // refilling description
            if (title.innerHTML == 'Ballenas y Cayo Levantado') {
                description.innerHTML = `${title.innerHTML}, Samaná (República Dominicana)`;
            }
            else if (title.innerHTML == 'Haitises y Cayo') {
                description.innerHTML = `${title.innerHTML}, Samaná (República Dominicana)`;
            }
            else if (title.innerHTML == 'Playa el Rincón') {
                description.innerHTML = `${title.innerHTML}, Samaná (República Dominicana)`;
            }
            else if (title.innerHTML == 'Playa Madama') {
                description.innerHTML = `${title.innerHTML}, Samaná (República Dominicana)`;
            }
            else if (title.innerHTML == 'Salto el Limón') {
                description.innerHTML = `${title.innerHTML}, Samaná (República Dominicana)`;
            }
            else if (title.innerHTML == 'Las Terrenas') {
                description.innerHTML = `${title.innerHTML}, Samaná (República Dominicana)`;
            };
        });
    });

    /**
     * ?cancelando o ocultando ventana "dataFloat"
     */
    btnCancel.addEventListener('click', function () {
        mediaExcursions.classList.remove('active');
        backdropBox.classList.remove('active');
    });

    backdropBox.addEventListener('click', function () {
        mediaExcursions.classList.remove('active');
        backdropBox.classList.remove('active');
    });
    window.addEventListener('scroll', () => {
        mediaExcursions.classList.remove('active');
        backdropBox.classList.remove('active');
    });
};