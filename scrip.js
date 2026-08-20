/* =========================================================
   VESTA ESPACIOS
   MENÚ RESPONSIVE
========================================================= */

const mobileMenu =
    document.getElementById("mobileMenu");

const nav =
    document.getElementById("nav");


/* =========================================================
   ABRIR Y CERRAR MENÚ
========================================================= */

mobileMenu.addEventListener(
    "click",
    function () {

        nav.classList.toggle("active");

        mobileMenu.classList.toggle("active");

        const menuAbierto =
            nav.classList.contains("active");

        mobileMenu.setAttribute(
            "aria-expanded",
            menuAbierto
        );

    }
);


/* =========================================================
   CERRAR AL SELECCIONAR UNA OPCIÓN
========================================================= */

const links =
    nav.querySelectorAll("a");

links.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                nav.classList.remove("active");

                mobileMenu.classList.remove("active");

                mobileMenu.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    }
);


/* =========================================================
   CERRAR SI VOLVEMOS A ESCRITORIO
========================================================= */

window.addEventListener(
    "resize",
    function () {

        if (window.innerWidth > 768) {

            nav.classList.remove("active");

            mobileMenu.classList.remove("active");

            mobileMenu.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }
);