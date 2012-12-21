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
            document.getElementById("emp"+i).href="#employee_profile"+i;
//            document.getElementById("empPic"+i).onclick="javascript:changeProfileInfo("+i+")";
        }else{
            document.getElementById("empPic"+i).src="/CoffeeInc/assets/add.png";
        }
    }
    window.setTimeout(rotateToNewEmpPic, 1);
}

/*function testEmp(newPicId,newEmpName,newSkill,newSkillBonus,newSat,newSalary,newMinSalary){
  this.picId=picId;
  this.empName=empName;
  this.skill=skill;
  this.skillBonus=skillBonus;
  this.sat=sat;
  this.salary=salary;
  this.minSalary=minSalary;
}
  
testEmp.prototype.hire(emp){
  employeeInformation.push(emp);
  $.localStorage("CoffeInc",{emp:employeeInformation});
}
*/

/*function EmpObj(picId,empName,skill,skillBonus,sat,salary,minSalary){
  this.picId=picId;
  this.empName=empName;
  this.skill=skill;
  this.skillBonus=skillBonus;
  this.sat=sat;
  this.salary=salary;
  this.minSalary=minSalary;
}
EmpObj.prototype.setInfo=function(picId,empName,skill,skillBonus,sat,salary,minSalary){
alert(picId+" "+skill+" "+sat);
  if(picId!=null)
    this.picId=picId;
  if(empName!=null)
    this.empName=empName;
  if(skill!=null)
    this.skill=skill;
  if(skillBonus!=null)
    this.skillBonus=skillBonus;
  if(sat!=null)
    this.sat=sat;
  if(salary!=null)
    this.salary=salary;
  if(minSalary!=null)
    this.minSalary=minSalary;
};
*/



/*function initGame(){
  statusArray=[0,0,0,0,0,10000];
  var Employee=Parse.Object.extend("Employee",{
    defaults: {
      name:"John Doe",
      pictureId:1,
      skill:20,
      skillBonus:5,
      satisfaction:20,
      minSalary:200,
      salary:200
    },
    initialize: function(picId){
      this.set({
        pictureId: picId,
        skill: this.defaults.skill,
        skillBonus: this.defaults.skillBonus,
        satisfaction: this.defaults.satisfaction,
        minSalary: this.defaults.minSalary,
        salary: this.defaults.salary
      })
    }
  });
}
function reorderArray(array,startPos){
  for(var i=startPos;i<array.length-1;i++){
      array[i]=array[i+1];
  }
  array[array.length-1].setInfo(0,"empName",20,5,20,1000,500);
  return array;
}
function kickAssEmp(position){
  employeeInformation=reorderArray(employeeInformation,position);
}*/

function changeProfileInfo (position) {
    alert(position);
    empPicId=employeeInformation[position][0];
    empName=employeeInformation[position][1];
    empSkill=employeeInformation[position][2];
    empSat=employeeInformation[position][4];
    empSalary=employeeInformation[position][5];

  
    document.getElementById('emp_profile_pic').src="/CoffeeInc/assets/emp_"+empPicId+".svg";
    document.getElementById('empProfileSkill').innerHTML="Skill: "+empSkill;
    //document.getElementById('empProfileSkillBar').innerHTML=Lungo.Element.progress("#progress-normal", empSkill, false);
    document.getElementById('empProfileSat').innerHTML="Satisfaction: "+empSat;
    //document.getElementById('empProfileSatBar').innerHTML=Lungo.Element.progress("#progress-normal", empSat, false);
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

/*
var statProduct;
var statTalent;
var statPatent;
var statSat;
var statInvInt;

var statBudget;
*/

function updateHeader(){
  
    document.getElementById("stat_product").value=70;
  
/*
  
    document.getElementById("head_items").innerHTML='<div data-icon="home" class="  "> 99</div>';
    document.getElementById("head_items").innerHTML+='<div data-icon="users" class="statusbar_item"> 58</div>';
    document.getElementById("head_items").innerHTML+='<div data-icon="upload" class="statusbar_item"> 43</div>';
    document.getElementById("head_items").innerHTML+='<div data-icon="map" class="statusbar_item"> 33</div>';
    document.getElementById("head_items").innerHTML+='<div data-icon="cloud" class="statusbar_item"> 34</div>';
    document.getElementById("head_items").innerHTML+='<div data-icon="menu" class="statusbar_item"> 51,234</div>';
*/
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
