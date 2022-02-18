$(document).ready(function () {    
    var allOptions = $('#selectprod option')
    $('#selectcat').change(function () {
        $('#selectprod option').remove()
        var classN = $('#selectcat option:selected').prop('class');
        var opts = allOptions.filter('.' + classN);
        $.each(opts, function (i, j) {
            $(j).appendTo('#selectprod');
        });
    });
});

// $(function() {
//   $('#select').filterByValues( $('.filterElements') );
//   $('.filterElements').change();
// });  


// jQuery.fn.filterByValues = function(masterSelects) {
//   return this.each(function() {
//     var select = this;
//     var options = [];
//     $(select).find('option').each(function() {
//       options.push({value: $(this).val(), text: $(this).text()});
//     });
//     $(select).data('options', options);
    
//     masterSelects.bind('change', function() {
//       var options = $(select).empty().scrollTop(0).data('options');
//       var vals=[];
//       $(masterSelects).each(function(i,e){
//         vals.push('^'+$.trim($(e).val())+'$' );
//        });
//       var search = vals.join('|');
//       var regex = new RegExp(search,'gi');

//       $.each(options, function(i) {
//         var option = options[i];
//         if(option.value.match(regex) !== null) {
//           $(select).append(
//              $('<option>').text(option.text).val(option.value)
//           );
//         }
//       });
//     });
    
//   });
// };

$(document).ready(function(){


	$('.gallary').featherlightGallery();
	
	$(window).scroll(function(){
      $('#header_banner_container').localScroll({duration:1500});
    });

    ScrollReveal().reveal('p:not[class="para"],p ,.products li')	

    $(window).scroll(function(){
        //navigation animation
        if (jQuery(window).scrollTop()> 75) {
            $("#navigation").addClass("attach");
            $(".navbar").addClass("navbar_background");
        }else{
            $("#navigation").removeClass("attach");
        };
        //end navigation animation 

        $('.down-arrow').localScroll({duration:1500});

        $(".pay_page #navigation").removeClass("attach");
});
})


