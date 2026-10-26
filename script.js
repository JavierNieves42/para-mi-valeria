/* ========================================= */
/* ELEMENTOS */
/* ========================================= */

const enterButton =
    document.getElementById("enterButton");

const welcome =
    document.getElementById("welcome");

const garden =
    document.getElementById("garden");

const field =
    document.getElementById("field");

const flowerContainer =
    document.getElementById("flowerContainer");

const messagePopup =
    document.getElementById("messagePopup");

const specialMessage =
    document.getElementById("specialMessage");

const closeMessage =
    document.getElementById("closeMessage");


/* ========================================= */
/* MENSAJES */
/* ========================================= */

const messages = [

    "Espero que sepas lo increíblemente especial que eres para mí. ❤️",

    "Cada día contigo se convierte en uno de mis días favoritos.",

    "Si pudiera darte una flor por cada vez que me haces sonreír, tendría que regalarte un jardín infinito. 🌷",

    "Haces que hasta los días más simples se sientan especiales.",

    "Espero que este nuevo año de tu vida te traiga tanta felicidad como tú traes a la mía.",

    "Te elegiría en esta vida y en todas las demás. ❤️",

    "Eres mi persona favorita para reír, hablar y simplemente pasar el tiempo.",

    "Gracias por ser tú.",

    "Puede haber millones de flores en este jardín, pero tú siempre serás la más hermosa. 🌷",

    "Amo cada recuerdo que hemos creado juntos.",

    "Haces mi mundo mucho más bonito.",

    "No importa cuántas flores haya aquí, ninguna podría compararse contigo.",

    "Contigo, hasta los momentos más pequeños se convierten en recuerdos especiales.",

    "Gracias por hacer mis días más felices.",

    "Espero poder seguir celebrando muchos cumpleaños más a tu lado.",

    "Feliz cumpleaños, mi amor. ❤️",

    "De todas las casualidades de la vida, conocerte siempre será mi favorita. ❤️",

    "Ojalá pudieras verte con mis ojos, para que entendieras lo increíble que eres para mí.",

    "Mi lugar favorito es estar alado tuyo.",

    "No sabía que una persona podía hacerme tan feliz hasta que llegaste tú.",

    "Si volviera a conocerte por primera vez, volvería a enamorarme de ti.",

    "Espero que nunca olvides lo mucho que significas para mí, incluso en los días en que no te lo digo suficiente.",

    "Entre todas estas flores, todavía elegiría llevarte una nueva cada día. 🌷",

    "Uno de mis regalos favoritos de la vida ha sido poder compartirla contigo.",

    "No necesito un día especial para recordarte cuánto te amo, pero hoy tengo una razón más para celebrarte. ❤️",

    "Quiero seguir creando contigo esos pequeños momentos que algún día recordaremos como nuestros mejores recuerdos.",

    "Si este jardín realmente fuera infinito, todavía no tendría suficientes flores para demostrarte cuánto te quiero.",

    "Espero que cuando mires estas flores recuerdes que alguien te ama muchísimo y pensó en ti mientras hacía cada parte de este jardín. 🌷❤️",

    "Mi super tenista favorita.",

    "Te amo mucho con demasiado.",

    "Aunque estemos de lejitos, siempre estaré contigo.",

    "No importa lo que digan los demás.",

    "Siempre estaré contigo, pase lo que pase, ya nunca más me iré.",

    "Me encanta esa carita.",

    "Tus ojitos son los más lindos del mundo.",

    "Quiero una vida contigo, y contigo namas.",

    "MIAAAAAAA, MIAAAAAA, MIAAAAAA, MIAAAAAA, MIAAAAAA, MIAAAAAA, MIAAAAAA, MIAAAAAA, MIAAAAAA, MIAAAAAA, MIAAAAAA, MIAAAAAA.",

    "Stinky, Chiken Nugget y Candy te aman mucho. ❤️"

];


/* ========================================= */
/* COLORES DE LOS TULIPANES */
/* ========================================= */

