function expandWelcomeContract() {
    const $content = $("#welcomeTextField");

    $content.slideToggle(500, function () {
        $content.is(":visible") ? "Collapse" : "Expand";
    });

    $("#welcomeDisplayButton").toggleClass('rotate');


}

function expandInfoContract() {
    const $content = $("#infoTextField");

    $content.slideToggle(500, function () {
        $content.is(":visible") ? "Collapse" : "Expand";
    });

    $("#infoDisplayButton").toggleClass('rotate');

}