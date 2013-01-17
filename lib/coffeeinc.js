// array to store employee information
var employeeInformation=[];
//variables for employee profile infos
var empPicId=1;
var empSkill=0;
var empSat=0;
var empSalary=0;
var empName="";
//variables for hiring employee view
var empHiringPicId1=1,empHiringPicId2=1,empHiringPicId3=1,empHiringPicId4=1;
var randomEmpHiringSkill1=0,randomEmpHiringSkill2=0,randomEmpHiringSkill3=0,randomEmpHiringSkill4=0;
var randomEmpHiringSalary1=0,randomEmpHiringSalary2=0,randomEmpHiringSalary3=0,randomEmpHiringSalary4=0;
//variable for employee profile and firing
var currentEmpPosition=0;

//array to sore inverstor information
var investorInformation=[];
//variables for employee profile
var invPicId=1;
var invName="Default";
var invOffer=0;
var invEquity=0;
//variables for getting investor view
var randomInvPicId1=1,randomInvPicId2=1,randomInvPicId3=1,randomInvPicId4=1;
var randomInvOffer1=0,randomInvOffer2=0,randomInvOffer3=0,randomInvOffer4=0;
var randomInvEquity1=0,randomInvEquity2=0,randomInvEquity3=0,randomInvEquity4=0;
//variable for employee profile and firing
var currentInvPosition=0;

//function that returns 1 if input is 0
function notNull(value){
  if(value!=0)
    return value;
  else
    return 1;
}

function paintEmpField(){
  for(var x=0; x<9; x++){
    document.getElementById("empPic"+x).src="/CoffeeInc2/assets/empty.svg";
    document.getElementById("empPic"+x).className="add_button";
    document.getElementById("emp"+x).removeAttribute("href");
  }
  if(employeeInformation.length<=10){
    for(var i = 0; i < employeeInformation.length; i++){
      if(employeeInformation[i][0]!=0){
        document.getElementById("empPic"+i).setAttribute("src","/CoffeeInc2/assets/emp_d_" + employeeInformation[i][0] + "_1.svg");
        document.getElementById("empPic"+i).className="emp";
        document.getElementById("emp"+i).setAttribute("href","#employee_profile");
      }else{
        if(i<9){
          document.getElementById("empPic"+i).setAttribute("src","/CoffeeInc2/assets/add.png");
          document.getElementById("empPic"+i).className="add add_button";
          document.getElementById("emp"+i).setAttribute("href","#employee_hire");
        }
      }
    }
  }
  generateNewEmp();
  updateHeader();
  window.setTimeout(rotateToNewEmpPic, 1);
}

function paintInvField(){
  for(var x=0; x<9; x++){
    document.getElementById("invPic"+x).src="/CoffeeInc2/assets/empty.svg";
    document.getElementById("invPic"+x).className="add_button";
    document.getElementById("inv"+x).removeAttribute("href");
  }
  if(investorInformation.length<=10){
    for(var i = 0; i < investorInformation.length; i++){
      if(investorInformation[i][0]!=0){
        document.getElementById("invPic"+i).setAttribute("src", "/CoffeeInc2/assets/inv_d_" + investorInformation[i][0] + ".svg");
        document.getElementById("invPic"+i).className="inv";
        document.getElementById("inv"+i).setAttribute("href","#invsetor_profile");
      }else{
        if(i<9){
          document.getElementById("invPic"+i).setAttribute("src", "/CoffeeInc2/assets/add.png");
          document.getElementById("invPic"+i).className="add_button";
          document.getElementById("inv"+i).setAttribute("href","#investment");
        }
      }
    }
  }
  generateNewInv();
  updateHeader();
}

