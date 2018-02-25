# vanilla-js-footer-positioner
Position the footer to the bottom with vanilla javascript.

## Features
1. Done in vanilla JS. No additional libraries like jQuery required.
2. Footer will be reposition while the user is resizing their browser.
3. Code is inside a self invoking function to help avoid global namespace clutter and conflict.

# Setup
Your HTML will need to be organized into a header, content, and footer div.
```html
<body>
  
    <div id="header">
        Place all your header and/or navigation menu code here
    </div>

    <div id="content">
        Place all your content code here
    </div>

    <div id="footer">
        Place all your footer code here
    </div>
  
</body>
```

Include footer-positioner.js file into your project as external javascript. Your footer will now be pushed to the bottom of the page.
```html
<script type="text/javascript" src="path/to/footer-positioner.js"></script>
```

# Options
You can set the debounce delay for the footer position during browser resizing by including the script below into your project javascript file. The delay is set in milliseconds.
```javascript
footerPositioner.delay = 250;
```
