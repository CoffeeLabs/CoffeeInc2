// array to store employee information
var employeeInformation=[];
//variables for employee profile infos
var empPicId=1;
var empSkill=0;
var empSat=0;
var empSalary=0;
var empName="";
//variables for hiring view
var empHiringPicId1=1,empHiringPicId2=1,empHiringPicId3=1,empHiringPicId4=1;
var randomEmpHiringSkill1=0,randomEmpHiringSkill2=0,randomEmpHiringSkill3=0,randomEmpHiringSkill4=0;
var randomEmpHiringSat1=0,randomEmpHiringSat2=0,randomEmpHiringSat3=0,randomEmpHiringSat4=0;
var randomEmpHiringSalary1=0,randomEmpHiringSalary2=0,randomEmpHiringSalary3=0,randomEmpHiringSalary4=0;
//variable for employee profile and firing
var currentEmpPosition=0;

//array to sore inverstor information
var investorInformation=[];
//variables for employee profile
var invPicId=1;
var invName="Default";
var invSkill=0;
var invSat=0;
var invSalary=0;

function notNull(value){
  if(value!=0)
    return value;
  else
    return 1;
}

function paintEmpField(){
  for(var i = 0; i < employeeInformation.length; i++){
    if(employeeInformation[i][0]!=0){
      document.getElementById("empPic"+i).setAttribute("src", "/CoffeeInc2/assets/emp_d_" + employeeInformation[i][0] + "_1.svg");
      document.getElementById("emp"+i).setAttribute("href","#employee_profile");
      document.getElementById("empPic"+i).className="emp";
    }else{
      document.getElementById("empPic"+i).setAttribute("src", "/CoffeeInc2/assets/add.png");
      document.getElementById("empPic"+i).className="add add_button";
      document.getElementById("emp"+i).setAttribute("href","#employee_hire");
    }
  }
  generateNewEmp();
  updateHeader();
//  window.setTimeout(rotateToNewEmpPic, 1);
}

function paintInvField(){
  for(var i = 0; i < investorInformation.length; i++){
    if(investorInformation[i][0]!=0){
      document.getElementById("invPic"+i).setAttribute("src", "/CoffeeInc2/assets/inv_d_" + investorInformation[i][0] + "_1.svg");
      document.getElementById("inv"+i).setAttribute("href","#investor_profile");
      document.getElementById("invPic"+i).className="inv";
    }else{
      document.getElementById("invPic"+i).setAttribute("src", "/CoffeeInc2/assets/add.png");
      document.getElementById("invPic"+i).className="add add_button";
      document.getElementById("inv"+i).setAttribute("href","#investment");
    }
  }
  alert(investorInformation);
  //generateNewEmp();
  updateHeader();
//  window.setTimeout(rotateToNewEmpPic, 1);
}

