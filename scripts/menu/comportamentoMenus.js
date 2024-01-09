
const mobileAside = document.getElementById('mobile-aside-menu');
const desktopHeader = document.getElementById('header-desktop');
const mobileWidthThreshold = 768;

function isMobile() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    // Retorna true se a largura da tela for menor que o limite, indicando um dispositivo móvel
    return screenWidth < mobileWidthThreshold;

}

function intercalaMenuConformeDispositivo() {
    console.log('Intercalador: passou aqui')
    isMobile() ? exibeMenuMobile() : exibeMenuDesktop();
}

function exibeMenuDesktop() {
    desktopHeader.classList.remove('oculta-display');
    desktopHeader.classList.add('base-header');
}
function ocultaMenuDesktop() {
    desktopHeader.classList.add('oculta-display');
}

function exibeMenuMobile() {
    mobileAside.classList.remove('oculta-display');
    mobileAside.classList.add('mobile-aside-menu');
}

function ocultaMenuMobile() {
    mobileAside.classList.add('oculta-display');
}

function handleResize() {
    // Obtemos as dimensões atualizadas da janela
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    
    if(width <= mobileWidthThreshold) {
        ocultaMenuDesktop();
        exibeMenuMobile();
    }else if(width > mobileWidthThreshold) {
        ocultaMenuMobile();
        exibeMenuDesktop();
    }
}


// Adiciona um ouvinte de evento para o evento de redimensionamento
window.addEventListener('resize', handleResize);

window.onload = function() {
    intercalaMenuConformeDispositivo();
    handleResize();
};

