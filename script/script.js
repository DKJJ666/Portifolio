let header = document.querySelector("header");
let mIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});

if (mIcon) {
    mIcon.addEventListener('click', () => {
        navBar.classList.toggle("active");
        mIcon.classList.toggle("show-links");
    });
}

const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navBar.classList.remove('active');
        mIcon.classList.remove('show-links');
    });
});

let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
    if (darkmode.classList.contains("bx-moon")) {
        darkmode.classList.replace("bx-moon", "bx-sun");
        document.body.classList.add("active");
    } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
    }
};

// Typewriter effect
const typewriterElement = document.getElementById('typewriter');
const text = 'Portfólio';
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typewriterElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 200); // Velocidade da digitação
    } else {
        typewriterElement.classList.add('done');
        setTimeout(() => {
            typewriterElement.classList.remove('done');
            typewriterElement.innerHTML = '';
            index = 0;
            setTimeout(typeWriter, 1000); // Pausa antes do novo loop
        }, 1500); // Tempo exibido o texto completo
    }
}

// Iniciar a animação quando a página carregar
window.addEventListener('load', typeWriter);

// Enviar email usando mailto
const sendEmailButton = document.getElementById('send-email');

if (sendEmailButton) {
    sendEmailButton.addEventListener('click', () => {
        const name = document.getElementById('contact-name').value.trim();
        const email = document.getElementById('contact-email').value.trim();
        const message = document.getElementById('contact-message').value.trim();

        if (!name || !email || !message) {
            alert('Por favor preencha todos os campos antes de enviar.');
            return;
        }

        const subject = encodeURIComponent(`Contato do portfólio - ${name}`);
        const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`);
        const mailTo = `mailto:igor.acaraujo666@gmail.com?subject=${subject}&body=${body}`;

        window.location.href = mailTo;
    });
}
