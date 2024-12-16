function expandWelcomeContract() {
    const $content = $("#welcomeTextField");
    const $button = $("#welcomeDisplayButton");

    $content.slideToggle(500, function () {
        const isVisible = $content.is(":visible");

        $content.attr("aria-hidden", !isVisible);
        $button.attr("aria-expanded", isVisible);

        if (isVisible) {
            $content.find("h2").attr("tabindex", "0").focus();
        } else {
            $content.find("h2").attr("tabindex", "-1");
        }
    });

    $button.toggleClass('rotate');
}

function expandInfoContract() {
    const $content = $("#infoTextField");
    const $button = $("#infoDisplayButton");

    $content.slideToggle(500, function () {
        const isVisible = $content.is(":visible");

        $content.attr("aria-hidden", !isVisible);
        $button.attr("aria-expanded", isVisible);

        if (isVisible) {
            $content.find("h2").attr("tabindex", "0").focus();
        } else {
            $content.find("h2").attr("tabindex", "-1");
        }
    });

    $button.toggleClass('rotate');
}