const flowerColors = [

    // Rosados
    "#ff5f8f",
    "#ff85a8",
    "#f7a1bd",
    "#e83e8c",

    // Rojos
    "#e63946",
    "#ff4d5a",
    "#c92f45",

    // Naranjas
    "#ff8c42",
    "#f4a261",
    "#ffad5c",

    // Amarillos
    "#ffd166",
    "#ffe066",
    "#f9c74f",

    // Morados
    "#9b5de5",
    "#b76ee8",
    "#7b4bc4",

    // Lavanda
    "#c8a2e8",
    "#d8b4f8",
    "#b8a1e3",

    // Azules
    "#5b8def",
    "#70a1ff",
    "#6fa8dc",

    // Azul claro
    "#89cff0",
    "#a2d2ff",
    "#74c0e3",

    // Blancos / crema
    "#fff8f0",
    "#fff1dc",
    "#f8f4e8",

    // Durazno
    "#ffb38a",
    "#ffc09f",
    "#ff9f80",

    // Coral
    "#ff6f61",
    "#f77f7f",

    // Magenta
    "#d63384"
];


/* ========================================= */
/* RANDOM */
/* ========================================= */

function random(min, max) {

    return Math.random() *
        (max - min) +
        min;

}


/* ========================================= */
/* ENTRAR AL JARDÍN */
/* ========================================= */

enterButton.addEventListener(
    "click",
    function () {

        garden.style.display =
            "block";

        welcome.classList.add(
            "hide"
        );

        setTimeout(
            function () {

                welcome.style.display =
                    "none";

            },
            1200
        );

    }
);


/* ========================================= */
/* CREAR TULIPÁN */
/* ========================================= */

function createTulip(
    yPosition,
    sectionStart,
    forcedX = null
) {

    const tulip =
        document.createElement("div");

    tulip.classList.add(
        "tulip"
    );


    /* ================================= */
    /* PROFUNDIDAD */
    /* ================================= */

    const positionInSection =
        yPosition -
        sectionStart;

    const depth =
        Math.max(
            0,
            Math.min(
                positionInSection / 1200,
                1
            )
        );


    let scale =
        0.62 +
        depth * 0.55;

    scale +=
        random(
            -0.08,
            0.12
        );


    scale =
        Math.max(
            0.52,
            Math.min(
                scale,
                1.25
            )
        );


    /* ================================= */
    /* POSICIÓN X */
    /* ================================= */

    let x;

    if (forcedX !== null) {

        x = forcedX;

    } else {

        x =
            random(
                -2,
                96
            );

    }


    tulip.style.left =
        x + "%";

    tulip.style.top =
        yPosition + "px";


    /* ================================= */
    /* ESCALA */
    /* ================================= */

    tulip.style.scale =
        scale;


    /* ================================= */
    /* CAPA */
    /* ================================= */

    const depthLayer =
        Math.floor(
            yPosition
        );

    tulip.style.setProperty(
        "--depth",
        depthLayer
    );


    /* ================================= */
    /* MOVIMIENTO */
    /* ================================= */

    tulip.style.setProperty(
        "--wind-speed",
        random(
            2.5,
            5
        ) + "s"
    );

    tulip.style.animationDelay =
        random(
            -4,
            0
        ) + "s";


    /* ================================= */
    /* COLOR */
    /* ================================= */

    const flowerColor =
        flowerColors[
            Math.floor(
                Math.random() *
                flowerColors.length
            )
        ];

    tulip.style.setProperty(
        "--flower-color",
        flowerColor
    );


    /* ================================= */
    /* SOMBRA */
    /* ================================= */

    const shadow =
        document.createElement(
            "div"
        );

    shadow.classList.add(
        "tulip-shadow"
    );


    /* ================================= */
    /* TALLO */
    /* ================================= */

    const stem =
        document.createElement(
            "div"
        );

    stem.classList.add(
        "stem"
    );


    /* ================================= */
    /* HOJAS */
    /* ================================= */

    const leafLeft =
        document.createElement(
            "div"
        );

    leafLeft.classList.add(
        "leaf",
        "leaf-left"
    );


    const leafRight =
        document.createElement(
            "div"
        );

    leafRight.classList.add(
        "leaf",
        "leaf-right"
    );


    /* ================================= */
    /* CABEZA */
    /* ================================= */

    const head =
        document.createElement(
            "div"
        );

    head.classList.add(
        "tulip-head"
    );


    /* ================================= */
    /* PÉTALOS DEL TULIPÁN */
    /* ================================= */

    const backLeft =
        document.createElement(
            "div"
        );

    backLeft.classList.add(
        "petal",
        "petal-back-left"
    );


    const backRight =
        document.createElement(
            "div"
        );

    backRight.classList.add(
        "petal",
        "petal-back-right"
    );


    const frontLeft =
        document.createElement(
            "div"
        );

    frontLeft.classList.add(
        "petal",
        "petal-front-left"
    );


    const frontRight =
        document.createElement(
            "div"
        );

    frontRight.classList.add(
        "petal",
        "petal-front-right"
    );


    const center =
        document.createElement(
            "div"
        );

    center.classList.add(
        "petal",
        "petal-center"
    );


    /* ================================= */
    /* ARMAR CABEZA */
    /* ================================= */

    head.appendChild(
        backLeft
    );

    head.appendChild(
        backRight
    );

    head.appendChild(
        frontLeft
    );

    head.appendChild(
        frontRight
    );

    head.appendChild(
        center
    );


    /* ================================= */
    /* ARMAR TULIPÁN */
    /* ================================= */

    tulip.appendChild(
        shadow
    );

    tulip.appendChild(
        stem
    );

    tulip.appendChild(
        leafLeft
    );

    tulip.appendChild(
        leafRight
    );

    tulip.appendChild(
        head
    );


    /* ================================= */
    /* TULIPÁN ESPECIAL */
    /* ================================= */

    const specialChance =
        Math.random();

    if (
        specialChance <
        0.065
    ) {

        tulip.classList.add(
            "special"
        );


        tulip.addEventListener(
            "click",
            function () {

                /* Ya fue descubierto */

                if (
                    tulip.classList.contains(
                        "opened"
                    )
                ) {

                    return;

                }


                tulip.classList.add(
                    "opened"
                );

                tulip.classList.remove(
                    "special"
                );


                const message =
                    messages[
                        Math.floor(
                            Math.random() *
                            messages.length
                        )
                    ];


                specialMessage.textContent =
                    message;


                messagePopup.style.display =
                    "flex";

            }
        );

    }


    /* ================================= */
    /* AÑADIR AL CAMPO */
    /* ================================= */

    flowerContainer.appendChild(
        tulip
    );

}


