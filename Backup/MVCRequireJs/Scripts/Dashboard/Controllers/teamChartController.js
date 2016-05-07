define(["Charts/gaugeChartForTeam", "Charts/ageProfileChartForTeam"], function (gaugeChartForTeam, ageProfileChartForTeam) {
    function create(teamId) {
        gaugeChartForTeam.create(teamId);
        ageProfileChartForTeam.create(teamId);
    }

    function destroy() {
        gaugeChartForTeam.destroy();
        ageProfileChartForTeam.destroy();
    }

    return {
        create: create,
        destroy: destroy
    };
});