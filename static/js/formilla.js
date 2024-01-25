    var head = document.getElementsByTagName("head").item(0);
    var script = document.createElement("script");

    var src = (document.location.protocol == 'https:'
        ? 'https://www.formilla.com/scripts/feedback.js'
        : 'http://www.formilla.com/scripts/feedback.js');

    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", src); script.setAttribute("async", true);

    var complete = false;

    script.onload = script.onreadystatechange = function () {
        if (!complete && (!this.readyState
            || this.readyState == 'loaded'
            || this.readyState == 'complete')) {
            complete = true;
            Formilla.guid = 'cs369315-4875-4f4e-a078-6ba548b8d452';
            Formilla.loadWidgets();
        }
    };

    head.appendChild(script);