function generateNewEmp(){
  randomEmpHiringSkill1=parseInt(5)+Math.round((parseInt(notNull($.totalStorage.getItem("stat_talent"))/2)+parseInt(notNull($.totalStorage.getItem("stat_sat"))/2)*(Math.random()+0.5)));
  randomEmpHiringSalary1=parseInt(50)+Math.round((parseInt(notNull($.totalStorage.getItem("fixedCost")))/2+randomEmpHiringSkill3/parseInt(notNull($.totalStorage.getItem("stat_talent")))/2)*(Math.random()+0.5));
  
  randomEmpHiringSkill2=parseInt(5)+Math.round((parseInt(notNull($.totalStorage.getItem("stat_talent"))/2)+parseInt(notNull($.totalStorage.getItem("stat_sat"))/2)*(Math.random()+0.5)));
  randomEmpHiringSalary2=parseInt(50)+Math.round((parseInt(notNull($.totalStorage.getItem("fixedCost")))/2+randomEmpHiringSkill3/parseInt(notNull($.totalStorage.getItem("stat_talent")))/2)*(Math.random()+0.5));
  
  randomEmpHiringSkill3=parseInt(5)+Math.round((parseInt(notNull($.totalStorage.getItem("stat_talent"))/2)+parseInt(notNull($.totalStorage.getItem("stat_sat"))/2)*(Math.random()+0.5)));
  randomEmpHiringSalary3=parseInt(50)+Math.round((parseInt(notNull($.totalStorage.getItem("fixedCost")))/2+randomEmpHiringSkill3/parseInt(notNull($.totalStorage.getItem("stat_talent")))/2)*(Math.random()+0.5));
  
  randomEmpHiringSkill4=parseInt(5)+Math.round((parseInt(notNull($.totalStorage.getItem("stat_talent"))/2)+parseInt(notNull($.totalStorage.getItem("stat_sat"))/2)*(Math.random()+0.5)));
  randomEmpHiringSalary4=parseInt(50)+Math.round((parseInt(notNull($.totalStorage.getItem("fixedCost")))/2+randomEmpHiringSkill3/parseInt(notNull($.totalStorage.getItem("stat_talent")))/2)*(Math.random()+0.5));
  
  var randomNumber=Math.floor(Math.random()*4)+1;
  empHiringPicId1=randomNumber;
  if(randomNumber==4)
    randomNumber=1;
  else
    randomNumber++;
  empHiringPicId2=randomNumber;
  if(randomNumber==4)
    randomNumber=1;
  else
    randomNumber++;
  empHiringPicId3=randomNumber;
  if(randomNumber==4)
    randomNumber=1;
  else
    randomNumber++;
  empHiringPicId4=randomNumber;
  
  document.getElementById("empHirePic1").src="/CoffeeInc2/assets/emp_"+empHiringPicId1+".svg";
  document.getElementById("empHirePic2").src="/CoffeeInc2/assets/emp_"+empHiringPicId2+".svg";
  document.getElementById("empHirePic3").src="/CoffeeInc2/assets/emp_"+empHiringPicId3+".svg";
  document.getElementById("empHirePic4").src="/CoffeeInc2/assets/emp_"+empHiringPicId4+".svg";
  
  document.getElementById("newEmpPicId1").value=empHiringPicId1;
  document.getElementById("newEmpPicId2").value=empHiringPicId2;
  document.getElementById("newEmpPicId3").value=empHiringPicId3;
  document.getElementById("newEmpPicId4").value=empHiringPicId4;
  
  document.getElementById("newEmpSkill1").value=randomEmpHiringSkill1;
  document.getElementById("newEmpSkill2").value=randomEmpHiringSkill2;
  document.getElementById("newEmpSkill3").value=randomEmpHiringSkill3;
  document.getElementById("newEmpSkill4").value=randomEmpHiringSkill4;
  
  document.getElementById("newEmpSalary1").value=randomEmpHiringSalary1;
  if(randomEmpHiringSalary1>=$.totalStorage.getItem("stat_budget"))
    document.getElementById("newEmpSalary1").style.color="red";
  else
    document.getElementById("newEmpSalary1").style.color="black";
  
  document.getElementById("newEmpSalary2").value=randomEmpHiringSalary2;
  if(randomEmpHiringSalary2>=$.totalStorage.getItem("stat_budget"))
    document.getElementById("newEmpSalary2").style.color="red";
  else
    document.getElementById("newEmpSalary2").style.color="black";
  
  document.getElementById("newEmpSalary3").value=randomEmpHiringSalary3;
  if(randomEmpHiringSalary3>=$.totalStorage.getItem("stat_budget"))
    document.getElementById("newEmpSalary3").style.color="red";
  else
    document.getElementById("newEmpSalary3").style.color="black";
  
  document.getElementById("newEmpSalary4").value=randomEmpHiringSalary4;
  if(randomEmpHiringSalary4>=$.totalStorage.getItem("stat_budget"))
    document.getElementById("newEmpSalary4").style.color="red";
  else
    document.getElementById("newEmpSalary4").style.color="black";
}

