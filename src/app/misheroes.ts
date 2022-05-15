import { Heroe } from "./heroe";

export const HEROES: Heroe[]=[
    {
        nombre: "Aquaman",
        bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
        img: "assets/img/aquaman.png",
        aparicion: "1941-11-01",
        casa:"DC"
    },
    {
        nombre: "Batman",
        bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
        img: "assets/img/batman.png",
        aparicion: "1939-05-01",
        casa:"DC"
    },
    {
        nombre: "Daredevil",
        bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
        img: "assets/img/daredevil.png",
        aparicion: "1964-01-01",
        casa: "Marvel"
    },
    {
        nombre: "Hulk",
        bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
        img: "assets/img/hulk.png",
        aparicion: "1962-05-01",
        casa:"Marvel"
    },
    {
        nombre: "Linterna Verde",
        bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
        img: "assets/img/linterna-verde.png",
        aparicion: "1940-06-01",
        casa: "DC"
    },
    {
        nombre: "Spider-Man",
        bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
        img: "assets/img/spiderman.png",
        aparicion: "1962-08-01",
        casa: "Marvel"
    },
    {
        nombre: "Capitana Marvel",
        bio: "Como oficial de seguridad de la NASA, Carol investigó numerosos intentos realizados por los Kree y Skrulls para infiltrarse en el Centro Espacial Kennedy e interrumpir el programa espacial de Estados Unidos. Durante una batalla entre el heroico Mar-Vell y su rival, Yon-Rogg, Carol estuvo expuesta al Psyche-Magnitron, un dispositivo Kree que podría hacer realidad la imaginación. Carol inconscientemente envidió los poderes de Mar-Vell, y la máquina respondió a esos deseos reescribiendo su ADN para convertirla en un híbrido humano/Kree con habilidades similares a las suyas.",
        img: "assets/img/captainmarvel.jpg",
        aparicion: "1967-01-01",
        casa: "Marvel"
    },
    {
        nombre: "Catwoman",
        bio: "Selina Kyle, también conocida como Catwoman, es una ladrona de joyas de Gotham City y uno de los enemigos más conocidos de Batman. Representada como una huérfana que aprendió a sobrevivir en las calles de Gotham, Selina se dedicó al robo para sobrevivir... pero decidida a hacerlo con estilo, aprendió artes marciales y se entrenó mucho para perfeccionar sus habilidades en el robo gatuno.",
        img: "assets/img/catwoman.jpg",
        aparicion: "1940-06-01",
        casa: "DC"
    },
    {
        nombre: "Nightwing",
        bio: "Dick Grayson proviene de una familia conocida como Flying Grayson. Los Flying Grayson eran un acto de trapecio que se presentaba en el circo. Lamentablemente, debido al dinero impago, el jefe de la mafia local hizo que mataran a los padres de Dick. En este punto, Batman adopta a Dick y lo entrena como su compañero, Robin. Finalmente, Dick busca y encuentra a los responsables del asesinato de sus padres.",
        img: "assets/img/nightwing.jpg",
        aparicion: "1984-07-01",
        casa: "DC"
    },
    {
        nombre: "Capitan America",
        bio: "Steve Rogers nació durante la Depresión y creció, convirtiéndose en un joven débil en una familia pobre. Su padre murió cuando él era un niño; su madre, durante la adolescencia de Steve. Horrorizado ante un noticiario que mostraba a los nazis en Europa, Rogers intentó alistarse en el ejército. Rogers fue llevado a un laboratorio secreto en Washington D.C., donde fue presentado al Dr. Abraham Erskine (nombre clave: Profesor Reinstein), el creador de la fórmula del Supersoldado.",
        img: "assets/img/captainamerica.jpg",
        aparicion: "1941-03-01",
        casa: "Marvel"
    },
    {
        nombre: "Silver Surfer",
        bio: "Silver Surfer era originalmente Norrin Radd, un joven astrónomo del planeta Zenn-la, como parte de una raza humanoide con una esperanza de vida extremadamente alta y tecnológicamente avanzada, que había creado una sin delincuencia, enfermedades, hambre, pobreza y de falta de cualquier tipo. Norrin se planteó como un joven intelectual sombrío, que se animó a buscar el conocimiento, el progreso y los logros en lugar del hedonismo sin rumbo que había llegado a dominar la sociedad Zenn-Lavian. A pesar de su amante de toda la vida Shalla-Bal, Norrin se convirtió en un alma inquieta que anhelaba desafío y lucha.",
        img: "assets/img/silversurfer.jpg",
        aparicion: "1996-03-01",
        casa: "Marvel"
    },
    {
        nombre: "Mujer Maravilla",
        bio: "La Mujer Maravilla es la Princesa Diana de las amazonas. Tomó su nombre de la diosa de la caza. Fue formada en un principio por su madre en una figura de arcilla. Se le concedió vida por la súplica de su madre (Hipólita) a la diosa Afrodita. Concebida de este modo por gracia de una diosa, Diana creció siendo la más bella amazona de la Isla Paraíso, con la sabiduría de Atenea, tan fuerte como Hércules y más ágil y veloz que Hermes. Contrariando los deseos de su madre, con un disfraz logró escabullirse y ganar la competición para elegir la amazona más poderosa, la que debía partir de la Isla para auxiliar a los mortales en su lucha contra el nazismo.",
        img: "assets/img/wonderwoman.jpg",
        aparicion: "1941-12-01",
        casa: "DC"
    },
    {
        nombre: "Wolverine",
        bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
        img: "assets/img/wolverine.png",
        aparicion: "1974-11-01",
        casa: "Marvel"
    }
];