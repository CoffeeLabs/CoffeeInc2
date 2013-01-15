var counts=$.totalStorage.getItem("counter");
var seconds=2;
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
    product=0+Math.round(((budget/(2500*employeeInformation.length))+(2*(talent/3)+parseInt(satisfaction/3))/10)*1.6-2.2);//randomly influenced productscore
    if(product<1)
      product=1;
    if(product>5)
      product=5;
    $.totalStorage.setItem("stat_product", $.totalStorage.getItem("stat_product")+parseInt(product));
    $.totalStorage.setItem("stat_old_budget", $.totalStorage.getItem("stat_budget"));
    $.totalStorage.setItem("stat_budget", $.totalStorage.getItem("stat_budget")-parseInt(budget));
    if($.totalStorage.getItem("stat_budget")<=0){
      $.totalStorage.setItem("stat_budget", 0);
      updateHeader();
      alert("Fail! You ran out of money...");
      newGame();
      window.setTimeout("location.reload(true);",0);
    }
    if($.totalStorage.getItem("stat_product")>=100){
      $.totalStorage.setItem("stat_product", 100);
      updateHeader();
      alert("Success! Productscore 100/100");
      newGame();
      window.setTimeout("location.reload(true);",0);
    }
    updateHeader();
    employeeInformation.push([0,0,0,0,0,0,0]);
  }
  document.getElementById("tmpcounts").value=counts;
  counts++;
  $.totalStorage.setItem("counter", counts);
  window.setTimeout(game, (one_second));
}

function newGame(){
  employeeInformation=[];
  employeeInformation.push([0,0,0,0,0,0,0]);
  $.totalStorage("emp", employeeInformation);
  investorInformation=[];
  investorInformation.push([0,0,0,0,0,0]);
  $.totalStorage("inv", investorInformation);
  $.totalStorage.setItem("stat_product", 0);
  $.totalStorage.setItem("stat_talent", 0);
  $.totalStorage.setItem("stat_sat", 0);
  $.totalStorage.setItem("stat_invint", 0);
  $.totalStorage.setItem("stat_old_budget", 0);
  $.totalStorage.setItem("avSalary",0);
  $.totalStorage.setItem("stat_budget", 10000);
  $.totalStorage.setItem("stat_equity",100);
  $.totalStorage.setItem("counter",0);
}

function fireEmp(){
  $.totalStorage.setItem("avSalary",$.totalStorage.getItem("avSalary")-parseInt(employeeInformation[currentEmpPosition][6]));
  employeeInformation.splice(currentEmpPosition,1);
  var talent=0;
  var satisfaction=0;
  for(i = 0; i < employeeInformation.length; i++){
    talent=parseInt(talent)+parseInt(employeeInformation[i][2]);
    satisfaction=parseInt(satisfaction)+parseInt(employeeInformation[i][4]);
  }
  $.totalStorage.setItem("stat_sat",Math.round(satisfaction/employeeInformation.length));//satisfactionscore
  $.totalStorage.setItem("stat_talent",Math.round(talent/employeeInformation.length));//talentscore
  $.totalStorage.setItem("stat_product",Math.round((2*(talent/3)+parseInt(satisfaction/3))));//randomly influenced productscore
  $.totalStorage.setItem("emp", employeeInformation);
  employeeInformation=$.totalStorage.getItem("emp");
  alert('Employee got fired! new value for key emp: '+employeeInformation+";");
}

function fireInv(){
  var rounds=$.totalStorage.getItem("counter")-investorInformation[currentInvPosition][4];
  var tax=Math.floor((rounds/seconds)*investorInformation[currentInvPosition][3]*0.04);
  alert("-"+investorInformation[currentInvPosition][3]+"$ Investment Offer\n\
 -"+tax+"$ tax");
  $.totalStorage.setItem("stat_equity", $.totalStorage.getItem("stat_equity")+parseInt(investorInformation[currentInvPosition][2]));
  $.totalStorage.setItem("stat_budget",$.totalStorage.getItem("stat_budget")-parseInt(investorInformation[currentInvPosition][3])-parseInt(tax));
  investorInformation.splice(currentInvPosition,1);
  $.totalStorage.setItem("inv", investorInformation);
  investorInformation=$.totalStorage.getItem("inv");
  alert('Investor got fired! new value for key inv '+investorInformation+";");
}

function investorDeny(type,pic,name,skill,salary){
  if(type==1){
    var deny=false;
    for(var i=0; i<investorInformation.length;i++){
      if(Math.random()>0.95){
        deny=true;
        break;
      }
    }
    if(deny==false)
      hireEmployee(pic, name, skill, salary)
  }else{
    
  }
}