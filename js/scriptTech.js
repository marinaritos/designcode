// start of scroll to section --->

 const headerOffset = window.innerWidth <= 360 ? 222 : 80;

function initScrollLinks() {
    const links = document.querySelectorAll(".scroll-link");

    for (const link of links) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (!targetElement) return;

            // Detectăm Firefox
const isFirefox = navigator.userAgent.toLowerCase().includes("firefox") || 'MozAppearance' in document.documentElement.style;
            // Calculăm headerHeight dinamic
            const header = document.querySelector("header");
            const headerHeight = header ? header.offsetHeight : 80;

            // Ajustare suplimentară doar pentru Firefox
            const firefoxAdjustment = isFirefox ? 24 : 0;

            // Calcul corect al poziției de scroll
            let offsetPosition = targetElement.offsetTop - headerHeight + firefoxAdjustment;

            // Evităm scroll-ul negativ
            offsetPosition = Math.max(offsetPosition, 0);

            console.log("Header Height:", headerHeight);
            console.log("Target Position:", targetElement.offsetTop);
            console.log("Firefox Adjustment:", firefoxAdjustment);
            console.log("Final Scroll Position:", offsetPosition);

            // Executăm scroll-ul lin
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    }
}
    // Apelarea funcției
    initScrollLinks();

// end of scroll to section ---<

// Testăm dacă link-urile înregistrează click-ul
document.querySelectorAll(".scroll-link").forEach(link => {
    link.addEventListener("click", () => console.log("Click detected on", link));
});



// start of card image zoom and close --->

function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}



// ca sa arate heroPicTextLeftHeader pe ecrane mai mici <360 - activăm clasa .show - altfel nu arata elementul fara script - dat fiind ca am folosit display: none;
// document.addEventListener("DOMContentLoaded", function () {
//     const element = document.querySelector(".heroPicTextLeftHeader");
//     if (window.innerWidth <= 360) {
//         element.classList.add("show");
//     }
// });


// --- experiment start >>>

// function openModal(id) {
//     document.getElementById(id).style.display = "block";
// }

// function closeModal(id) {
//     document.getElementById(id).style.display = "none";
// }

// window.onclick = function(event) {
//     const modals = document.getElementsByClassName('modal');
//     for (let i = 0; i < modals.length; i++) {
//         if (event.target == modals[i]) {
//             modals[i].style.display = "none";
//         }
//     }
// }
