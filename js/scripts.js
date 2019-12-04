var flavors = ["chocolate chip cookie dough", "vanilla", "cookies and cream", "mint chip"];
var str = '<ul>'

$(document).ready(function() {
 
  flavors.forEach(function(flavor) {
    str += '<li>' + flavor + '</li>';
  })

  str += '</ul>'
  document.getElementById("flavors").innerHTML = str;
  
})