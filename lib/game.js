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
    var incSkill=0;
    employeeInformation.pop();
    for(i = 0; i < employeeInformation.length; i++){
      if(Math.round(employeeInformation[i][4]/100)>0){
        incSkill=Math.round((employeeInformation[i][3]/10+employeeInformation[i][4]/100)*Math.random()*1.3+1);
      }else
        incSkill=0;
      employeeInformation[i][2]=parseInt(employeeInformation[i][2])+parseInt(incSkill);
      if(employeeInformation[i][2]>100)
        employeeInformation[i][2]=100;
      talent=parseInt(talent)+parseInt(employeeInformation[i][2]);
      satisfaction=parseInt(satisfaction)+parseInt(employeeInformation[i][4]);
      budget=parseInt(budget)+parseInt(employeeInformation[i][6]);
    }
    satisfaction=Math.round(satisfaction/employeeInformation.length);//satisfactionscore
    talent=Math.round(talent/employeeInformation.length);//talentscore
    product=0+Math.round(((budget/(2500*employeeInformation.length))+(2*(talent/3)+parseInt(satisfaction/3))/10)*1.6-2.2);//randomly influenced productscore
    if(product<0)
      product=0;
    if(product>5)
      product=5;
    $.totalStorage.setItem("stat_product", $.totalStorage.getItem("stat_product")+parseInt(product));
    $.totalStorage.setItem("stat_old_budget", $.totalStorage.getItem("stat_budget"));
    $.totalStorage.setItem("stat_budget", $.totalStorage.getItem("stat_budget")-parseInt(budget));
    if($.totalStorage.getItem("stat_budget")<=0){
      $.totalStorage.setItem("stat_budget", 0);
      updateHeader();
      alert("GAME OVER!\nYou ran out of money and are now bankrupt. But don't worry! It is so easy to get VC these days that you will surely succeed next time. Try again!");
      newGame();
    }
    if($.totalStorage.getItem("stat_product")>=100){
      $.totalStorage.setItem("stat_product", 100);
      updateHeader();
      alert("YOU WIN!\nYour prodcut has reached a level of quality that will allow you to build a solid buisness.");
      newGame();
    }
    updateHeader();
    employeeInformation.push([0,0,0,0,0,0,0]);
  }
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
  $.totalStorage.setItem("fixedCost",0);
  $.totalStorage.setItem("stat_budget", 500);
  $.totalStorage.setItem("stat_equity",100);
  $.totalStorage.setItem("counter",0);
  counts=0;
  alert('New Game');
  window.setTimeout("location.reload(true);",0);
}

function fireEmp(){
  $.totalStorage.setItem("fixedCost",$.totalStorage.getItem("fixedCost")-parseInt(employeeInformation[currentEmpPosition][6]));
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
  //alert('Employee got fired! new value for key emp: '+employeeInformation+";");
  paintEmpField();
}

function fireInv(){
  var rounds=$.totalStorage.getItem("counter")-investorInformation[currentInvPosition][4];
  var tax=Math.floor((rounds/seconds)*investorInformation[currentInvPosition][3]*0.02);
  alert("-"+investorInformation[currentInvPosition][3]+"$ Investment Offer\n\
-"+tax+"$ tax");
  $.totalStorage.setItem("stat_equity", parseInt($.totalStorage.getItem("stat_equity"))+parseInt(investorInformation[currentInvPosition][2]));
  $.totalStorage.setItem("stat_budget",parseInt($.totalStorage.getItem("stat_budget"))-parseInt(investorInformation[currentInvPosition][3])-parseInt(tax));
  investorInformation.splice(currentInvPosition,1);
  $.totalStorage.setItem("inv", investorInformation);
  investorInformation=$.totalStorage.getItem("inv");
  //alert('Investor got fired! new value for key inv '+investorInformation+";");
  paintInvField();
}

function investorDeny(type,pic,name,skill,salary){
  investorInformation.pop();
  var length=investorInformation.length;
  investorInformation.push([0,0,0,0,0,0]);

  if(type==1){// employee hiring
    var deny=false;
    for(var i=0; i<length;i++){
      if((Math.random()+investorInformation[i][5]/10-0.2)>0.95){
        alert("Investor "+investorInformation[i][1]+" has denied this, just because he can. Perhaps you should get rid of him and find some kinder investors.");
        deny=true;
        break;
      }
    }
    if(deny==false)
      hireEmployee(pic, name, skill, salary);
    else
      generateNewEmp();
  }else{
    deny=false;
    for(i=0; i<length;i++){
      if((Math.random()+investorInformation[i][5]/10-0.8)>0.95){
        alert("Investor "+investorInformation[i][1]+" has denied this, just because he can. Perhaps you should get rid of him and find some kinder investors.");
        deny=true;
        break;
      }
    }
    if(deny==false)
      hireInvestor(pic, name, skill, salary);
    else
      generateNewInv();
  }
}

function about() {
  alert("This simple, hacky game has been built by:\n\nJulian Gorfer\nTobias Bernard\nGianluca Stivan\nStefano Mich\nJulian Gruber\n\nfor Pekka Abrahamsson\'s Management Engineering class in 2012/2013.\n\nAll code and artwork is released under the GNU GPLv3 or later and available on Github (https://github.com/CoffeeLabs).");
}
