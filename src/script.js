function afiseazaVarsta() {
    const anulNasterii = 2006; 
    const dataCurenta = new Date();
    const varsta = dataCurenta.getFullYear() - anulNasterii;
    const elementAn = document.getElementById("an-nastere");
    elementAn.textContent = `Vârsta: ${varsta} ani`;
}

function valideazaEmail() {
    const email = document.getElementById("email").value;
    const mesajEroare = document.getElementById("email-eroare");
    if (email.includes("@")) {
        mesajEroare.style.display = "none";
    } else {
        mesajEroare.style.display = "block";
    }
}

document.getElementById('infrumuseteaza').addEventListener('click', function() {

    document.body.style.background = 'linear-gradient(to right, #1a1a2e, #16213e, #0f3460)';
    document.body.style.transition = 'background 1s ease';

    const h1 = document.querySelector('h1');
    h1.style.color = '#00f5d4';
    h1.style.textShadow = '2px 2px 10px rgba(0, 255, 255, 0.8)';
    h1.style.transition = 'color 0.5s ease, text-shadow 0.5s ease';


    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        section.style.border = '1px solid #00f5d4';
        section.style.boxShadow = '0 0 15px rgba(0, 255, 255, 0.2)';
        section.style.color = '#e0e0e0';
        section.style.transition = 'background-color 0.5s ease, color 0.5s ease, box-shadow 0.5s ease';
    });


    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        profileImage.style.border = '4px solid #00f5d4';
        profileImage.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.5)';
        profileImage.style.transition = 'border 0.5s ease, box-shadow 0.5s ease';
    }


    const lists = document.querySelectorAll('ul');
    lists.forEach(list => {
        list.style.color = '#a0e7e5';
        list.style.fontWeight = 'bold';
        list.style.paddingLeft = '20px';
        list.style.transition = 'color 0.5s ease';
    });
    const button = document.getElementById('infrumuseteaza');
    button.style.backgroundColor = '#0077b6';
    button.style.color = '#fff';
    button.style.border = '2px solid #00f5d4';
    button.style.boxShadow = '0 0 10px rgba(0, 255, 255, 0.6)';
    button.style.cursor = 'pointer';
    button.style.transition = 'background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease';


    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(p => {
        p.style.color = '#caf0f8';
        p.style.lineHeight = '1.75';
        p.style.transition = 'color 0.5s ease';
    });
});
