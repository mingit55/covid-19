$(function(){
    var currentNo = 0;
    var images = $(".visual .images img");
    var t_duration = 5;
    var t_movement = 3;
    
    function sliding(){
        let nextNo = currentNo + 1 > images.length
        images.eq(currentNo).animate({top: 0});
    }


    sliding();
});