/* ========================================= */
/* CREAR SECCIÓN DE FLORES */
/* ========================================= */

function createFlowerSection(
    startingY
) {

    const sectionHeight =
        1200;


    const rows =
        window.innerWidth <= 600
            ? 8
            : 9;


    const flowersPerRow =
        window.innerWidth <= 600
            ? 10
            : 14;


    const rowHeight =
        sectionHeight /
        rows;


    for (
        let row = 0;
        row < rows;
        row++
    ) {

        const rowStart =
            startingY +
            row * rowHeight;


        for (
            let i = 0;
            i < flowersPerRow;
            i++
        ) {

            const columnWidth =
                100 /
                flowersPerRow;


            const baseX =
                i *
                columnWidth;


            let x =
                baseX +
                random(
                    -columnWidth * 0.35,
                    columnWidth * 0.35
                );


            x =
                Math.max(
                    -3,
                    Math.min(
                        x,
                        97
                    )
                );


            const y =
                rowStart +
                random(
                    10,
                    rowHeight - 30
                );


            createTulip(
                y,
                startingY,
                x
            );

        }

    }


    /* ================================= */
    /* FLORES EXTRA */
    /* ================================= */

    const extraFlowers =
        window.innerWidth <= 600
            ? 18
            : 30;


    for (
        let i = 0;
        i < extraFlowers;
        i++
    ) {

        const y =
            startingY +
            random(
                20,
                sectionHeight - 80
            );


        createTulip(
            y,
            startingY
        );

    }


    /* ================================= */
    /* ACTUALIZAR ALTURA */
    /* ================================= */

    const newHeight =
        startingY +
        sectionHeight;


    const currentHeight =
        parseFloat(
            flowerContainer.style.height
        ) || 0;


    if (
        newHeight >
        currentHeight
    ) {

        flowerContainer.style.height =
            newHeight + "px";

        field.style.height =
            newHeight + "px";

    }

}


/* ========================================= */
/* JARDÍN INICIAL */
/* ========================================= */

createFlowerSection(
    0
);

createFlowerSection(
    1050
);

createFlowerSection(
    2100
);


/* ========================================= */
/* JARDÍN INFINITO */
/* ========================================= */

let nextSection =
    3150;

let loadingFlowers =
    false;


