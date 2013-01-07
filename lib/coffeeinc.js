// array to store employee informations
var employeeInformation=[];
//variables for employee profile
var empPicId=1;
var empName="Default";
var empSkill=0;
var empSat=0;
var empSalary=0;
//variables for hiring view
var picId1=1,picId2=1,picId3=1,picId4=1;
var randomSkill1=0,randomSkill2=0,randomSkill3=0,randomSkill4=0;
var randomSat1=0,randomSat2=0,randomSat3=0,randomSat4=0;
var randomSalary1=0,randomSalary2=0,randomSalary3=0,randomSalary4=0;
//variable for employee profile and firing
var position=0;
//variables for the statusbar infos
var budget=0;
var satisfaction=0;
var talent=0;
var patents=0;
var product=0;
var invint=0;

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
//  for(var j = (employeeInformation.length+1); j < 9; j++){
//    document.getElementById("empPic"+j).src=" ";
//    document.getElementById("emp"+j).setAttribute("href","#employee_hire");
//  }
  generateNewEmp();
  updateHeader();
//  window.setTimeout(rotateToNewEmpPic, 1);
}

function generateNewEmp(){
  randomSkill1=Math.floor(((($.totalStorage.getItem("stat_talent"))/2)+(5*($.totalStorage.getItem("stat_sat")+10)/2))*(Math.random()+0.5));
  randomSat1=Math.floor(Math.random()*50)+10;
  randomSalary1=Math.floor(((parseInt($.totalStorage.getItem("avSalary"))/2)+(randomSkill1/parseInt($.totalStorage.getItem("stat_talent"))/2))*(Math.random()+0.5));
  
  randomSkill2=Math.floor((($.totalStorage.getItem("stat_talent")/2)+(5*($.totalStorage.getItem("stat_sat")+10)/2))*(Math.random()+0.5));
  randomSat2=Math.floor(Math.random()*50)+10;
  randomSalary2=Math.floor(((parseInt($.totalStorage.getItem("avSalary"))/2)+(randomSkill2/parseInt($.totalStorage.getItem("stat_talent"))/2))*(Math.random()+0.5));
  
  randomSkill3=Math.floor((($.totalStorage.getItem("stat_talent")/2)+(5*($.totalStorage.getItem("stat_sat")+10)/2))*(Math.random()+0.5));
  randomSat3=Math.floor(Math.random()*50)+10;
  randomSalary3=Math.floor(((parseInt($.totalStorage.getItem("avSalary"))/2)+(randomSkill3/parseInt($.totalStorage.getItem("stat_talent"))/2))*(Math.random()+0.5));
  
  randomSkill4=Math.floor((($.totalStorage.getItem("stat_talent")/2)+(5*($.totalStorage.getItem("stat_sat")+10)/2))*(Math.random()+0.5));
  randomSat4=Math.floor(Math.random()*50)+10;
  randomSalary4=Math.floor(((parseInt($.totalStorage.getItem("avSalary"))/2)+(randomSkill4/parseInt($.totalStorage.getItem("stat_talent"))/2))*(Math.random()+0.5));
  
  var randomNumber=Math.floor(Math.random()*4)+1;
  picId1=randomNumber;
  if(randomNumber==4)
    randomNumber=1;
  else
    randomNumber++;
  picId2=randomNumber;
  if(randomNumber==4)
    randomNumber=1;
  else
    randomNumber++;
  picId3=randomNumber;
  if(randomNumber==4)
    randomNumber=1;
  else
    randomNumber++;
  picId4=randomNumber;
    
  document.getElementById("hirePic1").src="/CoffeeInc2/assets/emp_"+picId1+".svg";
  document.getElementById("hirePic2").src="/CoffeeInc2/assets/emp_"+picId2+".svg";
  document.getElementById("hirePic3").src="/CoffeeInc2/assets/emp_"+picId3+".svg";
  document.getElementById("hirePic4").src="/CoffeeInc2/assets/emp_"+picId4+".svg";
  
  document.getElementById("newEmpPicId1").value=picId1;
  document.getElementById("newEmpPicId2").value=picId2;
  document.getElementById("newEmpPicId3").value=picId3;
  document.getElementById("newEmpPicId4").value=picId4;
  
  document.getElementById("newEmpSkill1").value=randomSkill1;
  document.getElementById("newEmpSkill2").value=randomSkill2;
  document.getElementById("newEmpSkill3").value=randomSkill3;
  document.getElementById("newEmpSkill4").value=randomSkill4;
  
  document.getElementById("newEmpSat1").value=randomSat1;
  document.getElementById("newEmpSat2").value=randomSat2;
  document.getElementById("newEmpSat3").value=randomSat3;
  document.getElementById("newEmpSat4").value=randomSat4;
  
  document.getElementById("newEmpSalary1").value=randomSalary1;
  if(randomSalary1>=$.totalStorage.getItem("stat_budget"))
    document.getElementById("newEmpSalary1").style.color="red";
  else
    document.getElementById("newEmpSalary1").style.color="black";
  
  document.getElementById("newEmpSalary2").value=randomSalary2;
  if(randomSalary1>=$.totalStorage.getItem("stat_budget"))
    document.getElementById("newEmpSalary2").style.color="red";
  else
    document.getElementById("newEmpSalary2").style.color="black";
  
  document.getElementById("newEmpSalary3").value=randomSalary3;
  if(randomSalary1>=$.totalStorage.getItem("stat_budget"))
    document.getElementById("newEmpSalary3").style.color="red";
  else
    document.getElementById("newEmpSalary3").style.color="black";
  
  document.getElementById("newEmpSalary4").value=randomSalary4;
  if(randomSalary1>=$.totalStorage.getItem("stat_budget"))
    document.getElementById("newEmpSalary4").style.color="red";
  else
    document.getElementById("newEmpSalary4").style.color="black";
}

