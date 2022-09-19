
var ladivimg = document.getElementsByClassName('img');
ladivimg.addEventListener()
var time = setInterval(repeat, 5000);
function repeat(){
    $(document).ready(function(){
        $('#o14').click(function(){
            $('.o8').animate({width: '-=10%'},{queu:false , duration:5000})
            .animate({fontSize:'20px'},{queu:false, duration:2000})
            .fadeTo(2000,0.5);
        });
    });
}
