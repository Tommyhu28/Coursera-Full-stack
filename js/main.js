function toggleCarouselPlay() {
    var $icon = $("#carousel-button-icon");
    var toAdd;
    if ($icon.hasClass("fa-play")) {
        $("#carouselExampleDark").carousel('cycle');
        toAdd ="fa-pause";
    }
    else {
        $("#carouselExampleDark").carousel('pause');
        toAdd ="fa-play";
    }
    $icon.removeClass().addClass(["fa",toAdd]);
}

function toggleLoginModal() {
    $("#loginModal").modal("toggle");
}

function toggleReserveModal() {
    $("#reserveFormModal").modal("toggle");
}

function toggleNavbar() {
    $("#navbar").collapse('toggle');
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})