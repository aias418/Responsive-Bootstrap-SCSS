$(document).ready(function(){

  $("#videTabsNavlinks li a").click(function(){
    var videos = $( ".video-tabs .list-video");
    videos.each(function(i,e){
      $(e).get(0).pause();
    })

    var eleIndex = $(this).parent().index() + 1;
    if(eleIndex > 0){
      $(".video-tabs  #tabVideoIndex").html(eleIndex);

      $( ".video-tabs #listvideo"+eleIndex).get(0).play();
    }

  });

  $(".video-tabs .video-wrapper .btn-next").click(function(){

   $( ".video-tabs .video-wrapper .action-box .btn-prev").removeClass('active');
   $( ".video-tabs .video-wrapper .action-box .btn-next").addClass('active');
    
   var liEle = $("#videTabsNavlinks").find("li.active");

   var eleIndex = liEle.next().index()  + 1;

   if(eleIndex > 0){

    $(".video-tabs  #tabVideoIndex").html(eleIndex);

    var videos = $( ".video-tabs .list-video");
    videos.each(function(i,e){
      $(e).get(0).pause();
    })

    $( ".video-tabs #listvideo"+eleIndex).get(0).play();

   }
   var linkEle = liEle.next().find('a');

   $(linkEle[0]).tab('show');
  });

  $(".video-tabs .video-wrapper .btn-prev").click(function(){

    $( ".video-tabs .video-wrapper .action-box .btn-next").removeClass('active');
    $( ".video-tabs .video-wrapper .action-box .btn-prev").addClass('active');

    var liEle = $("#videTabsNavlinks").find("li.active");

    var eleIndex = liEle.prev().index() + 1;

    if(eleIndex > 0){
      
      $(".video-tabs  #tabVideoIndex").html(eleIndex);

      var videos = $( ".video-tabs .list-video");
      videos.each(function(i,e){
        $(e).get(0).pause();
      })

     $( ".video-tabs #listvideo"+eleIndex).get(0).play();

    }
    var linkEle = liEle.prev().find('a');

    $(linkEle[0]).tab('show');
  });
})