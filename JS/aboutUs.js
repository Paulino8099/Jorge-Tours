
/**
 * *all config
 */
allConfig();
function allConfig() {
    /**
     * *todas las configuraciones de la "tarjeta de presentación"
     */
    allConfigCardPresenting();
    function allConfigCardPresenting() {
        // toda el área de la imágen para abrir en grande
        let areaImg = document.querySelector('.img-area-presentation-aboutUs');
        //img del titulo principal de la tarjeta
        let imgTitle = document.querySelector('.img-title-presentation-aboutUs');
        //btn para cerrar la imágen en grande dentro de la tarjeta
        let btnClose = document.querySelector('.btn-close-presentation-aboutUs');

        // abriendo la imágen en grande
        imgTitle.addEventListener('click', function () {
            areaImg.classList.toggle('active');
        });
        //cerrando la imágen en grande
        btnClose.addEventListener('click', function () {
            areaImg.classList.toggle('active');
        });
    };
};