define(function (require) {
    var routes = [{ tab: '#organisation', controller: 'organisationChartController' },
                { tab: '#team', controller: 'teamChartController'}];

    function dispose(currentTab) {
        var currentRoute = _.find(routes, function (item) { return item.tab === currentTab });
        if (!!currentRoute) {
            disposeController(currentRoute.controller);
        }
    }

    function start(tabName, currentId) {
        var currentRoute = _.find(routes, function (item) { return item.tab === tabName });
        if (!!currentRoute) {
            loadController(currentRoute.controller, currentId);
        }
    }

    function loadController(controllerName, currentId) {
        require(["Controllers/" + controllerName], function (controller) {
            controller.create(currentId);
                });
    }

    function disposeController(controllerName) {
        require(["Controllers/" + controllerName], function (controller) {
            controller.destroy();
        });
    }

    return {
        start: start,
        dispose: dispose
    };
});