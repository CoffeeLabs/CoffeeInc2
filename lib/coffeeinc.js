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
//    alert(employeeInformation);
    for(var i = 0; i < employeeInformation.length; i++){
//        alert("i="+i);
        if(employeeInformation[i][0]!=0){
            document.getElementById("empPic"+i).src="/CoffeeInc/assets/emp_d_" + employeeInformation[i][0] + "_1.svg";
            document.getElementById("emp"+i).href="#employee_profile";
        }else{
            document.getElementById("empPic"+i).src="/CoffeeInc/assets/add.png";
            document.getElementById("empPic"+i).className="add";
            document.getElementById("empPic"+i).onclick="javascript:generateNewEmp();";
        }
    }
    window.setTimeout(rotateToNewEmpPic, 1);
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
    
  document.getElementById("hirePic1").src="/CoffeeInc/assets/emp_"+picId1+".svg";
  document.getElementById("hirePic2").src="/CoffeeInc/assets/emp_"+picId2+".svg";
  document.getElementById("hirePic3").src="/CoffeeInc/assets/emp_"+picId3+".svg";
  document.getElementById("hirePic4").src="/CoffeeInc/assets/emp_"+picId4+".svg";
  
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
  document.getElementById("newEmpSalary2").value=randomSalary2;
  document.getElementById("newEmpSalary3").value=randomSalary3;
  document.getElementById("newEmpSalary4").value=randomSalary4;
}

function changeProfileInfo (position) {
    alert(position);
    empPicId=employeeInformation[position][0];
    empName=employeeInformation[position][1];
    empSkill=employeeInformation[position][2];
    empSat=employeeInformation[position][4];
    empSalary=employeeInformation[position][5];

  
    document.getElementById('emp_profile_pic').src="/CoffeeInc/assets/emp_"+empPicId+".svg";
    document.getElementById('empProfileSkill').innerHTML="Skill: "+empSkill;
    document.getElementById('empProfileSat').innerHTML="Satisfaction: "+empSat;
    document.getElementById('empProfileSalary').innerHTML="Salary: "+empSalary;
}

function getFreePlace(){
    for(var i=0;i<employeeInformation.length;i++){
        if(employeeInformation[i].picId==0){
            return i;
        }
    }
    return -1;
}

function updateHeader(){
    document.getElementById("stat_product").value=70;
}
function rotateToNewEmpPic () {
    var timeout=Math.floor(Math.random()*800)+1;
    var pic=Math.floor(Math.random()*4)+2;
    for(var i=0;i<employeeInformation.length;i++){
        if(employeeInformation[i][0]>0){
            document.getElementById("empPic"+i).src="/CoffeeInc/assets/emp_d_" + employeeInformation[i][0] + "_"+pic+".svg";
        }
    }
    window.setTimeout(rotateToOldEmpPic, timeout);
}
function rotateToOldEmpPic () {
    var timeout=Math.floor(Math.random()*800)+1;
    for(var i=0;i<employeeInformation.length;i++){
        if(employeeInformation[i][0]>0){
            document.getElementById("empPic"+i).src="/CoffeeInc/assets/emp_d_" + employeeInformation[i][0] + "_1.svg";
        }
    }
    window.setTimeout(rotateToNewEmpPic, timeout);
}
