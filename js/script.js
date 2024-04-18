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
        event.preventDefault();
        event.stopPropagation();
        // Cria uma nova div para a caixa de diálogo
        var dialog = document.createElement("div");
        dialog.style.width = "300px";
        dialog.style.height = "200px";
        dialog.style.position = "fixed";
        dialog.style.top = "50%";
        dialog.style.left = "50%";
        dialog.style.marginTop = "-100px";
        dialog.style.marginLeft = "-150px";
        dialog.style.backgroundColor = "rgba(255, 255, 255, 0.8)"; // Adiciona transparência
        dialog.style.padding = "20px";
        dialog.style.boxShadow = "0px 0px 150px 3px rgba(0, 0, 0, 0.75)";
        dialog.style.textAlign = "center"; // Alinha o texto ao centro
        dialog.innerHTML = "<strong>Formulário enviado com sucesso!</strong>"; // Texto em negrito
        
        // Cria um novo botão
        var btn = document.createElement("button");
        btn.innerHTML = "Gabarito";
        btn.style.backgroundColor = "green"; // Adiciona fundo verde
        btn.style.color = "white"; // Adiciona cor de texto branca
        btn.style.border = "none"; // Remove a borda
        btn.style.padding = "10px 20px"; // Adiciona padding
        btn.style.marginTop = "50px"; // Adiciona margem superior
        btn.onclick = function () {
            window.location.href = './pages/gabarito.html';
        };
        
        // Adiciona o botão à caixa de diálogo
        dialog.appendChild(btn);
        
        // Adiciona a caixa de diálogo ao corpo do documento
        document.body.appendChild(dialog);
    }
    form.classList.add('was-validated');
}, false);