function generateNewInv(){
  var avEquity=0;
  var avOffer=0;
  var inc=100;
  var budget=$.totalStorage.getItem("stat_budget");
  var fixedCost=$.totalStorage.getItem("fixedCost");
  investorInformation.pop();
  for(var i=0; i<investorInformation.length;i++){
    avEquity=parseInt(avEquity)+investorInformation[i][2];
    avOffer=parseInt(avOffer)+investorInformation[i][3];
  }
  avEquity=parseInt(avEquity)/notNull(investorInformation.length);
  avOffer=parseInt(avOffer)/notNull(investorInformation.length);
  if(avEquity==0){
    avOffer=1000;
    inc=0;
    avEquity=1;
    budget=1000;
    fixedCost=Math.round(Math.random()*1000);
  }
  randomInvEquity1=Math.round((($.totalStorage.getItem("stat_equity")-(100-$.totalStorage.getItem("stat_equity")))/2-1)*Math.random());
  randomInvOffer1=Math.round((avOffer+(1*inc))*(randomInvEquity1/avEquity));//*(budget/fixedCost));
  
  randomInvEquity2=Math.round((($.totalStorage.getItem("stat_equity")-(100-$.totalStorage.getItem("stat_equity")))/2-1)*Math.random());
  randomInvOffer2=Math.round((avOffer+(2*inc))*(randomInvEquity2/avEquity));//*(budget/fixedCost));
  
  randomInvEquity3=Math.round((($.totalStorage.getItem("stat_equity")-(100-$.totalStorage.getItem("stat_equity")))/2-1)*Math.random());
  randomInvOffer3=Math.round((avOffer+(3*inc))*(randomInvEquity3/avEquity));//*(budget/fixedCost));
  
  randomInvEquity4=Math.round((($.totalStorage.getItem("stat_equity")-(100-$.totalStorage.getItem("stat_equity")))/2-1)*Math.random());
  randomInvOffer4=Math.round((avOffer+(4*inc))*(randomInvEquity4/avEquity));//*(budget/fixedCost));
  
  var randomNumber=Math.floor(Math.random()*4)+1;
  randomInvPicId1=randomNumber;
  if(randomNumber==4)
    randomNumber=1;
  else
    randomNumber++;
  randomInvPicId2=randomNumber;
  if(randomNumber==4)
    randomNumber=1;
  else
    randomNumber++;
  randomInvPicId3=randomNumber;
  if(randomNumber==4)
    randomNumber=1;
  else
    randomNumber++;
  randomInvPicId4=randomNumber;
  
  document.getElementById("invHirePic1").src="/CoffeeInc2/assets/inv_"+randomInvPicId1+".svg";
  document.getElementById("invHirePic2").src="/CoffeeInc2/assets/inv_"+randomInvPicId2+".svg";
  document.getElementById("invHirePic3").src="/CoffeeInc2/assets/inv_"+randomInvPicId3+".svg";
  document.getElementById("invHirePic4").src="/CoffeeInc2/assets/inv_"+randomInvPicId4+".svg";
  
  document.getElementById("newInvPicId1").value=randomInvPicId1;
  document.getElementById("newInvPicId2").value=randomInvPicId2;
  document.getElementById("newInvPicId3").value=randomInvPicId3;
  document.getElementById("newInvPicId4").value=randomInvPicId4;
  
  document.getElementById("newInvOffer1").value=randomInvOffer1;
  document.getElementById("newInvOffer2").value=randomInvOffer2;
  document.getElementById("newInvOffer3").value=randomInvOffer3;
  document.getElementById("newInvOffer4").value=randomInvOffer4;
  
  document.getElementById("newInvEquity1").value=randomInvEquity1;
  document.getElementById("newInvEquity2").value=randomInvEquity2;
  document.getElementById("newInvEquity3").value=randomInvEquity3;
  document.getElementById("newInvEquity4").value=randomInvEquity4;
  
  investorInformation.push([0,0,0,0,0,0]);
}

