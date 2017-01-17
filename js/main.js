var cargarPagina = function () {
    $("#js").click(javascript);
    $("#html").click(html);
};

$(document).ready(cargarPagina);

var javascript = function() {
    $("#htmlCss").hide("slow");
    $("#javascript").show("slow");
    $("#projects").removeClass("height");
};

var html = function() {
    $("#javascript").hide("slow");
    $("#htmlCss").show("slow");
    $("#projects").addClass("height");
};