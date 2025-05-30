document.addEventListener("DOMContentLoaded", function () {

    let levenswaarde = 50; // Start getal (waarde) voor de levenswaarde
    let gekozenHond = "";

    const levensBalk = document.getElementById("levensmeter"); // Html element <progress> 
    const feedback = document.querySelector(".feedback"); // Deze tekst laat zien hoe de hond zich voelt
    const uitlatenButton = document.querySelector(".uitlatenButton");
    const alleButtons = document.querySelectorAll("button");

    // Koppelingen naar de knoppen om een hond te kiezen
    const cheddarButton = document.getElementById("CheddarButton");
    const wolfButton = document.getElementById("WolfButton");
    const sissyButton = document.getElementById("SissyButton");

    // Elementen van het scherm waar je je hond verzorgt 
    const kiesHondScherm = document.getElementById("KiesHond");
    const keuzeScherm = document.getElementById("keuzeScherm");
    const hondFoto = document.getElementById("hondFoto");
    const verzorgTitel = keuzeScherm.querySelector("h2");

    // Zorgt dat je teruggaat naar het keuzescherm
    const terugButton = document.getElementById("terugButton"); // Deze regel zoekt een HTML-element met het id 'terugButton'.
    terugButton.addEventListener("click", function () {
        keuzeScherm.classList.add("hidden");
        kiesHondScherm.classList.remove("hidden");
    });

    // Zorgknoppen voor de honden 
    // De document verwijst naar de hele html-pagina. Met de querySelector zoek je het eerste html-elemnt dat de klasse voer button heeft. En bij 'const voerButton =' wordt de gevonden knop opgeslagen in de variabele voerButton zodat je er later iets mee kan doen (bijv klikfunctie toevoegen)
    const voerButton = document.querySelector(".voerButton");
    const wassenButton = document.querySelector(".wassenButton");
    const waterGevenButton = document.querySelector(".waterGevenButton");

    // De geluiden voor de honden en buttons
    // Chatgpt
    // Prompt: 'Hoe kan ik geluiden toevoegen aan mijn game dat wanneer ik op bijvoorbeeld 'voeren' klik het bijhorende geluid afspeelt?
    // Bron geluiden: https://pixabay.com/nl/sound-effects/search/blaffen/
    const geluidKlik = new Audio("audio/clickSound.mp3");
    const geluidCheddar = new Audio("audio/blafCheddar.mp3");
    const geluidWolf = new Audio("audio/blafWolf.mp3");
    const geluidSissy = new Audio("audio/blafSissy.mp3");
    const geluidWater = new Audio("audio/waterbak_vullen.mp3");
    const geluidWassen = new Audio("audio/wassen_sound.mp3");
    const geluidVoer = new Audio("audio/dog_eating.mp3");

    function updateLevensmeter(toevoeging) {
        // Houdt de waarde tussen 0 en 100, de levenswaarde + toevoeging telt de nieuwe hoeveelheid bij de levensmeter op. De Math.max(..,0) zorgt erover dat het resultaat nooit lager wordt dan 0. Math.min(...,100) Zorgt erover dat het resultaat nooit hoger wordt dan 100. Dus eigenlijk wordt de 'toevoeging' bij de levenswaarde, maar zorg dat de levenswaarde altijd tussen de 0 en 100 blijft.
        levenswaarde = Math.min(Math.max(levenswaarde + toevoeging, 0), 100);
        levensBalk.value = levenswaarde;

        // Wanneer de hond zich slecht voelt krijg je de onderstaand feedback in het rood. De if is een voorwaarde (is iets waar?). De levenswaarde is een variabele die een getal bevat (0-100) En de <=60 betekend minder of gelijk aan 60. Dus als de levenswaarde onder de 60 is, is het waar en wordt de code binnen het blok {  } uitgevoerd (en anders overgeslagen).
        if (levenswaarde <= 60) {
            feedback.textContent = "Je hondje voelt zich slecht...";
            feedback.style.color = "red";

            if (gekozenHond === "Cheddar") {
                hondFoto.src = "img/cheddar_verdrietig.png";

            } else if (gekozenHond === "Wolf") {
                hondFoto.src = "img/wolf_verdrietig.png";

            } else if (gekozenHond === "Sissy") {
                hondFoto.src = "img/sissy_verdrietig.png";
            }

            // Wanneer de hond zich goed voelt komt de textContent in beeld
        } else {
            feedback.textContent = "Je hondje voelt zich heel goed!";
            feedback.style.color = "green";

            // Zet de afbeelding weer terug naar normaal als de hond zich goed voelt. De 'hondFoto' is een variabele en pakt het html-element met het id 'hondFoto'. 
            if (gekozenHond === "Cheddar") {
                hondFoto.src = "img/goldenretriever.png";

            } else if (gekozenHond === "Wolf") {
                hondFoto.src = "img/fotoHond2.png";

            } else if (gekozenHond === "Sissy") {
                hondFoto.src = "img/fotoHond3.png";
            }
        }

    }

    function voer() {
        geluidVoer.play();
        feedback.textContent = "Je hebt je hondje eten gegeven!🍗🐶";

        // Speelt het geluid af en geeft dan de feedback text weer
        // === is precies gelijk aan, zowel als in waarde en type
        if (gekozenHond === "Cheddar") {
            hondFoto.src = "img/cheddar_food.png";
            setTimeout(() => hondFoto.src = "img/goldenretriever.png", 4000);
        } else if (gekozenHond === "Wolf") {
            hondFoto.src = "img/wolf_eating.png";
            setTimeout(() => hondFoto.src = "img/fotoHond2.png", 4000);
        } else if (gekozenHond === "Sissy") {
            hondFoto.src = "img/sissy_food.png";

        }
        // Laat een tijdelijke afbeelding zien en na 4 sec veranderd de afbeelding weer
        setTimeout(() => {
            updateLevensmeter(10);
        }, 4000);
    }

    function wassen() {
        geluidWassen.play();
        feedback.textContent = "Je hebt je hond gewassen🫧🧼";
        if (gekozenHond === "Cheddar") {
            hondFoto.src = "img/cheddar_wassen.png";
            setTimeout(() => hondFoto.src = "img/goldenretriever.png", 4000);
        } else if (gekozenHond === "Wolf") {
            hondFoto.src = "img/wolf_wassen.png";
            setTimeout(() => hondFoto.src = "img/fotoHond2.png", 4000);
        } else if (gekozenHond === "Sissy") {
            hondFoto.src = "img/sissy_wassen.png";
        }

        // Laat een tijdelijke afbeelding zien en na 4 sec veranderd de afbeelding weer 
        setTimeout(() => {
            updateLevensmeter(25);
        }, 4000);
    }

    function water() {
        geluidWater.play();
        feedback.textContent = "Je hebt je hondje water gegeven👍🏻";
        if (gekozenHond === "Cheddar") {
            hondFoto.src = "img/cheddar_water.png";
            setTimeout(() => hondFoto.src = "img/goldenretriever.png", 4000);
        } else if (gekozenHond === "Wolf") {
            hondFoto.src = "img/wolf_water.png";
            setTimeout(() => hondFoto.src = "img/fotoHond2.png", 4000);
        } else if (gekozenHond === "Sissy") {
            hondFoto.src = "img/sissy_water.png";
        }

        // Laat een tijdelijke afbeelding zien en na 4 sec veranderd de afbeelding weer
        // chatgpt
        // Prompt: 'Hoe kan ik ervoor zorgen dat na een aantal secondes de levenmeter omhoog gaat wanneer ik op een function zoals wassen bijvoorbeeld heb geklikt?'
        setTimeout(() => {
            updateLevensmeter(20);
        }, 4000);
    }

    function uitlaten() {
        // Toont de feedback wanneer er op de button geklikt is
        feedback.textContent = "Je bent aan het wandelen met je hond!🚶🏼‍♀️🦮";
        // Veranderd afbeelding wat afhankelijk is van de gekozen hond (dus wanneer je op cheddar klikt, komt de bijhorende afbeelding in beeld)
        if (gekozenHond === "Cheddar") {
            hondFoto.src = "img/cheddar_wandelen.png";
        } else if (gekozenHond === "Wolf") {
            hondFoto.src = "img/wolf_wandelen.png";
        } else if (gekozenHond === "Sissy") {
            hondFoto.src = "img/sissy_wandelen.png";
        }

        // Laat een tijdelijke afbeelding zien en na 4 sec veranderd de afbeelding weer
        setTimeout(() => {
            updateLevensmeter(30);
        }, 4000);
    }

    // Voor alle buttons geldt, als er op de knop wordt geklikt voer dan de functie uit die daar staat (dus een klik geluid afspelen).
    alleButtons.forEach(button => {
        button.addEventListener("click", () => {
            geluidKlik.play();
        });
    });

    function cheddar() {
        gekozenHond = "Cheddar";
        levenswaarde = 0;
        updateLevensmeter(0);
        kiesHondScherm.classList.add("hidden");
        keuzeScherm.classList.remove("hidden");
        hondFoto.src = "img/goldenretriever.png";
        verzorgTitel.textContent = "Verzorg Cheddar";
        geluidCheddar.play();
        updateLevensmeter(levenswaarde);
    }

    function wolf() {
        gekozenHond = "Wolf";
        levenswaarde = 0;
        updateLevensmeter(0);
        kiesHondScherm.classList.add("hidden");
        keuzeScherm.classList.remove("hidden");
        hondFoto.src = "img/fotoHond2.png";
        verzorgTitel.textContent = "Verzorg Wolf";
        geluidWolf.play();
        updateLevensmeter(levenswaarde);
    }

    function sissy() {
        gekozenHond = "Sissy";
        levenswaarde = 0;
        updateLevensmeter(0);
        kiesHondScherm.classList.add("hidden");
        keuzeScherm.classList.remove("hidden");
        hondFoto.src = "img/fotoHond3.png";
        verzorgTitel.textContent = "Verzorg Sissy";
        geluidSissy.play();
        updateLevensmeter(levenswaarde);

    }
    //Deze codes zorgen ervoor dat er iets gebeurt wanneer je op 'wassen' klikt
    wassenButton.addEventListener("click", wassen);
    voerButton.addEventListener("click", voer);
    waterGevenButton.addEventListener("click", water);
    uitlatenButton.addEventListener("click", uitlaten);
    cheddarButton.addEventListener("click", cheddar);
    wolfButton.addEventListener("click", wolf);
    sissyButton.addEventListener("click", sissy);
});
