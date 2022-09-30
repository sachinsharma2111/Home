// variables
var accordionBtn = document.querySelectorAll('.accordionTitle');
var allTexts = document.querySelectorAll('.item');
var accIcon = document.querySelectorAll('.accIcon');

// event listener
accordionBtn.forEach(function (el) {
    el.addEventListener('click', toggleAccordion)
});

// function
function toggleAccordion(el) {
   var targetText = el.currentTarget.nextElementSibling.classList;
   var targetAccIcon = el.currentTarget.children[0];
   var target = el.currentTarget;
   
   if (targetText.contains('show')) {
       targetText.remove('show');
       targetAccIcon.classList.toggle('anime');
       target.classList.remove('accordionTitleActive');
   } 
   else {
      accordionBtn.forEach(function (el) {
         el.classList.toggle('accordionTitleActive');
  
         allTexts.forEach(function (el) {
            el.classList.remove('show');
         });
         
         accIcon.forEach(function (el) {
          el.classList.remove('anime');
         });
         
      });
     
   
      
         targetText.add('show');
         target.classList.add('accordionTitleActive');
         targetAccIcon.classList.add('anime');
   }  
}


jQuery(document).ready(function() {
    $('.accIcon').click(function() {
        var index = $(this).index('.accIcon')

        var iframe = $('iframe')[index]
        var vPlayer = new Vimeo.Player(iframe)

        if ($(this).hasClass('anime')) { // when accordion is closed
            vPlayer.pause().then(function() {
                console.log("video is paused")
            }).catch(function(error) {
                switch (error.name) {
                    case 'PasswordError':
                        console.log('the video is password-protected and the viewer needs to enter the password first')
                        break;
            
                    case 'PrivacyError':
                        console.log('the video is private')
                        break;
            
                    default:
                        console.log("some other error occurred")
                        console.log(error)
                        break;
                }
            });
        // } else { // when accordion is opened
        //     vPlayer.play().then(function() {
        //         console.log("vidoe is played")
        //     }).catch(function(error) {
        //         switch (error.name) {
        //             case 'PasswordError':
        //                 console.log('the video is password-protected and the viewer needs to enter the password first')
        //                 break;
            
        //             case 'PrivacyError':
        //                 console.log('the video is private')
        //                 break;
            
        //             default:
        //                 console.log("some other error occurred")
        //                 console.log(error)
        //                 break;
        //         }
        //     });
        }
    })
})
