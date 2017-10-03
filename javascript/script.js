$(document).ready(function() {
  appendText();
  $("#content").append("<div id='tab1'>Spend your money here!<p>The best food and atmosphere you could want!</p></div>");
  $("#content").append("<div id='tab2' class='hidden'><img src='https://vixstories.files.wordpress.com/2011/05/5161068210_fbd000fea9.jpg'><p>Our chefs will make whatever you want to absolute perfection</p></div>");
  $("#content").append("<div id='tab3' class='hidden'>Phone: (555) 555 5555<br>Email: bestever@email.com</div>");
  
  $('li').on('click', function() {
    switch($(this).text()) {
    case "Home":
      $('#tab1').removeClass('hidden');
      $('#tab2, #tab3').addClass('hidden');
      break;
    case "Menu":
      $('#tab2').removeClass('hidden');
      $('#tab1, #tab3').addClass('hidden');
      break;
    case "Contact":
      $('#tab3').removeClass('hidden');
      $('#tab1, #tab2').addClass('hidden');
      break;  
    }
  });
});

function appendText() {
  var txt1 = "<div id='banner'><img src='http://az616578.vo.msecnd.net/files/2016/06/10/63601187836287301389958703_food-clipart-07.jpg'></div>";
  var txt2 = "<h1>Best Restaurant Ever</h1>";
  var txt3 = "<ul id='tabs'><li class='tab'>Home</li><li class='tab'>Menu</li><li class='tab'>Contact</li></ul>";
  $("#content").append(txt1, txt2, txt3);
}
	