function changeEmpProfileInfo (pos) {
  if(employeeInformation.length>1){
    empPicId=employeeInformation[pos][0];
    if(empPicId!=0){
      empName=employeeInformation[pos][1];
      empSkill=employeeInformation[pos][2];
      empSat=employeeInformation[pos][4];
      empSalary=employeeInformation[pos][6];

      document.getElementById('emp_profile_pic').src="/CoffeeInc2/assets/emp_"+empPicId+".svg";
      document.getElementById("empProfileName").value=empName;
      document.getElementById('empProfileSkill').innerHTML="Skill: "+empSkill;
      document.getElementById('empProfileSat').innerHTML="Satisfaction: "+empSat;
      document.getElementById('empProfileSalary').innerHTML="Salary: "+empSalary;

      add=0;
      if(empSkill<2)
        add=2;
      Lungo.Element.progress("#empProgressProfileSkill",parseInt(empSkill)+parseInt(add),false);
      add=0;
      if(empSat<2)
        add=2;
      Lungo.Element.progress("#empProgressProfileSat",parseInt(empSat)+parseInt(add),false);
      add=0;
      if(empSalary<60)
        add=2;
      Lungo.Element.progress("#empProgressProfileSalary",Math.round(empSalary/25)+parseInt(add),false);
      currentEmpPosition=pos;
    }
  }
}

function changeInvProfileInfo (pos) {
  if(investorInformation.length>1){
    invPicId=investorInformation[pos][0];
    alert(invPicId+" "+pos);
    if(empPicId!=0){
      invName=investorInformation[pos][1];
      invEquity=investorInformation[pos][2];
      invOffer=investorInformation[pos][3];

      document.getElementById('inv_profile_pic').src="/CoffeeInc2/assets/inv_"+invPicId+".svg";
      document.getElementById("invProfileName").value=invName;
      document.getElementById('invProfileEquity').innerHTML="Equity: "+invEquity+"%";
      document.getElementById('invProfileOffer').innerHTML="Investment: "+invOffer;

      Lungo.Element.progress("#invProgressProfileEquity",invEquity,false);
      Lungo.Element.progress("#invProgressProfileOffer",Math.round(invOffer/1000),false);
      currentInvPosition=pos;
    }
  }
}

