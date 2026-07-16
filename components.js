async function loadComponent(id, file) {

    try {

        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(`Failed to load ${file}`);
        }

        const html = await response.text();

        document.getElementById(id).innerHTML = html;

    } catch (error) {

        console.error(error);

    }

}

async function initializeWebsite() {

    await loadComponent("header-container", "header.html");
    await loadComponent("footer-container", "footer.html");

    initializeMenu();

}

function initializeMenu() {

    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeMenu = document.querySelector(".close-menu");
    const overlay = document.querySelector(".menu-overlay");
    const dropdownBtn = document.querySelector(".mobile-dropdown-btn");
    const submenu = document.querySelector(".mobile-submenu");

    if (!menuToggle || !mobileMenu) return;

    // Open Menu
    menuToggle.addEventListener("click", () => {

        mobileMenu.classList.add("active");

        if (overlay) {
            overlay.classList.add("active");
        }

        document.body.style.overflow = "hidden";

    });

    // Close Menu
    function closeMobileMenu() {

        mobileMenu.classList.remove("active");

        if (overlay) {
            overlay.classList.remove("active");
        }

        document.body.style.overflow = "";

    }

    if (closeMenu) {
        closeMenu.addEventListener("click", closeMobileMenu);
    }

    if (overlay) {
        overlay.addEventListener("click", closeMobileMenu);
    }

    // Close when clicking links
    document.querySelectorAll(".mobile-menu a").forEach(link => {

        link.addEventListener("click", closeMobileMenu);

    });

    // Mobile Dropdown
    if (dropdownBtn && submenu) {

        dropdownBtn.addEventListener("click", () => {

            submenu.classList.toggle("active");

            dropdownBtn.classList.toggle("active");

        });

    }

}

document.addEventListener("DOMContentLoaded", initializeWebsite);