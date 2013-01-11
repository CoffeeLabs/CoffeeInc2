var counts=$.totalStorage.getItem("counter");
var seconds=10;
var one_second=1000;
function game(){
  if(counts!=0 && counts%seconds==0){
    //variables for the statusbar infos
    var budget=0;
    var talent=0;
    var satisfaction=0;
    var product=0;
    employeeInformation.pop();
    for(i = 0; i < employeeInformation.length; i++){
      talent=parseInt(talent)+parseInt(employeeInformation[i][2]);
      satisfaction=parseInt(satisfaction)+parseInt(employeeInformation[i][4]);
      budget=parseInt(budget)+parseInt(employeeInformation[i][6]);
    }
    satisfaction=Math.round(satisfaction/employeeInformation.length);//satisfactionscore
    talent=Math.round(talent/employeeInformation.length);//talentscore
    product=Math.round((2*(talent/3)+parseInt(satisfaction/3)));//randomly influenced productscore
    $.totalStorage.setItem("stat_product", product);
    $.totalStorage.setItem("stat_old_budget", $.totalStorage.getItem("stat_budget"));
    $.totalStorage.setItem("stat_budget", $.totalStorage.getItem("stat_budget")-parseInt(budget));
    updateHeader();
    employeeInformation.push([0,0,0,0,0,0,0]);
  }
  document.getElementById("tmpcounts").value=counts;
  counts++;
  $.totalStorage.setItem("counter", counts);
  window.setTimeout(game, (one_second));
}
