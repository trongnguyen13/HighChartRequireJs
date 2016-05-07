define(["Charts/gaugeChart", "Charts/ageProfileChart"], function (gaugeChart, ageProfileChart) {
    function create() {
        gaugeChart.create();
        ageProfileChart.create();
    }

    function destroy() {
        gaugeChart.destroy();
        ageProfileChart.destroy();
    }

    return {
        create: create,
        destroy: destroy
    };
});