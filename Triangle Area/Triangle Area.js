//*********************************************
var triangleArea = function (){
    var base = parseFloat(document.getElementById("base").value);
    var height = parseFloat(document.getElementById("height").value);

    var output = document.getElementById("output");

    if(isNaN(base) || isNaN(height)){
      output.textContent = "You did not enter tow numbers.";
    }else{
      var area = 0.5 * base * height;
      output.textContent = "Area = " + area;
  }
};
