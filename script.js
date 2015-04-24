var main = function() {
    $('div').click(function() {
       $('div').animate({
           left: '250px'
       }, 200); 
    });
};

$(document).ready(main);
