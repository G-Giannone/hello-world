$(document).ready(function() {
    $("div").mouseenter(function() {
        $("div").fadeTo('fast', 0);
    });
    $("div").mouseleave(function() {
        $("div").fadeTo('fast', 0.5);
        
    });
});
