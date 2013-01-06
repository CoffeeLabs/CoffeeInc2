//Parse.initialize("fakLehuZpemww4NM91xEK7wYtmehZv3pirpl2l1j", "mFTyPp8P6A4wT1Oa8BcNIOJFSIDIvywjrZvdSexj");

// array to store employee informations
var employeeInformation=new Array ();
var statusArray=new Array(6);
var empPicId=1;
var empName="Default";
var empSkill=0;
var empSat=0;
var empSalary=0;

function paintEmpField(){
  alert(employeeInformation);
  for(var i = 0; i < employeeInformation.length; i++){
    if(employeeInformation[i][0]!=0){
      document.getElementById("empPic"+i).src="/CoffeeInc2/assets/emp_d_" + employeeInformation[i][0] + "_1.svg";
      document.getElementById("emp"+i).href="#employee_profile";
      document.getElementById("empPic"+i).className="add";
    }else{
      document.getElementById("empPic"+i).src="/CoffeeInc2/assets/add.png";
      document.getElementById("empPic"+i).className="add add_button";
    }
  }
  for(var j = 8; j > 0; j--){
    document.getElementById("empPic"+i).src="";
  }
  //window.setTimeout(rotateToNewEmpPic, 1);
  updateHeader();
}
var picId1=1,picId2=1,picId3=1,picId4=1;
var randomSkill1=0,randomSkill2=0,randomSkill3=0,randomSkill4=0;
var randomSat1=0,randomSat2=0,randomSat3=0,randomSat4=0;
var randomSalary1=0,randomSalary2=0,randomSalary3=0,randomSalary4=0;
function generateNewEmp(){
  randomSkill1=Math.floor(Math.random()*100)+1;
  randomSat1=Math.floor(Math.random()*100)+1;
  randomSalary1=Math.floor(Math.random()*1500)+501;
  
  randomSkill2=Math.floor(Math.random()*100)+1;
  randomSat2=Math.floor(Math.random()*100)+1;
  randomSalary2=Math.floor(Math.random()*1500)+501;
  
  randomSkill3=Math.floor(Math.random()*100)+1;
  randomSat3=Math.floor(Math.random()*100)+1;
  randomSalary3=Math.floor(Math.random()*1500)+501;
  
  randomSkill4=Math.floor(Math.random()*100)+1;
  randomSat4=Math.floor(Math.random()*100)+1;
  randomSalary4=Math.floor(Math.random()*1500)+501;
  
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
var position=0;
function changeProfileInfo (pos) {
  empPicId=employeeInformation[pos][0];
  empName=employeeInformation[pos][1];
  empSkill=employeeInformation[pos][2];
  empSat=employeeInformation[pos][4];
  empSalary=employeeInformation[pos][6];
  
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
    if((i*31)<empSalary)
      document.getElementById('progressBarSalary'+i).style.backgroundColor="#2daebf";
    else
      document.getElementById('progressBarSalary'+i).style.backgroundColor="lightgrey";
  }
  position=pos;
}
function decSalary(){
  if((employeeInformation[position][6]-29)>0)
    employeeInformation[position][6]-=29;
  else
    employeeInformation[position][6]=0;
  $.totalStorage.setItem("emp", employeeInformation);
  for(i = 0; i<85;i++){
    if((i*29)<employeeInformation[position][6])
      document.getElementById('progressBarSalary'+i).style.backgroundColor="#2daebf";
    else
      document.getElementById('progressBarSalary'+i).style.backgroundColor="lightgrey";
  }
  document.getElementById('empProfileSalary').innerHTML="Salary: "+employeeInformation[position][6];
}
function incSalary(){
  if((employeeInformation[position][6]+29)<2500)
    employeeInformation[position][6]+=29;
  else
    employeeInformation[position][6]=2500;
  $.totalStorage.setItem("emp", employeeInformation);
  for(i = 0; i<85;i++){
    if((i*29)<employeeInformation[position][6])
      document.getElementById('progressBarSalary'+i).style.backgroundColor="#2daebf";
    else
      document.getElementById('progressBarSalary'+i).style.backgroundColor="lightgrey";
  }
  document.getElementById('empProfileSalary').innerHTML="Salary: "+employeeInformation[position][6];
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
//variables for the statusbar infos
    var budget=0;
    var satisfaction=0;
    var talent=0;
    var patents=0;
    var product=0;
    var invint=0;
function nextRound(){
  if(employeeInformation.length>1){
    //pop() the last arrayElement (else it could )
    employeeInformation.pop();

    //calculate the variables to change statusbar
    for(var i = 0; i < employeeInformation.length; i++){
      talent+=parseInt(employeeInformation[i][2]);
      satisfaction+=parseInt(employeeInformation[i][4]);
      budget+=parseInt(employeeInformation[i][6]);
    }
    product=Math.round((2*(talent/3)+satisfaction/3)*(Math.random()*0.2)+0.9);//randomly influenced productscore
    talent=Math.round(talent/employeeInformation.length);//talentscore
    if(patents!=100){
      for(var pat=0; pat<Math.round(Math.random()*employeeInformation.length);pat++)
        if(Math.random()>0.7)
          patents++;
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