function decSalary(){
  var minSalary=employeeInformation[currentEmpPosition][5];
  var minus=125;
  var maxSalary=0;
  var maxSat=0;
  if(empSalary-minus>=minSalary){
    maxSalary=2500;
    maxSat=50;
    empSalary=parseInt(empSalary)-parseInt(minus);
    incsat=Math.floor((parseInt(Math.abs(maxSalary-parseInt(minSalary)))-parseInt(empSalary))/notNull(maxSat));
    empSat=parseInt(parseInt(50+maxSat-incsat));
  }else{
    maxSat=0;
    maxSalary=0;
    if(empSalary>minSalary){
      minus=empSalary-minSalary;
      empSalary=parseInt(empSalary)-parseInt(minus);
      empSat=50;
    }else{
      minus=Math.round(minSalary/5);
      empSalary=parseInt(empSalary)-parseInt(minus);
      empSat=parseInt(empSat-10);
    }
  }
  if(parseInt(empSat)<0)
    empSat=0;
  if(parseInt(empSalary)<0){
    $.totalStorage.setItem("fixedCost",$.totalStorage.getItem("fixedCost")-parseInt(0-empSalary));
    empSalary=0;
  }else
    $.totalStorage.setItem("fixedCost",$.totalStorage.getItem("fixedCost")-parseInt(minus));
  employeeInformation[currentEmpPosition][6]=empSalary;
  employeeInformation[currentEmpPosition][4]=empSat;
  $.totalStorage.setItem("emp", employeeInformation);
  document.getElementById('empProfileSat').innerHTML="Satisfaction: "+empSat;
  add=0;
  if(empSat<2)
    add=2;
  Lungo.Element.progress("#empProgressProfileSat",empSat+add,false);
  document.getElementById('empProfileSalary').innerHTML="Salary: "+empSalary;
  add=0;
  if(empSalary<60)
    add=2;
  Lungo.Element.progress("#empProgressProfileSalary",Math.round(empSalary/25)+add,false);
  employeeInformation.pop();
  var talent=0;
  var satisfaction=0;
  for(i = 0; i < employeeInformation.length; i++){
    talent=parseInt(talent)+parseInt(employeeInformation[i][2]);
    satisfaction=parseInt(satisfaction)+parseInt(employeeInformation[i][4]);
  }
  satisfaction=Math.round(satisfaction/employeeInformation.length);//satisfactionscore
  talent=Math.round(talent/employeeInformation.length);//talentscore
  $.totalStorage.setItem("stat_talent", talent);
  $.totalStorage.setItem("stat_sat", satisfaction);
  updateHeader();
  employeeInformation.push([0,0,0,0,0,0,0]);
}

function incSalary(){
  var minSalary=employeeInformation[currentEmpPosition][5];
  var plus=Math.round(minSalary/5);
  var maxSalary=0;
  var maxSat=0;
  if(empSalary+plus<=minSalary){
    maxSalary=0;
    maxSat=0;
    empSalary=parseInt(empSalary)+parseInt(plus);
    empSat=parseInt(empSat+10);
  }else{
    maxSat=50;
    maxSalary=2500;
    plus=125;
    empSalary=parseInt(empSalary)+parseInt(plus);
    incsat=Math.floor((parseInt(Math.abs(maxSalary-parseInt(minSalary)))-parseInt(empSalary))/maxSat);
    empSat=parseInt(parseInt(50+maxSat-incsat));
  }
  if(empSat>100)
    empSat=100;
  if(parseInt(empSalary)>2500){
    $.totalStorage.setItem("fixedCost",$.totalStorage.getItem("fixedCost")+parseInt(empSalary-2500));
    empSalary=2500;
  }else
    $.totalStorage.setItem("fixedCost",$.totalStorage.getItem("fixedCost")+parseInt(plus));
  employeeInformation[currentEmpPosition][6]=empSalary;
  employeeInformation[currentEmpPosition][4]=empSat;
  $.totalStorage.setItem("emp", employeeInformation);
  document.getElementById('empProfileSat').innerHTML="Satisfaction: "+empSat;
  add=0;
  if(empSat<2)
    add=2;
  Lungo.Element.progress("#empProgressProfileSat",empSat+add,false);
  document.getElementById('empProfileSalary').innerHTML="Salary: "+empSalary;
  add=0;
  if(empSalary<60)
    add=2;
  Lungo.Element.progress("#empProgressProfileSalary",Math.round(empSalary/25)+add,false);
  employeeInformation.pop();
  var talent=0;
  var satisfaction=0;
  for(i = 0; i < employeeInformation.length; i++){
    talent=parseInt(talent)+parseInt(employeeInformation[i][2]);
    satisfaction=parseInt(satisfaction)+parseInt(employeeInformation[i][4]);
  }
  satisfaction=Math.round(satisfaction/employeeInformation.length);//satisfactionscore
  talent=Math.round(talent/employeeInformation.length);//talentscore
  $.totalStorage.setItem("stat_talent", talent);
  $.totalStorage.setItem("stat_sat", satisfaction);
  updateHeader();
  employeeInformation.push([0,0,0,0,0,0,0]);
}