function changeProfileInfo (pos) {
  empPicId=employeeInformation[pos][0];
  empName=employeeInformation[pos][1];
  empSkill=employeeInformation[pos][2];
  empSat=employeeInformation[pos][4];
  empSalary=employeeInformation[pos][6];
  
  //document.getElementById("empProfileName").setAttribute("data-title", empName);
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
  position=pos;
}

function decSalary(){
  empSalary=parseInt(empSalary)-parseInt(31);
  if(parseInt(empSalary)<0)
    empSalary=0;
  alert($.totalStorage.getItem("avSalary"));
  $.totalStorage.setItem("avSalary",$.totalStorage.getItem("avSalary")-parseInt(31));
  alert($.totalStorage.getItem("avSalary"));
  decSat=Math.round(5*(Math.random())/2);
  empSat=parseInt(empSat)-parseInt(decSat);
  if(parseInt(empSat)<0)
    empSat=0;
  employeeInformation[position][6]=empSalary;
  employeeInformation[position][4]=empSat;
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
    if((i*31)<=empSalary)
      document.getElementById('progressBarSalary'+i).style.backgroundColor="#2daebf";
    else
      document.getElementById('progressBarSalary'+i).style.backgroundColor="lightgrey";
  }
}

function incSalary(){
  empSalary=parseInt(empSalary)+parseInt(31);
  if(parseInt(empSalary)>2500)
   empSalary=2500;
  alert($.totalStorage.getItem("avSalary"));
  $.totalStorage.setItem("avSalary",$.totalStorage.getItem("avSalary")+parseInt(31));
  alert($.totalStorage.getItem("avSalary"));
  incSat=Math.round(5*(Math.random()));
  empSat=parseInt(empSat)+parseInt(incSat);
  if(parseInt(empSat)>100)
    empSat=100;
  employeeInformation[position][6]=empSalary;
  employeeInformation[position][4]=empSat;
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
    if((i*31)<=empSalary)
      document.getElementById('progressBarSalary'+i).style.backgroundColor="#2daebf";
    else
      document.getElementById('progressBarSalary'+i).style.backgroundColor="lightgrey";
  }
  
}

function updateHeader(){
  document.getElementById("stat_product").value=product;
  document.getElementById("stat_talent").value=talent;
  document.getElementById("stat_patents").value=patents;
  document.getElementById("stat_sat").value=satisfaction;
  document.getElementById("stat_invint").value=invint;
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
  if(employeeInformation.length>1){
    //pop() the last arrayElement (else it could )
    employeeInformation.pop();

    //calculate the variables to change statusbar
    for(var i = 0; i < employeeInformation.length; i++){
      talent=parseInt(talent)+parseInt(employeeInformation[i][2]);
      satisfaction=parseInt(satisfaction)+parseInt(employeeInformation[i][4]);
      budget=parseInt(budget)+parseInt(employeeInformation[i][6]);
    }
    product=Math.round((2*(talent/3)+satisfaction/3)*(Math.random()*0.2)+0.9);//randomly influenced productscore
    talent=Math.round(parseInt(talent)/parseInt(employeeInformation.length));//talentscore
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
    invint=Math.floor(((product+talent+satisfaction)/3)*(5/6)+(1/6)*(budget/$.totalStorage.getItem("stat_old_budget")));

    //facts for the user
    alertString="Some Facts\n\
        "+employeeInformation.length+" Employee";
    if(employeeInformation.length>1)
      alertString+="s";
    alertString+="\n\
        ";
    oldProduct=$.totalStorage.getItem("stat_product");
    if(product-oldProduct>0)
      alertString+="+";
    alertString+=(product-oldProduct)+" Productcore\n\
        ";
    alertString+=patents+" Patent";
    if(patents>1 || patents==0)
      alertString+="s";
    alertString+=" achieved\n\
        ";
    oldTalent=$.totalStorage.getItem("stat_talent");
    if(talent-oldTalent>0)
      alertString+="+";
    alertString+=(talent-oldTalent)+" Talentscore\n\
        ";
    oldSat=$.totalStorage.getItem("stat_sat");
    if(satisfaction-oldSat>0)
      alertString+="+";
    alertString+=+(satisfaction-oldSat)+" Satisfactionscore\n\
        -"+budget+"$ wages bill\n\
        ";
    oldInvInt=$.totalStorage.getItem("stat_invint");
    if(invint-oldInvInt>0)
      alertString+="+";
    alertString+=(invint-oldInvInt)+" Investor Interest";
    alert(alertString);

    //change the statusbar in local storage
    $.totalStorage.setItem("stat_product", product)
    $.totalStorage.setItem("stat_talent", talent);
    $.totalStorage.setItem("stat_patents", patents);
    $.totalStorage.setItem("stat_invint", invint);
    $.totalStorage.setItem("stat_sat", satisfaction);
    $.totalStorage.setItem("stat_budget", $.totalStorage.getItem("stat_budget")-budget);
    $.totalStorage.setItem("stat_old_budget", Math.floor(($.totalStorage.getItem("stat_old_budget")+budget)/2));

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
  alert(employeeInformation.length);
  if(employeeInformation.length>1)
    $.totalStorage.setItem("avSalary", $.totalStorage.getItem("avSalary")+parseInt(empSalary));
  else
    $.totalStorage.setItem("avSalary", empSalary);
  alert($.totalStorage.getItem("avSalary"));
  alert('Saved value for ' + key+": "+employeeInformation);//val);
  employeeInformation.push([0,0,0,0,0,0,0]);
  var val = employeeInformation;
  $.totalStorage(key, val);
  paintEmpField();
  generateNewEmp();
}