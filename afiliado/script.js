document.getElementById("formAfiliado").addEventListener("submit", function(e) {
    e.preventDefault();

    const texto = `
NOVO AFILIADO

Nome: ${nome.value}
Idade: ${idade.value}
Email: ${email.value}
Senha: ${senha.value}
Instagram: ${instagram.value}
WhatsApp: ${whats.value}

Divulgação:
${mensagem.value}
    `;

    const link = "https://wa.me/5515996228860?text=" + encodeURIComponent(texto);
    window.open(link, "_blank");
});
