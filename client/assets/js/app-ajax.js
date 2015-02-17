(function() {
    'use strict';

    var DEFAULT_ROUTE = 'home';

    var template = document.getElementById('template');
    var ajax, pages, drawerPanel;
    var cache = {};

    /**
     * Creates pages of the app.
     *
     * @type {object}
     * @param {string} name Title of the page
     * @param {string} hash Hash used to access the page
     * @param {string} icon Icon for the menu
     * @param {string} url Page to show
     */
    template.pages = [{
        name: 'Profile',
        hash: 'profile',
        icon: 'account-circle',
        url: './profile.html'
    }, {
        name: 'Home',
        hash: 'home',
        icon: 'home',
        url: './home.html'
    }, {
        name: 'Documentation',
        hash: 'doc',
        icon: 'content-paste',
        url: './doc.html'
    }, {
        name: 'Create',
        hash: 'create',
        icon: 'add-circle-outline',
        url: './create.html'
    }, {
        name: 'Development',
        hash: 'dev',
        icon: 'label-outline',
        url: './dev.html'
    }];

    /**
     * Initializes the route and variables when the template is ready to go.
     */
    template.addEventListener('template-bound', function(e) {
        drawerPanel = document.getElementById('drawerPanel');
        ajax = document.getElementById('ajax');
        pages = document.getElementById('pages');

        this.route = this.route || DEFAULT_ROUTE;
    });

    /**
     * Loads pages asynchronously.
     *
     * @param  {object} e Event
     * @param  {object} detail
     * @param  {object} sender
     */
    template.menuItemSelected = function(e, detail, sender) {
        if (detail.isSelected) {
            this.async(function() {
                if (!cache[ajax.url]) {
                    ajax.go();
                }

                // Close the app drawer on select.
                drawerPanel.closeDrawer();
            })
        }
    }

    /**
     * Toggles drawer panel.
     *
     * @param  {object} e Event
     * @param  {object} detail
     * @param  {object} sender
     */
    template.togglePanel = function(e, detail, sender) {
        drawerPanel.togglePanel();
    }

    /**
     * Prevents default behaviour on page load (link navigation).
     *
     * @param  {object} e Event
     * @param  {object} detail
     * @param  {object} sender
     */
    template.ajaxLoad = function(e, detail, sender) {
        e.preventDefault();
    }

    /**
     * Injects a portion of the returned document into the container.
     *
     * @param  {object} e Event
     * @param  {object} detail
     * @param  {object} sender
     */
    template.onResponse = function(e, detail, sender) {
        var content = detail.response.getElementById('page-content');

        var html = content.innerHTML;

        // Import dynamically vextab-div script on documentation page.
        if (this.route === 'doc' || this.route === 'create') {
            var body = document.getElementsByTagName('body').item(0);
            var vextab = document.createElement("script");
            vextab.src = "assets/js/vextab-div.js";
            vextab.id = "vextab-div";

            if (!$('#vextab-div').length)
                body.appendChild(vextab);
            else {
                $('#vextab-div').remove();
                body.appendChild(vextab);
            }
        }

        cache[ajax.url] = html;

        this.injectBoundHTML(html, pages.selectedItem.firstElementChild);
    }
})();
