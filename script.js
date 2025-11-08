document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("tombol__for_hp");
    const mobileMenu = document.querySelector(".for_hp");
    if (!menuBtn || !mobileMenu) return;
    const icon = menuBtn.querySelector("i");

    menuBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const isOpen = mobileMenu.style.display === "flex";
        if (isOpen) {
            mobileMenu.style.display = "none";
            if (icon) {
                icon.classList.remove("bx-x");
                icon.classList.add("bx-menu");
            }
        } else {
            mobileMenu.style.display = "flex";
            if (icon) {
                icon.classList.remove("bx-menu");
                icon.classList.add("bx-x");
            }
        }
    });

    mobileMenu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            mobileMenu.style.display = "none";
            if (icon) {
                icon.classList.remove("bx-x");
                icon.classList.add("bx-menu");
            }
        });
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            mobileMenu.style.display = "none";
            if (icon) {
                icon.classList.remove("bx-x");
                icon.classList.add("bx-menu");
            }
        }
    });

    document.addEventListener("click", function (e) {
        if (window.innerWidth <= 768) {
            if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
                mobileMenu.style.display = "none";
                if (icon) {
                    icon.classList.remove("bx-x");
                    icon.classList.add("bx-menu");
                }
            }
        }
    });
});