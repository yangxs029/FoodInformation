var engel = function() {
    
    $('.engelBtn1').mouseover(function() {
        $('#engelImg0').removeClass('active-engel');
        $('#engelImg1').addClass('active-engel');
        $('#engelSbtn1').removeClass('active-engelBtn');
        $('#engelBbtn1').addClass('active-engelBtn');
    });
    
    $('.engelBtn1').mouseout(function() {
        $('#engelBbtn1').removeClass('active-engelBtn');
        $('#engelSbtn1').addClass('active-engelBtn');
    });
    
    $('.engelBtn2').mouseover(function() {
        $('#engelImg0').removeClass('active-engel');
        $('#engelImg2').addClass('active-engel');
        $('#engelSbtn2').removeClass('active-engelBtn');
        $('#engelBbtn2').addClass('active-engelBtn');
    });
    
    $('.engelBtn2').mouseout(function() {
        $('#engelBbtn2').removeClass('active-engelBtn');
        $('#engelSbtn2').addClass('active-engelBtn');
    });
    
    $('.engelBtn3').mouseover(function() {
        $('#engelImg0').removeClass('active-engel');
        $('#engelImg3').addClass('active-engel');
        $('#engelSbtn3').removeClass('active-engelBtn');
        $('#engelBbtn3').addClass('active-engelBtn');
    });
    
    $('.engelBtn3').mouseout(function() {
        $('#engelBbtn3').removeClass('active-engelBtn');
        $('#engelSbtn3').addClass('active-engelBtn');
    });
    
    $('.engelBtn').mouseout(function() {
        $('.active-engel').removeClass('active-engel');
        $('#engelImg0').addClass('active-engel');
    });
};

$(document).ready(engel);