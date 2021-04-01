var hexDigits = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"),
    color = "black",
    bgColor = "#747474",
    colorHex = "",
    bgColorHex = "";
// defautl selection
function defaultPreview() {
    $(".preview").css("background-color", bgColor);
    $(".background-colorpicker").css("background-color", bgColor);
    $("#userBgColor").text(bgColorHex);
    $("#previewText").css("color", color);
    $(".text-colorpicker").css("background-color", color);
    $("#userTextColor").text(colorHex);
}
// background color change
function backgroundColor(el) {
    $(".preview").css("background-color", el);
    $(".background-colorpicker").css("background-color", el);
    $("#userBgColor").text(rgb2hex(el));
}
// text color change
function textColorChange(el) {
    $("#previewText").css("color", el);
    $(".text-colorpicker").css("background-color", el);
    $("#userTextColor").text(rgb2hex(el));
}
$(document).ready(function () {
    // user input
    $("#userText").keyup(function () {
        if ($("#userText").val() == "")
            $("#previewText").text("Text");
        else
            $("#previewText").text($("#userText").val());
    });
    // color picker toggle
    $("#bgcolorPalette").click(function (event) {
        $("#backgndColor").toggle();
        $("#txtColor").hide()
        event.stopPropagation();
    });
    $("#textColorPalette").click(function (event) {
        $("#txtColor").toggle();
        $("#backgndColor").hide();
        event.stopPropagation();
    });
    $(document).on("click", function () {
        $("#txtColor").hide();
        $("#backgndColor").hide();
    });
    // changes on preview
    $("button").on({
        click: function () {
            if ($(this).attr("title") == "color") {
                color = $(this).css("background-color");
                colorHex = rgb2hex(color);
                textColorChange(color);
            } else {
                bgColor = $(this).css("background-color");
                bgColorHex = rgb2hex(bgColor);
                backgroundColor(bgColor);
            }
        },
        mouseenter: function () {
            if ($(this).attr("title") == "color") {
                textColorChange($(this).css("background-color"));
            } else {
                backgroundColor($(this).css("background-color"));
            }
        },
        mouseleave: function () {
            defaultPreview();
        }
    });
});
// rgb color to hex
function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}
function hex(x) {
    return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}