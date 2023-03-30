$('.main').click(function () {
  $('.main').css({ color: 'red', 'font-size': '50px' });
});

$('.type').keypress(function () {
  $('.type').hide();
});

// 마우스 커서 위치에 따라 변하는 여러가지 이벤트를 .on메소드로 합침
$('.main').on({
  mouseenter: function () {
    $(this).css('background-color', 'lightgray');
  },
  mouseleave: function () {
    $(this).css('background-color', 'lightblue');
  },
  click: function () {
    $(this).css('background-color', 'yellow');
  },
});

$('.main').fadeTo('slow', 0.2); 

// $('button').on({
//     click: function() {
//         $(".main").toggle(1000);
//     },

// });

$(document).ready(function () {
  $('button').click(function () {
    $('#div1').fadeToggle();
    $('#div2').fadeToggle('slow');
    $('#div3').fadeToggle(3000);
  });
});
