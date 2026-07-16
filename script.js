document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeMenu = document.querySelector(".close-menu");
    const overlay = document.querySelector(".menu-overlay");

    if (!menuToggle || !mobileMenu) return;

    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.add("active");
        overlay?.classList.add("active");
    });

    function closeMobileMenu() {
        mobileMenu.classList.remove("active");
        overlay?.classList.remove("active");
    }

    closeMenu?.addEventListener("click", closeMobileMenu);
    overlay?.addEventListener("click", closeMobileMenu);

});

      const blogCards = document.querySelectorAll('.blog-card');

const blogObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add('show');

        }

    });

},{
    threshold: 0.15
});

blogCards.forEach(card => {

    blogObserver.observe(card);

});

 

/* ==========================
   SCROLL REVEAL
========================== */

const revealItems = document.querySelectorAll('.reveal');

if (revealItems.length) {

    const revealObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('active');

            }

        });

    }, {
        threshold: 0.15
    });

    revealItems.forEach(item => {
        revealObserver.observe(item);
    });

}


/* ==========================
   PRINCIPLES TABS
========================== */

const principleTabs =
    document.querySelectorAll('.tab-btn');

const principleContents =
    document.querySelectorAll('.tab-content');

principleTabs.forEach(tab => {

    tab.addEventListener('click', () => {

        principleTabs.forEach(btn =>
            btn.classList.remove('active')
        );

        principleContents.forEach(content =>
            content.classList.remove('active')
        );

        tab.classList.add('active');

        const target =
            document.getElementById(tab.dataset.tab);

        if (target) {

            target.classList.add('active');

        }

    });

});

/* ==========================
   CASE STUDY TABS
========================== */

const caseTabs =
    document.querySelectorAll('.case-tab');

const caseContents =
    document.querySelectorAll('.case-content');

caseTabs.forEach(tab => {

    tab.addEventListener('click', () => {

        caseTabs.forEach(btn =>
            btn.classList.remove('active')
        );

        caseContents.forEach(content =>
            content.classList.remove('active')
        );

        tab.classList.add('active');

        const target =
            document.getElementById(tab.dataset.tab);

        if (target) {

            target.classList.add('active');

        }

    });

});

/* ==========================
   FADE SECTIONS
========================== */

const fadeSections =
    document.querySelectorAll('.fade-section');

if (fadeSections.length) {

    const fadeObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('show');

            }

        });

    }, {
        threshold: 0.2
    });

    fadeSections.forEach(section => {

        fadeObserver.observe(section);

    });

}

/* ==========================
   FAQ ACCORDION
========================== */

document.querySelectorAll('.faq-question')
.forEach(question => {

    question.addEventListener('click', () => {

        const currentItem =
            question.parentElement;

        document
            .querySelectorAll('.faq-item')
            .forEach(item => {

                if (item !== currentItem) {

                    item.classList.remove('active');

                }

            });

        currentItem.classList.toggle('active');

    });

});

/* ==========================
   COUNTER ANIMATION
========================== */


const statsBox = document.querySelector('.stats-box');
const counters = document.querySelectorAll('.counter');

let counted = false;

function startCounters() {

    counters.forEach(counter => {

        const target =
            parseInt(counter.dataset.target);

        let current = 0;

        const increment =
            target / 120;

        const updateCounter = () => {

            current += increment;

            if(current < target){

                counter.textContent =
                    Math.floor(current).toLocaleString();

                requestAnimationFrame(updateCounter);

            }else{

                counter.textContent =
                    target.toLocaleString() + '+';

            }

        };

        updateCounter();

    });

}

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting && !counted){

            counted = true;

            startCounters();

        }

    });

},{
    threshold: 0.05
});

if(statsBox){
    observer.observe(statsBox);
}

