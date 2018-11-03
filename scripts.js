let mainContent = document.getElementById("main_content")

function loadHome() {
  $("#main_content").load("loads/home.html");
};
loadHome(); // Default page load.

$("#nav_home").click(loadHome);

$("#load_nutrition").click(function() {
  $("#main_content").load("loads/nutrition/tabs.html");
});

$("#load_beauty").click(function() {
  // $("#main_content").load("loads/beauty.html");
  mainContent.innerHTML = '';
  myAPI.load_cards("main_content", jsdb.beauty);
  let category = 'Beauty';
  $("#main_content").append(`<div class="text-center"><a class="nav-link" href="http://www.amway.com/Henrie/Shop/Product/Category.aspx/${category}"><u>More Products</u></a></div>`);
});

$("#load_bath").click(function() {
  // $("#main_content").load("loads/bath.html");
  mainContent.innerHTML = '';
  myAPI.load_cards("main_content", jsdb.bath);
  let category = 'Bath-Body';
  $("#main_content").append(`<div class="text-center"><a class="nav-link" href="http://www.amway.com/Henrie/Shop/Product/Category.aspx/${category}"><u>More Products</u></a></div>`);
});

$("#load_home").click(function() {
  // $("#main_content").load("loads/cleaning.html");
  mainContent.innerHTML = '';
  myAPI.load_cards("main_content", jsdb.cleaning);
  let category = 'At-Home';
  $("#main_content").append(`<div class="text-center"><a class="nav-link" href="http://www.amway.com/Henrie/Shop/Product/Category.aspx/${category}"><u>More Products</u></a></div>`);
});

$("#load_partners").click(function() {
  mainContent.innerHTML = '';
  $("#main_content").load("loads/partners.html");
});

$("#load_reviews").click(function() {
  $("#main_content").load("loads/reviews.html");
});

// ------------ Search Stuff ---------------
$('#searchbar').on('keyup', function(e) {
  if (e.keyCode === 13) {
      this.value = '';
      $('#searchbutton').click();
  }
});

$("#searchbutton").click(function() {
  //http://www.amway.com/Shop/Search/SearchResults.aspx?searchkeyword=laundry%20wash&includeLMS=false&pwsID=Henrie
  let searchterm = document.getElementById('searchbar').value.replace(' ', '%20');
  let searchurl = 'http://www.amway.com/Shop/Search/SearchResults.aspx?searchkeyword='+ searchterm +'&includeLMS=false&pwsID=Henrie';
  let newtab = window.open(searchurl);
  newtab.focus();
});
// ------------------------------------------

