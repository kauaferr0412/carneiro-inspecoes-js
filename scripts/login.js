function abrirToastLogin() {
    Toastify({
        text: "Olá, esta funcionalidade não está disponível no momento, mas estamos trabalhando e uma nova versão do sistema. Logo ficará pronta! Obrigado pela paciência.",
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