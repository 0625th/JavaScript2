function clickButton(target) {
  
  let result = document.getElementById("result")
  let = targetValue = target.innerHTML;

  if (targetValue == "C") {
    result.innerHTML = "0";
    } else if (targetValue == "=") {
      result.innerHTML = eval(result.innerHTML)
    } else {
      if (result.innerHTML == "0") {
        result.innerHTML = targetValue;
    } else if (result.innerHTML == ".") {
            result.innerHTML = "0." + targetValue;
    } else {
            result.innerHTML += targetValue;
        }
    }
}

$(document).ready(function() {
  
  //「C」が押された時
  $(".clear").on("click",function() {
    $(".divided,.multi,.minus,.plus,.decimal").prop("disabled",false); 
  });
  
  //「/」が押された時
  $(".divided").on("click",function() {
    $(".divided,.multi,.plus,.decimal").prop("disabled",true); 
  });
  
  //「*」が押された時
  $(".multi").on("click",function() {
    $(".divided,.multi,.plus,.decimal").prop("disabled",true); 
  });
  
  //「-」が押された時
  $(".minus").on("click",function() {
    $(".divided,.multi,.minus,.plus,.decimal").prop("disabled",true); 
  });
  
  //「+」が押された時
  $(".plus").on("click",function() {
    $(".divided,.multi,.minus,.plus,.decimal").prop("disabled",true); 
  });
  
  //「.」が押された時
  $(".decimal").on("click",function() {
    $(".divided,.multi,.minus,.plus,.decimal,equal").prop("disabled",true); 
  });
  
  //「0123456789」が押された時
  $(".num").on("click",function() {
    $(".divided,.multi,.minus,.plus,.decimal").prop("disabled",false); 
  });
  
}); 