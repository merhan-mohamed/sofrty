$(document).ready(function(){
    $('i.fa-star').click(function(){
        $(this).toggleClass('stars')
    })

});
$('#IM').click(function(){
    $(this).attr('type','file');

});
$( function() {
    $( "#datepicker" ).datepicker();
  } );
  
  $( function() {
    $( "#datepicker1" ).datepicker();
  } );