function generateNewEmp(){
  randomEmpHiringSkill1=Math.floor(((($.totalStorage.getItem("stat_talent"))/2)+(5*($.totalStorage.getItem("stat_sat")+10)/2))*(Math.random()+0.5));
  randomEmpHiringSat1=Math.floor(Math.random()*50)+10;
  randomEmpHiringSalary1=Math.floor(((parseInt($.totalStorage.getItem("avSalary"))/2)+(randomEmpHiringSkill1/parseInt(notNull($.totalStorage.getItem("stat_talent")))/2))*(Math.random()+0.5));
  
  randomEmpHiringSkill2=Math.floor((($.totalStorage.getItem("stat_talent")/2)+(5*($.totalStorage.getItem("stat_sat")+10)/2))*(Math.random()+0.5));
  randomEmpHiringSat2=Math.floor(Math.random()*50)+10;
  randomEmpHiringSalary2=Math.floor(((parseInt($.totalStorage.getItem("avSalary"))/2)+(randomEmpHiringSkill2/parseInt(notNull($.totalStorage.getItem("stat_talent")))/2))*(Math.random()+0.5));
  
  randomEmpHiringSkill3=Math.floor((($.totalStorage.getItem("stat_talent")/2)+(5*($.totalStorage.getItem("stat_sat")+10)/2))*(Math.random()+0.5));
  randomEmpHiringSat3=Math.floor(Math.random()*50)+10;
  randomEmpHiringSalary3=Math.floor(((parseInt($.totalStorage.getItem("avSalary"))/2)+(randomEmpHiringSkill3/parseInt(notNull($.totalStorage.getItem("stat_talent")))/2))*(Math.random()+0.5));
  
  randomEmpHiringSkill4=Math.floor((($.totalStorage.getItem("stat_talent")/2)+(5*($.totalStorage.getItem("stat_sat")+10)/2))*(Math.random()+0.5));
  randomEmpHiringSat4=Math.floor(Math.random()*50)+10;
  randomEmpHiringSalary4=Math.floor(((parseInt($.totalStorage.getItem("avSalary"))/2)+(randomEmpHiringSkill4/parseInt(notNull($.totalStorage.getItem("stat_talent")))/2))*(Math.random()+0.5));
  
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
  
  document.getElementById("hirePic1").src="/CoffeeInc2/assets/emp_"+empHiringPicId1+".svg";
  document.getElementById("hirePic2").src="/CoffeeInc2/assets/emp_"+empHiringPicId2+".svg";
  document.getElementById("hirePic3").src="/CoffeeInc2/assets/emp_"+empHiringPicId3+".svg";
  document.getElementById("hirePic4").src="/CoffeeInc2/assets/emp_"+empHiringPicId4+".svg";
  
  document.getElementById("newEmpPicId1").value=empHiringPicId1;
  document.getElementById("newEmpPicId2").value=empHiringPicId2;
  document.getElementById("newEmpPicId3").value=empHiringPicId3;
  document.getElementById("newEmpPicId4").value=empHiringPicId4;
  
  document.getElementById("newEmpSkill1").value=randomEmpHiringSkill1;
  document.getElementById("newEmpSkill2").value=randomEmpHiringSkill2;
  document.getElementById("newEmpSkill3").value=randomEmpHiringSkill3;
  document.getElementById("newEmpSkill4").value=randomEmpHiringSkill4;
  
  document.getElementById("newEmpSat1").value=randomEmpHiringSat1;
  document.getElementById("newEmpSat2").value=randomEmpHiringSat2;
  document.getElementById("newEmpSat3").value=randomEmpHiringSat3;
  document.getElementById("newEmpSat4").value=randomEmpHiringSat4;
  
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

function changeEmpProfileInfo (pos) {
  var empPicId=employeeInformation[pos][0];
  var empName=employeeInformation[pos][1];
  var empSkill=employeeInformation[pos][2];
  var empSat=employeeInformation[pos][4];
  var empSalary=employeeInformation[pos][6];
  
  document.getElementById("empProfileName").setAttribute("data-title", empName);
  document.getElementById('emp_profile_pic').src="/CoffeeInc2/assets/emp_"+empPicId+".svg";
  document.getElementById('empProfileSkill').innerHTML="Skill: "+empSkill;
  document.getElementById('empProfileSat').innerHTML="Satisfaction: "+empSat;
  document.getElementById('empProfileSalary').innerHTML="Salary: "+empSalary;
  
  for(var i = 0; i<100;i++){
    if(i<empSkill)
      document.getElementById('progressBarSkill'+i).style.backgroundColor="#2daebf";
    else
      document.getElementById('progressBarSkill'+i).style.backgroundColor="lightgrey";
  }
  for(i = 0; i<100;i++){
    if(i<empSat)
      document.getElementById('progressBarSat'+i).style.backgroundColor="#2daebf";
    else
      document.getElementById('progressBarSat'+i).style.backgroundColor="lightgrey";
  }
  for(i = 0; i<80;i++){
    if((i*31)<=empSalary)
      document.getElementById('progressBarSalary'+i).style.backgroundColor="#2daebf";
    else
      document.getElementById('progressBarSalary'+i).style.backgroundColor="lightgrey";
  }
  currentEmpPosition=pos;
}

function decSalary(){
  empSalary=parseInt(empSalary)-parseInt(31);
  if(parseInt(empSalary)<1){
    $.totalStorage.setItem("avSalary",$.totalStorage.getItem("avSalary")-parseInt(0-empSalary));
    empSalary=1;
  }else
    $.totalStorage.setItem("avSalary",$.totalStorage.getItem("avSalary")-parseInt(31));
  empSat=Math.floor(Math.log(empSalary+1)/Math.log(2501)*100);
  if(parseInt(empSat)<1)
    empSat=1;
  employeeInformation[currentEmpPosition][6]=empSalary;
  employeeInformation[currentEmpPosition][4]=empSat;
  $.totalStorage.setItem("emp", employeeInformation);
  document.getElementById('empProfileSat').innerHTML="Satisfaction:"+empSat;
  for(i = 0; i<100;i++){
    if(i<empSat)
      document.getElementById('progressBarSat'+i).style.backgroundColor="#2daebf";
    else
      document.getElementById('progressBarSat'+i).style.backgroundColor="lightgrey";
  }
  document.getElementById('empProfileSalary').innerHTML="Salary: "+empSalary;
  for(i = 0; i<80;i++){
    if((i*31)<=empSalary)
      document.getElementById('progressBarSalary'+i).style.backgroundColor="#2daebf";
    else
      document.getElementById('progressBarSalary'+i).style.backgroundColor="lightgrey";
  }
}

function incSalary(){
  empSalary=parseInt(empSalary)+parseInt(31);
  if(parseInt(empSalary)>2500){
    $.totalStorage.setItem("avSalary",$.totalStorage.getItem("avSalary")+parseInt(empSalary-2500));
    empSalary=2500;
  }else
    $.totalStorage.setItem("avSalary",$.totalStorage.getItem("avSalary")+parseInt(31));
  empSat=Math.floor(Math.log(empSat+1)/Math.log(101)*50)+Math.floor(Math.log(empSalary+1)/Math.log(2501)*50);
  if(parseInt(empSat)>100)
    empSat=100;
  employeeInformation[currentEmpPosition][6]=empSalary;
  employeeInformation[currentEmpPosition][4]=empSat;
  $.totalStorage.setItem("emp", employeeInformation);
  document.getElementById('empProfileSat').innerHTML="Satisfaction: "+empSat;
  for(i = 0; i<100;i++){
    if(i<empSat)
      document.getElementById('progressBarSat'+i).style.backgroundColor="#2daebf";
    else
      document.getElementById('progressBarSat'+i).style.backgroundColor="lightgrey";
  }
  document.getElementById('empProfileSalary').innerHTML="Salary: "+empSalary;
  for(i = 0; i<80;i++){
    if((i*31)<empSalary)
      document.getElementById('progressBarSalary'+i).style.backgroundColor="#2daebf";
    else
      document.getElementById('progressBarSalary'+i).style.backgroundColor="lightgrey";
  }
  
}

function updateHeader(){
  document.getElementById("stat_product").value=$.totalStorage.getItem("stat_product");
  document.getElementById("stat_talent").value=$.totalStorage.getItem("stat_talent");
  document.getElementById("stat_patents").value=$.totalStorage.getItem("stat_patents");
  document.getElementById("stat_sat").value=$.totalStorage.getItem("stat_sat");
  document.getElementById("stat_invint").value=$.totalStorage.getItem("stat_invint");
  document.getElementById("stat_budget").value=$.totalStorage.getItem("stat_budget");
}

function rotateToNewEmpPic () {
  var timeout=Math.floor(Math.random()*800)+1;
  var pic=Math.floor(Math.random()*4)+2;
  for(var i=0;i<employeeInformation.length;i++){
    if(employeeInformation[i][0]>0){
      document.getElementById("empPic"+i).src="/CoffeeInc2/assets/emp_d_" + employeeInformation[i][0] + "_"+pic+".svg";
    }
  }
  window.setTimeout(rotateToOldEmpPic, timeout);
}

function rotateToOldEmpPic () {
  var timeout=Math.floor(Math.random()*800)+1;
  for(var i=0;i<employeeInformation.length;i++){
    if(employeeInformation[i][0]>0){
      document.getElementById("empPic"+i).src="/CoffeeInc2/assets/emp_d_" + employeeInformation[i][0] + "_1.svg";
    }
  }
  window.setTimeout(rotateToNewEmpPic, timeout);
}

function nextRound(){
  //variables for the statusbar infos
  var budget=0;
  var satisfaction=0;
  var talent=0;
  var patents=0;
  var product=0;
  var invint=0;
  
  if(employeeInformation.length>1){
    //pop() the last arrayElement (else it could )
    employeeInformation.pop();

    //calculate the variables to change statusbar
    for(var i = 0; i < employeeInformation.length; i++){
      talent=parseInt(talent)+parseInt(employeeInformation[i][2]);
      satisfaction=parseInt(satisfaction)+parseInt(employeeInformation[i][4]);
      budget=parseInt(budget)+parseInt(employeeInformation[i][6]);
    }
    product=Math.round((2*(talent/3)+parseInt(satisfaction/3))*(Math.random()));//randomly influenced productscore
    talent=Math.round(talent/employeeInformation.length);//talentscore
    if(patents!=100){
      for(var emp=0; emp<employeeInformation.length;emp++){
        var rand=Math.random();
        alert(rand*(employeeInformation[emp][4]/100));
        if(rand*(employeeInformation[emp][4]/100)>0.7){
          patents++;
        }
      }
    }
    satisfaction=Math.round(satisfaction/employeeInformation.length);//satisfactionscore
    invint=Math.floor(((parseInt(product)+parseInt(talent)+parseInt(satisfaction))/3)*parseInt(5/6)+parseInt(1/6)*(budget/$.totalStorage.getItem("stat_old_budget")));

    //facts for the user
    alertString="Some Facts\n\
        "+employeeInformation.length+" Employee";
    if(employeeInformation.length>1)
      alertString+="s";
    alertString+="\n\
        ";
    oldProduct=$.totalStorage.getItem("stat_product");
    if((parseInt(product)-parseInt(oldProduct))>0)
      alertString+="+";
    alertString+=(parseInt(product)-parseInt(oldProduct))+" Productscore\n\
        ";
    alertString+=patents+" Patent";
    if(patents>1 || patents==0)
      alertString+="s";
    alertString+=" achieved\n\
        ";
    oldTalent=$.totalStorage.getItem("stat_talent");
    if((parseInt(talent)-parseInt(oldTalent))>0)
      alertString+="+";
    alertString+=(parseInt(talent)-parseInt(oldTalent))+" Talentscore\n\
        ";
    oldSat=$.totalStorage.getItem("stat_sat");
    if((parseInt(satisfaction)-parseInt(oldSat))>0)
      alertString+="+";
    alertString+=(parseInt(satisfaction)-parseInt(oldSat))+" Satisfactionscore\n\
        -"+budget+"$ wages bill\n\
        ";
    oldInvInt=$.totalStorage.getItem("stat_invint");
    if((parseInt(invint)-parseInt(oldInvInt))>0)
      alertString+="+";
    alertString+=(parseInt(invint)-parseInt(oldInvInt))+" Investor Interest";
    alert(alertString);

    //change the statusbar in local storage
    $.totalStorage.setItem("stat_product", product)
    $.totalStorage.setItem("stat_talent", talent);
    $.totalStorage.setItem("stat_patents", patents);
    $.totalStorage.setItem("stat_invint", invint);
    $.totalStorage.setItem("stat_sat", satisfaction);
    $.totalStorage.setItem("stat_old_budget", $.totalStorage.getItem("stat_budget"));
    $.totalStorage.setItem("stat_budget", $.totalStorage.getItem("stat_budget")-parseInt(budget));

    //change the statusbar in the interface
    updateHeader();

    //add the last Element we pop() before
    employeeInformation.push([0,0,0,0,0,0,0]);


  /*
    * put here some code for investors and random events
    */
  }
}

function hireEmployee(empPic,empName,empSkill,empSat,empSalary){
  var key="emp";
  employeeInformation.pop();
  //inc satisfaction of each employee when a new one get hired
  satInc=Math.floor((Math.random()*1.6+0.2)*5);
  for(var i=0;i<employeeInformation.length;i++){
    employeeInformation[i][2]=parseInt(employeeInformation[i][2])+parseInt(satInc);
  }
  employeeInformation.push([empPic,empName,empSkill,5,empSat,empSalary,empSalary]);
  if(employeeInformation.length>1)
    $.totalStorage.setItem("avSalary", $.totalStorage.getItem("avSalary")+parseInt(empSalary));
  else
    $.totalStorage.setItem("avSalary", empSalary);
  alert('Saved value for ' + key+": "+employeeInformation);//val);
  employeeInformation.push([0,0,0,0,0,0,0]);
  var val = employeeInformation;
  $.totalStorage(key, val);
  paintEmpField();
  generateNewEmp();
}