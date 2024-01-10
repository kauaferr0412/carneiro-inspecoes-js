const mobileAside = document.getElementById('mobile-aside-menu');
const mobileAsideClosed = document.getElementById('mobile-aside-menu-closed');
const desktopHeader = document.getElementById('header-desktop');
const iconeMenuLateral = document.getElementById('icone-menu-closed');
const iconeMenuLateralAberto = document.getElementById('icone-menu-open');
const mobileWidthThreshold = 768;

function isMobile() {
    return window.innerWidth < mobileWidthThreshold;
}

function toggleMenuDisplay(isMobile) {
    desktopHeader.classList.toggle('base-header', !isMobile);
    desktopHeader.classList.toggle('oculta-display', isMobile);

    mobileAside.classList.toggle('mobile-aside-menu', isMobile);
    mobileAside.classList.toggle('oculta-display', !isMobile);
}

function handleResize() {
    const isMobileDevice = isMobile();
    toggleMenuDisplay(isMobileDevice);
}

function toggleMenuLateral() {

    if(mobileAside.classList.contains('remove-display')) {
        mobileAside.classList.remove('remove-display');
        mobileAsideClosed.classList.add('remove-display');
    } else if(mobileAsideClosed.classList.contains('remove-display')) {
        mobileAsideClosed.classList.remove('remove-display');
        mobileAside.classList.add('remove-display');
    }

   
}

window.addEventListener('resize', handleResize);
iconeMenuLateral.addEventListener('click', toggleMenuLateral);
iconeMenuLateralAberto.addEventListener('click', toggleMenuLateral);

window.onload = function() {
    handleResize();
};