function checkGardenLength() {

    if (
        garden.style.display ===
        "none"
    ) {

        return;

    }


    const scrollPosition =
        window.scrollY +
        window.innerHeight;


    const pageHeight =
        document.documentElement
            .scrollHeight;


    if (
        scrollPosition >
        pageHeight - 2200
        &&
        !loadingFlowers
    ) {

        loadingFlowers =
            true;


        createFlowerSection(
            nextSection
        );

        nextSection +=
            1050;


        createFlowerSection(
            nextSection
        );

        nextSection +=
            1050;


        setTimeout(
            function () {

                loadingFlowers =
                    false;

                checkGardenLength();

            },
            100
        );

    }

}


/* ========================================= */
/* DETECTAR SCROLL */
/* ========================================= */

window.addEventListener(
    "scroll",
    checkGardenLength,
    {
        passive: true
    }
);


/* ========================================= */
/* PARALLAX */
/* ========================================= */

const sky =
    document.querySelector(
        ".sky"
    );

let parallaxRunning =
    false;


window.addEventListener(
    "scroll",
    function () {

        if (
            parallaxRunning
        ) {

            return;

        }


        parallaxRunning =
            true;


        requestAnimationFrame(
            function () {

                const scroll =
                    window.scrollY;


                if (
                    scroll <
                    800
                ) {

                    sky.style.transform =
                        "translateY(" +
                        scroll * 0.12 +
                        "px)";

                }


                parallaxRunning =
                    false;

            }
        );

    },
    {
        passive: true
    }
);


/* ========================================= */
/* CERRAR MENSAJE */
/* ========================================= */

closeMessage.addEventListener(
    "click",
    function () {

        messagePopup.style.display =
            "none";

    }
);


/* ========================================= */
/* CERRAR TOCANDO AFUERA */
/* ========================================= */

messagePopup.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            messagePopup
        ) {

            messagePopup.style.display =
                "none";

        }

    }
);


/* ========================================= */
/* ESC PARA CERRAR */
/* ========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key ===
            "Escape"
        ) {

            messagePopup.style.display =
                "none";

        }

    }
);


/* ========================================= */
/* PÉTALOS VOLANDO */
/* ========================================= */

function createFlyingPetal() {

    /*
        Los pétalos solamente aparecen
        después de entrar al jardín.
    */

    if (
        garden.style.display !==
        "block"
    ) {

        return;

    }


    const flyingPetal =
        document.createElement(
            "div"
        );


    flyingPetal.classList.add(
        "flying-petal"
    );


    /* ================================= */
    /* COLOR */
    /* ================================= */

    /*
        Usa exactamente la misma lista
        de colores de los tulipanes.
    */

    const petalColor =
        flowerColors[
            Math.floor(
                Math.random() *
                flowerColors.length
            )
        ];


    flyingPetal.style.setProperty(
        "--petal-color",
        petalColor
    );


    /* ================================= */
    /* ALTURA */
    /* ================================= */

    const startY =
        random(
            3,
            94
        );


    flyingPetal.style.setProperty(
        "--start-y",
        startY + "vh"
    );


    /* ================================= */
    /* VELOCIDAD */
    /* ================================= */

    const flySpeed =
        random(
            5.5,
            10
        );


    flyingPetal.style.setProperty(
        "--fly-speed",
        flySpeed + "s"
    );


    /* ================================= */
    /* TAMAÑO */
    /* ================================= */

    const petalSize =
        random(
            0.65,
            1.35
        );


    flyingPetal.style.setProperty(
        "--petal-size",
        petalSize
    );


    /* ================================= */
    /* DIRECCIÓN DEL MOVIMIENTO */
/* ================================= */

    /*
        Algunos pétalos suben y otros
        bajan un poquito mientras avanzan.
    */

    const waveDirection =
        Math.random() < 0.5
            ? 1
            : -1;


    flyingPetal.style.setProperty(
        "--wave-direction",
        waveDirection
    );


    /* ================================= */
    /* AÑADIR AL DOCUMENTO */
    /* ================================= */

    document.body.appendChild(
        flyingPetal
    );


    /* ================================= */
    /* ELIMINAR AL TERMINAR */
/* ================================= */

    flyingPetal.addEventListener(
        "animationend",
        function () {

            flyingPetal.remove();

        }
    );

}


/* ========================================= */
/* CREAR MUCHOS PÉTALOS */
/* ========================================= */

setInterval(
    function () {

        /*
            Normalmente crea un pétalo.
        */

        createFlyingPetal();


        /*
            Algunas veces crea un segundo
            pétalo para que el viento tenga
            pequeños grupos.
        */

        if (
            Math.random() <
            0.40
        ) {

            createFlyingPetal();

        }

    },
    220
);