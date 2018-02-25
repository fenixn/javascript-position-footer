(function(footerPositioner) {
    // Private Properties
    var debounceTimer;
    var headerElement = document.getElementById('header');
    var contentElement = document.getElementById('content');
    var footerElement = document.getElementById('footer');

    // Public Properites
    footerPositioner.debug = false;
    footerPositioner.delay = 100;

    /*
     * Public method setPos
     * Positions the #footer element to the bottom of the page.
     */
    footerPositioner.setPos = function() {
        var windowHeight = document.documentElement.clientHeight;
        var headerHeight = headerElement.clientHeight;
        var contentHeight = contentElement.clientHeight;
        var footerHeight = footerElement.clientHeight;
        var pageHeight = headerHeight + contentHeight + footerHeight;

        if (pageHeight < windowHeight ) {
            footerElement.style.marginTop = (windowHeight - pageHeight) + "px";
        }

        if (footerPositioner.debug) {
            var heightVariables = [
                { name: "windowHeight", value: windowHeight },
                { name: "headerHeight", value: headerHeight },
                { name: "contentHeight", value: contentHeight },
                { name: "footerHeight", value: footerHeight },
                { name: "pageHeight", value: pageHeight }
            ]
            console.table(heightVariables);
        }
    };

    /*
     * Pulic method setPosDebounce
     * Debounce method for the setPos method to prevent
     * the setPos method from firing continuously.
     */
    footerPositioner.setPosDebounce = function() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(footerPositioner.setPos, footerPositioner.delay);
    }

    /*
     * The footer is positioned twice for best user experience.
     * The first time is immediately. This will sometime position the footer perfectly.
     * In cases where the first position is off slightly, the footer will be positioned
     * a second time after the page is finished loading.
     */

    // Calls the setPos method immediately.
    footerPositioner.setPos();

    // Calls the setPos method after page loads.
    document.onreadystatechange = function() {
        if (document.readyState == "complete") {
            footerPositioner.setPos();
        }
    }
}(window.footerPositioner = window.footerPositioner || {}))
window.addEventListener('resize', footerPositioner.setPosDebounce);
