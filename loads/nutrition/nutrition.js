function selectTab(id) {
  document.getElementById("tab_general").classList.remove('active');
  document.getElementById("tab_targeted").classList.remove('active');
  document.getElementById("tab_weightmanagement").classList.remove('active');
  document.getElementById("tab_sports").classList.remove('active');
  document.getElementById(id).classList.add('active');
}

function loadGeneral(){
  selectTab("tab_general");
  $("#nutrition_main").load("loads/nutrition/general.html");
}; 
loadGeneral(); // Default page load.

$("#tab_general").click(loadGeneral);

$("#tab_targeted").click(function() {
  selectTab("tab_targeted");
  $("#nutrition_main").load("loads/nutrition/targeted.html");
});

$("#tab_weightmanagement").click(function() {
  selectTab("tab_weightmanagement");
  $("#nutrition_main").load("loads/nutrition/weightmanagement.html");
});

$("#tab_sports").click(function() {
  selectTab("tab_sports");
  $("#nutrition_main").load("loads/nutrition/sports.html");
});