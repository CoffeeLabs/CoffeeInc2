Parse.initialize("fakLehuZpemww4NM91xEK7wYtmehZv3pirpl2l1j", "mFTyPp8P6A4wT1Oa8BcNIOJFSIDIvywjrZvdSexj");

function testEmp(newPicId,newEmpName,newSkill,newSkillBonus,newSat,newSalary,newMinSalary){
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
  return;
}
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
// array to store employee informations
var employeeInformation=new Array ();

var statusArray=new Array(6);

function initGame(){
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
}


function signup () {
	var user = new Parse.User();
	user.set("username", "my name");
	user.set("password", "my pass");
	user.set("email", "email@example.com");
	 
	// other fields can be set just like with Parse.Object
	 
	user.signUp(null, {
	  success: function(user) {
	    alert("hooray");
		// Hooray! Let them use the app now.
	  },
	  error: function(user, error) {
		// Show the error message somewhere and let the user try again.
		alert("Error: " + error.code + " " + error.message);
	  }
	});
}

var empPicId=null;
var empSkill=null;
var empSat=null;
var empSalary=null;

function changeProfileInfo (position) {
  empSkill=employeeInformation[position].skill;
  empSat=employeeInformation[position].sat;
  empSalary=employeeInformation[position].salary;
  empPicId=employeeInformation[position].picId;

  
    document.getElementById('emp_profile_pic').src="/CoffeeInc/assets/emp_"+employeeInformation[position].picId+".svg";
    document.getElementById('empProfileSkill').innerHTML="Skill: "+empSkill;
    document.getElementById('empProfileSkillBar').innerHTML=Lungo.Element.progress("#progress-normal", employeeInformation[position].skill, false);
    document.getElementById('empProfileSat').innerHTML="Satisfaction: "+employeeInformation[position].sat;
    document.getElementById('empProfileSatBar').innerHTML=Lungo.Element.progress("#progress-normal", employeeInformation[position].sat, false);
    document.getElementById('empProfileSalary').innerHTML="Salary: "+employeeInformation[position].salary;
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
function hireEmployee (newEmpPicId,newEmpSkill,newEmpSat,newEmpSalary){
    nextPosition=getFreePlace()+1;
    alert(employeeInformation[getFreePlace()]);//.setInfo(newEmpPicId,null,newEmpSkill,null,newEmpSat,newEmpSalary,null);
    document.getElementById("emp"+getFreePlace()).innerHTML="<img src='/CoffeeInc/assets/emp_d_"+newEmpPicId+".svg'>";
    document.getElementById("emp"+getFreePlace()).href="#employee_profile";
    document.getElementById("emp"+getFreePlace()).onclick="changeProfileInfo("+getFreePlace()+");";
    if(nextPosition<9){
      employeeInformation[nextPosition].picId=0;
      document.getElementById("emp"+nextPosition).innerHTML="<img src='/CoffeeInc/assets/add.svg' class='add_button'>";
      document.getElementById("emp"+nextPosition).href="#employee_hire";
    }
    updateHeader();
    window.setTimeout(rotateToNewEmpPic,1);
}
function rotateToNewEmpPic () {
    var timeout=Math.floor(Math.random()*800)+1;
    for(var i=0;i<employeeInformation.length;i++){
      if(employeeInformation[i].picId>0){
          document.getElementById("emp"+i).innerHTML="<img src='/CoffeeInc/assets/emp_d_1.svg'>"; 
      }
    }
    window.setTimeout(rotateToOldEmpPic, timeout);
}
function rotateToOldEmpPic () {
    var timeout=Math.floor(Math.random()*800)+1;
    for(var i=0;i<employeeInformation.length;i++){
      if(employeeInformation[i].picId>0){
          document.getElementById("emp"+i).innerHTML="<img src='/CoffeeInc/assets/emp_d_"+employeeInformation[i].picId+".svg'>"; 
      }
    }
    window.setTimeout(rotateToNewEmpPic, timeout);
}

