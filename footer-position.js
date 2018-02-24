// Push Footer to bottom
function positionFooter() {
    var headerElement = document.getElementById('header');
    var contentElement = document.getElementById('content');
    var footerElement = document.getElementById('footer');

    var windowHeight = document.documentElement.clientHeight;
    var headerHeight = headerElement.clientHeight;
    var contentHeight = contentElement.clientHeight;
    var footerHeight = footerElement.clientHeight;
    var pageHeight = headerHeight + contentHeight + footerHeight;

    if (pageHeight < windowHeight ) {
        footerElement.style.marginTop = (windowHeight - pageHeight) + "px";
    }

    /* Uncomment for debugging
    var variables = [
        { name: "windowHeight", value: windowHeight },
        { name: "headerHeight", value: headerHeight },
        { name: "contentHeight", value: contentHeight },
        { name: "footerHeight", value: footerHeight },
        { name: "pageHeight", value: pageHeight }
    ]
    console.table(variables);
    */
}
positionFooter();

// Timer to avoid resizing continuously to help with performance
// ToDo: Change this to use a handler
var resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(positionFooter, 100);
})
