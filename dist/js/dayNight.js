$("#switch").click(function () {
    if ($("#topSections").hasClass("night")) {
       
        $('.btn-day').removeClass('btn-night');
        $('.text-day').removeClass('text-night');
        $('#body .lordIcon').attr('colors', 'primary:#FFCE02,secondary:#ffffff');
        $('#header .btn-day').removeClass('btn-night');
        $('#logo').removeClass('logo-night');
        $('#city-1').removeClass('city-night');
        $('#city-3').removeClass('city-night');
        $("#topSections").removeClass("night");
        $("#footerSection").removeClass("night");
        $("#switch").removeClass("switched");
        $('.socket').removeClass('active');
        
    }
    else {

        $('.btn-day').addClass('btn-night');
        $('.text-day').addClass('text-night');
        $('#body .lordIcon').attr('colors', 'primary:#6666ff,secondary:#ffffff');
        $('#header .btn-day').addClass('btn-night');
        $('#logo').addClass('logo-night');
        $('#city-1').addClass('city-night');
        $('#city-3').addClass('city-night');
        $("#topSections").addClass("night");
        $("#footerSection").addClass("night");
        $("#switch").addClass("switched");
        $('.socket').addClass('active');
    }
});