// Valida o formulario e nao deixa enviar caso falte algo
document.querySelector("form").addEventListener("submit", function (event) {
    var form = this;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }
    form.classList.add('was-validated');
}, false);
// Apresenta uma mensagem de sucesso ou falha após apertar o botão enviar
document.querySelector("form").addEventListener("submit", function (event) {
    var form = this;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        alert("Por favor, preencha todos os campos corretamente.");
    } else {
        alert("Formulário enviado com sucesso!");
    }
    form.classList.add('was-validated');
}, false);