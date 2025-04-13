// start of scroll to section --->

    function initScrollLinks() {
        const links = document.querySelectorAll(".scroll-link"); 
        for (const link of links) { 
            link.addEventListener("click", function(event) { 
                event.preventDefault(); 
                const targetId = this.getAttribute("href").substring(1); 
                const targetElement = document.getElementById(targetId); 
                const headerOffset = 80; // Ajustează aceasta în funcție de înălțimea header-ului 
                const elementPosition = targetElement.getBoundingClientRect().top; 
                const offsetPosition = elementPosition + window.scrollY - headerOffset; 
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
