var slideIndex = 1;
showDiv(slideIndex);

function plusDivs(n) {
    badgeClick(slideIndex += n);
}

function currentDiv(n) {
    badgeClick(slideIndex = n);
}

function showDiv(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        $(x[i]).hide();
    }

    $(x[slideIndex - 1]).show("fade", {}, 750, function () {
        for (i = 0; i < x.length; i++) {
            if (i != slideIndex - 1) {
                $(x[i]).hide();
            }
        }
    });
}

function makeUnactive() {
    $('.badge-active').attr('class', 'badge');
}

function badgeClick(num) {
    showDiv(slideIndex = num);
    makeUnactive();

    var badge = $('.badge')[slideIndex - 1];
    $(badge).attr('class', 'badge-active');
}