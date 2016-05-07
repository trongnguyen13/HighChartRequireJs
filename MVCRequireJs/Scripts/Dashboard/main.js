require.config({
    baseUrl: "/Scripts/Dashboard/",
    urlArgs: "cachebust=" + (new Date()).getTime()
});

require(["route"], function (route) {
    var currentTabId = "#organisation";

    route.start(currentTabId);

    $("#tabs a").click(function (e) {
        e.preventDefault();
        $(this).tab('show');
        var tabId = $(this).attr('id');

        route.dispose(currentTabId);
        route.start(tabId, 1);

        currentTabId = tabId;
    });

});