function updateHeader(){
  document.getElementById("stat_product").value=$.totalStorage.getItem("stat_product");
  document.getElementById("stat_talent").value=$.totalStorage.getItem("stat_talent");
  document.getElementById("stat_sat").value=$.totalStorage.getItem("stat_sat");
  document.getElementById("stat_equity").value=$.totalStorage.getItem("stat_equity");
  document.getElementById("stat_budget").value=$.totalStorage.getItem("stat_budget");
}

function rotateToNewEmpPic () {
  var timeout=Math.floor(Math.random()*3000)+1;
  var pic=0;
  for(var i=0;i<employeeInformation.length;i++){
    if(employeeInformation[i][0]>0){
      pic=Math.floor(Math.random()*4)+2;
      document.getElementById("empPic"+i).src="/CoffeeInc2/assets/emp_d_" + employeeInformation[i][0] + "_"+pic+".svg";
    }
  }
  window.setTimeout(rotateToOldEmpPic, timeout);
}

function rotateToOldEmpPic () {
  var timeout=Math.floor(Math.random()*3000)+1;
  for(var i=0;i<employeeInformation.length;i++){
    if(employeeInformation[i][0]>0){
      document.getElementById("empPic"+i).src="/CoffeeInc2/assets/emp_d_" + employeeInformation[i][0] + "_1.svg";
    }
  }
  window.setTimeout(rotateToNewEmpPic, timeout);
}

function hireEmployee(Pic,Name,Skill,Salary){
  var key="emp";
  var satisfaction=0;
  var talent=0;
  
  employeeInformation.pop();
  //inc satisfaction of each employee when a new one get hired
  satInc=Math.floor((Math.random()*1.6+0.2)*5);
  for(var i=0;i<employeeInformation.length;i++){
    employeeInformation[i][2]=parseInt(employeeInformation[i][2])+parseInt(satInc);
  }
  employeeInformation.push([Pic,Name,Skill,5,50,Salary,Salary]);
  if(employeeInformation.length>1)
    $.totalStorage.setItem("fixedCost", $.totalStorage.getItem("fixedCost")+parseInt(Salary));
  else
    $.totalStorage.setItem("fixedCost", Salary);
  alert('Saved value for ' + key+": "+employeeInformation);//val);
  //calculate the variables to change statusbar
  for(i = 0; i < employeeInformation.length; i++){
    talent=parseInt(talent)+parseInt(employeeInformation[i][2]);
    satisfaction=parseInt(satisfaction)+parseInt(employeeInformation[i][4]);
  }
  satisfaction=Math.round(satisfaction/employeeInformation.length);//satisfactionscore
  talent=Math.round(talent/employeeInformation.length);//talentscore
  $.totalStorage.setItem("stat_talent", talent);
  $.totalStorage.setItem("stat_sat", satisfaction);
  
  employeeInformation.push([0,0,0,0,0,0,0]);
  var val = employeeInformation;
  $.totalStorage(key, val);
  
  paintEmpField();
}

function hireInvestor(Pic,Name,Equity,Offer){
  var key="inv";
  investorInformation.pop();
  
  investorInformation.push([Pic,Name,Equity,Offer,$.totalStorage.getItem("counter"),Math.round(Math.random()*10)]);
  $.totalStorage.setItem("stat_budget", parseInt($.totalStorage.getItem("stat_budget"))+parseInt(Offer));
  $.totalStorage.setItem("stat_equity", parseInt($.totalStorage.getItem("stat_equity"))-parseInt(Equity));
  
  alert('Saved value for ' + key+": "+investorInformation);//val);
  investorInformation.push([0,0,0,0,0,0]);
  
  var val = investorInformation;
  $.totalStorage(key, val);
  
  paintInvField();
}
