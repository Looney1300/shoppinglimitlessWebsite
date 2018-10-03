
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
  document.getElementById("main_content").innerHTML = '';
  myAPI.load_cards("main_content", jsdb.beauty);
});

$("#load_bath").click(function() {
  // $("#main_content").load("loads/bath.html");
  document.getElementById("main_content").innerHTML = '';
  myAPI.load_cards("main_content", jsdb.bath);
});

$("#load_home").click(function() {
  // $("#main_content").load("loads/cleaning.html");
  document.getElementById("main_content").innerHTML = '';
  myAPI.load_cards("main_content", jsdb.cleaning);
});


$('#searchbar').on('keyup', function(e) {
  if (e.keyCode === 13) {
      $('#searchbutton').click();
  }
});

$("#searchbutton").click(function() {
  //http://www.amway.com/Shop/Search/SearchResults.aspx?searchkeyword=laundry%20wash&includeLMS=false&pwsID=Henrie
  let searchterm = document.getElementById('searchbar').value.replace(' ', '%20');
  let searchurl = 'http://www.amway.com/Shop/Search/SearchResults.aspx?searchkeyword='+ searchterm +'&includeLMS=false&pwsID=Henrie';
  let newtab = window.open(searchurl, '_blank');
  newtab.focus();
});

