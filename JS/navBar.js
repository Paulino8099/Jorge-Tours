
/**
 * ?navBar...
 */
navBarBtn();
function navBarBtn() {
    let navBar = document.documentElement.querySelector('.navBar');
    let btnNavBar = document.documentElement.querySelector('.btn-open-navBar');
    let home = document.documentElement.querySelector('.home');

    /**
     * ?desktop
     */
    if (document.documentElement.scrollWidth > 750) {
        navBar.classList.add('activeDesktop');
        home.classList.add('activeDesktop');
        
        btnNavBar.addEventListener('click', function () {
            btnNavBar.classList.toggle('activeDesktop');
            navBar.classList.toggle('activeDesktop');
            home.classList.toggle('activeDesktop');
        });
    }
    /**
     * ?mobile
     */
    btnNavBar.addEventListener('click', function () {
        btnNavBar.classList.toggle('active');
        navBar.classList.toggle('active');
    });
};

/**
 * ?observando secciones...
 */
observadorSection();
function observadorSection() {
    let sections = document.documentElement.querySelectorAll('.section');

    const visor = (entry, salida) => {
        // var btns
        let btnHome = document.documentElement.querySelector('.btn-home-navBar');
        let btnAbout = document.documentElement.querySelector('.btn-about-navBar');
        let btnExperiences = document.documentElement.querySelector('.btn-experiences-navBar');
        let btnContact = document.documentElement.querySelector('.btn-contact-navBar');

        entry.forEach(function (entry) {
            if (entry.isIntersecting) {
                /**
                 * ?home...
                 */
                if (entry.target.classList == 'home section') {
                    alert(51)
                    btnHome.classList.add('active');
                }
            };
        });
    };

    const observador = new IntersectionObserver(visor, {
        root: null,
        rootMargin: "-50%"
    });

    sections.forEach(e => {
        observador.observe(e);
    });
};