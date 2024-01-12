function submeterFormulario() {
    var inputNome = document.getElementById('inputNome');
    var inputEmail = document.getElementById('inputEmail');
    var inputTel = document.getElementById('inputTel');
    var inputAssunto = document.getElementById('inputAssunto');
    var inputMensagem = document.getElementById('inputMensagem');

    const url = "https://carneiro-inspecoes-api-43532fa58154.herokuapp.com/api/contato/enviar";
    const configuracao = {
        method: 'POST', // Método HTTP
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'assunto': inputAssunto.value,
            'email': inputEmail.value,
            'mensagem': inputMensagem.value,
            'nome': inputNome.value,
            'telefone': inputTel.value
        }) // Converte o objeto em uma string JSON
    };
    
    if(validaCampos(inputNome.value, inputEmail.value, inputTel.value, inputAssunto.value, inputMensagem.value)) {
        fetch(url, configuracao)
        .then(() => exibeToastSucesso())
        .catch((error) => console.log(error))
    }
}

function validaCampos(inputNome, inputEmail, inputTel, inputAssunto, inputMensagem) {
    const campos = [
        { campo: 'Nome', valor: inputNome },
        { campo: 'Telefone', valor: inputTel },
        { campo: 'Email', valor: inputEmail },
        { campo: 'Assunto', valor: inputAssunto },
        { campo: 'Mensagem', valor: inputMensagem }
    ];

    for (const campo of campos) {
        if (!campo.valor || campo.valor.trim() === '') {
            exibeToasCampoVazio(`Gentileza informar o ${campo.campo}`);
            return false;
        }
    }

    return true;
}

function exibeToasCampoVazio( mensagem ) {
    Toastify({
        text: mensagem,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#ff0000",
        },
        onClick: function(){}
      }).showToast();
}
function exibeToastSucesso() {
    Toastify({
        text: "Dados enviados. Em breve, entraremos em contato com você.",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#00cc00",
        },
        onClick: function(){}
      }).showToast();
}

document.addEventListener('DOMContentLoaded', function () {
    var telefoneInput = document.getElementById('inputTel');
    var emailInput = document.getElementById('inputEmail');
    var im = new Inputmask('(99) 9999-9999');
    var em = new Inputmask({ alias: 'email' })
    im.mask(telefoneInput);
    em.mask(emailInput);
});
