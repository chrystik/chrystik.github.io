$(function () {

    $(document).ready(function () {
        $('#multiscroll').multiscroll({
            anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage'],
            menu: '#menu__nav',
            css3: true,
            navigation: true,
            navigationPosition: 'right',
            navigationTooltips: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage']
        });
    });

});