$(document).ready(function(){
  employeeInformation=[];
  if($.totalStorage.getItem("emp")){
    employeeInformation=$.totalStorage.getItem("emp");
  }else{
    employeeInformation.push([0,0,0,0,0,0,0]);
    $.totalStorage("emp",employeeInformation);
  }
  investorInformation=[];
  if($.totalStorage.getItem("inv")){
    investorInformation=$.totalStorage.getItem("inv");
  }else{
    investorInformation.push([0,0,0,0,0,0]);
    $.totalStorage("inv",investorInformation);
  }
  if(!$.totalStorage.getItem("stat_product"))
    $.totalStorage.setItem("stat_product", 0);
  statusbarProduct=$.totalStorage.getItem("stat_product");
  if(!$.totalStorage.getItem("stat_talent"))
    $.totalStorage.setItem("stat_talent", 0);
  statusbarTalent=$.totalStorage.getItem("stat_talent");
  if(!$.totalStorage.getItem("stat_equity"))
    $.totalStorage.setItem("stat_equity", 100);
  statusbarEquity=$.totalStorage.getItem("stat_equity");
  if(!$.totalStorage.getItem("stat_sat"))
    $.totalStorage.setItem("stat_sat", 0);
  statusbarSatisfaction=$.totalStorage.getItem("stat_sat");
  if(!$.totalStorage.getItem("stat_invint"))
    $.totalStorage.setItem("stat_invint", 0);
  statusbarInvInt=$.totalStorage.getItem("stat_invint");
  if(!$.totalStorage.getItem("stat_old_budget"))
    $.totalStorage.setItem("stat_old_budget", 0);
  if(!$.totalStorage.getItem("stat_budget"))
    $.totalStorage.setItem("stat_budget", 10000);
  statusbarBudget=$.totalStorage.getItem("stat_budget");
  if(!$.totalStorage.getItem("fixedCost"))
    $.totalStorage.setItem("fixedCost",0);
  if(!$.totalStorage.getItem("counter"))
    $.totalStorage.setItem("counter",0);


  paintEmpField();
  paintInvField();
  game();

  function getAllEmp(){
  return $.totalStorage.getAllEmp();
  }
  function trace(m){
  try {
    console.log(m);
  } catch(e){

  }
  }
});