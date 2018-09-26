let loadTest = function () {
  console.log('did it');
  $("#looney").load("test.html");
};

$("#load_nutrition").click(function() {
  $("#main").load("loads/nutrition.html");
});

$("#load_beauty").click(function() {
  $("#main").load("loads/beauty.html");
});

$("#load_bath").click(function() {
  $("#main").load("loads/bath.html");
});

$("#load_home").click(function() {
  $("#main").load("loads/home.html");
});

