/* =========================
   MOBILE NAVIGATION
========================= */

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", String(isOpen));

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );
});

nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
    });
});


/* =========================
   ENGLISH / NEPALI LANGUAGE
========================= */

let language = "en";

const languageToggle = document.getElementById("languageToggle");

languageToggle.addEventListener("click", () => {
    language = language === "en" ? "ne" : "en";

    document.documentElement.lang = language;

    document.querySelectorAll("[data-en][data-ne]").forEach((element) => {
        element.innerHTML = element.dataset[language];
    });

    languageToggle.textContent =
        language === "en" ? "नेपाली" : "English";

    languageToggle.setAttribute(
        "aria-label",
        language === "en" ? "Switch to Nepali" : "Switch to English"
    );
});


/* =========================
   DYNAMIC COPYRIGHT YEAR
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================
   CONTACT FORM
========================= */

/* =========================
   CONTACT FORM → WHATSAPP
========================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!contactForm.reportValidity()) {
        return;
    }

    const formData = new FormData(contactForm);

    const name = formData.get("name");
    const email = formData.get("email");
    const interest = formData.get("interest");
    const message = formData.get("message");

    // New Kantipur Plotting & Housing WhatsApp number
    // Country code सहित, + वा space नराख्ने
    const whatsappNumber = "9779855031526";

    // Customer inquiry message
    const whatsappMessage =
`🏡 NEW PROPERTY INQUIRY
New Kantipur Plotting & Housing Pvt. Ltd.

👤 Customer Name: ${name}
📞 Email / Phone: ${email}
🏠 Interested In: ${interest}

💬 Message:
${message};

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp with the prepared inquiry
    window.open(whatsappURL, "_blank", "noopener,noreferrer");
});