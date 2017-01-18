
(function(){


   //var theImages = document.querySelectorAll(".image-holder");
   //var theHeading = document.querySelector(".heading");
   //var theSubhead = document.querySelector(".main-copy h2");
   //var theSeasonText = document.querySelector(".main-copy p");
   //var appliedClass;

   var $theImages = $('.image-holder');
   var $theHeading = $('.heading');
   var $theSubhead = $('.main-copy h2');
   var $theSeasonText= $('.main-copy p');
   var appliedClass;

   function changeElements ()
   {

     $theHeading.removeClass(appliedClass);
     $theSubhead.removeClass(appliedClass);

     appliedClass = this.id;

     $theHeading.addClass(this.id);
     $theSubhead.addClass(this.id);


     $theSubhead.text(dynamicContent[this.id].headline);
     $theSeasonText.text(dynamicContent[this.id].text);
   }

   $theImages.click(function()
 {
   changeElements();
 });


   //[].forEach.call(theImages, function(image){
    //  image.addEventListener("click", changeElements, true);
//   });

   //this part makes sure when you load the page that spring always is first
   $theSubhead.text(dynamicContent['spring'].headline);
   $theSeasonText.text(dynamicContent['spring'].text);
   $theHeading.addClass('spring');

})();
