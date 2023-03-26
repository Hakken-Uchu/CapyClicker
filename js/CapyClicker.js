
$(document).on("click", "#mebtn", function () {
    clickOnMe();
})


function clickOnMe() {
    var nbclick = parseInt($("#nbclick").val());
    $("#nbclick").val(nbclick + 1);
};





$(document).on("click", "#niv2", function () {
    levelup2();
})

function levelup2() {
    var nbclick = parseInt($("#nbclick").val());
    if (nbclick >= 30) {
        $("#nbclick").val(nbclick - 30);
        $("#niv2").addClass("d-none")
        $("#niv3").removeClass("d-none")
        $("#mebtn").attr("src", "capymusique.png");
        var interval = setInterval(function () {
            var nbclick1 = parseInt($("#nbclick").val());
            $("#nbclick").val(nbclick1 + 1);
            if (nbclick1 >= 99999) {
                clearInterval(interval);
            }
        }, 1000);

    }
    else {
        return
    }
};


$(document).on("click", "#niv3", function () {
    levelup3();
})

function levelup3() {
    var nbclick = parseInt($("#nbclick").val());
    if (nbclick >= 250) {
        $("#nbclick").val(nbclick - 250);
        $("#niv3").addClass("d-none")
        $("#niv4").removeClass("d-none")
        $("#mebtn").attr("src", "capyabra (6).png");
        var interval = setInterval(function () {
            var nbclick1 = parseInt($("#nbclick").val());
            $("#nbclick").val(nbclick1 + 1);
            if (nbclick1 >= 99999) {
                clearInterval(interval);
            }
        }, 500);

    }
    else {
        return
    }
};



$(document).on("click", "#niv4", function () {
    levelup4();
})

function levelup4() {
    var nbclick = parseInt($("#nbclick").val());
    if (nbclick >= 700) {
        $("#nbclick").val(nbclick - 700);
        $("#niv4").addClass("d-none")
        $("#niv5").removeClass("d-none")
        $("#mebtn").attr("src", "capyabra (11).png");
        var interval = setInterval(function () {
            var nbclick1 = parseInt($("#nbclick").val());
            $("#nbclick").val(nbclick1 + 5);
            if (nbclick1 >= 99999) {
                clearInterval(interval);
            }
        }, 1000);

    }
    else {
        return
    }
};


$(document).on("click", "#niv5", function () {
    levelup5();
})

function levelup5() {
    var nbclick = parseInt($("#nbclick").val());
    if (nbclick >= 2000) {
        $("#nbclick").val(nbclick - 2000);
        $("#niv5").addClass("d-none")
        $("#niv6").removeClass("d-none")
        $("#mebtn").attr("src", "capyabra (3).png");
        var interval = setInterval(function () {
            var nbclick1 = parseInt($("#nbclick").val());
            $("#nbclick").val(nbclick1 + 10);
            if (nbclick1 >= 99999) {
                clearInterval(interval);
            }
        }, 500);

    }
    else {
        return
    }
};



$(document).on("click", "#niv6", function () {
    levelup6();
})

function levelup6() {
    var nbclick = parseInt($("#nbclick").val());
    if (nbclick >= 10000) {
        $("#nbclick").val(nbclick - 10000);
        $("#niv6").addClass("d-none")
        $("#win").removeClass("d-none")
        $("#mebtn").attr("src", "capyetoile.png");

    }
    else {
        return
    }
};