Parse.initialize("fakLehuZpemww4NM91xEK7wYtmehZv3pirpl2l1j", "mFTyPp8P6A4wT1Oa8BcNIOJFSIDIvywjrZvdSexj");

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

function createEmp(empArray){
  
  return;
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
// array to store employee informations
var employeeInformations=new Array ();
employeeInformations = 
[
    [
        [0,0,0,0],
        [-1,0,0,0],
        [-1,0,0,0]
    ],[
        [-1,0,0,0],
        [-1,0,0,0],
        [-1,0,0,0]
    ],[
        [-1,0,0,0],
        [-1,0,0,0],
        [-1,0,0,0]
    ]
];

var empPicId=null;
var empSkill=null;
var empSat=null;
var empSalary=null;

function changeProfileInfo (empIdX,empIdY) {
    empPicId=employeeInformations[empIdX][empIdY][0];
    document.getElementById('emp_profile_pic').src="/CoffeeInc2/assets/emp_"+empPicId+".svg";
    document.getElementById('empProfileSkill').innerHTML="Skill: "+employeeInformations[empIdX][empIdY][1];
    document.getElementById('empProfileSkillBar').innerHTML=Lungo.Element.progress("#progress-normal", employeeInformations[empIdX][empIdY][1], false);
    document.getElementById('empProfileSat').innerHTML="Satisfaction: "+employeeInformations[empIdX][empIdY][2];
    document.getElementById('empProfileSatBar').innerHTML=Lungo.Element.progress("#progress-normal", employeeInformations[empIdX][empIdY][2], false);
    document.getElementById('empProfileSalary').innerHTML="Salary: "+employeeInformations[empIdX][empIdY][3];
}
var hireTmpX=0;
var hireTmpY=0;
function getFreePlace(){
    for(var i=0;i<employeeInformations.length;i++){
        for( var j=0;j<employeeInformations[0].length;j++){
            if(employeeInformations[i][j][0]==0){
                hireTmpX=i;
                hireTmpY=j;
                return;
            }
        }
    }
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
function hireEmployee(newEmpPicId,newEmpSkill,newEmpSat,newEmpSalary){
    
    getFreePlace();
    employeeInformations[hireTmpX][hireTmpY][0]=newEmpPicId;
    employeeInformations[hireTmpX][hireTmpY][1]=newEmpSkill;
    employeeInformations[hireTmpX][hireTmpY][2]=newEmpSat;
    employeeInformations[hireTmpX][hireTmpY][3]=newEmpSalary;
    document.getElementById("emp"+hireTmpX+""+hireTmpY).innerHTML="<img src='/CoffeeInc/assets/emp_d_"+newEmpPicId+".svg'>";
    document.getElementById("emp"+hireTmpX+""+hireTmpY).href="#employee_profile";
    document.getElementById("emp"+hireTmpX+""+hireTmpY).onclick="changeProfileInfo("+hireTmpX+","+hireTmpY+");";
    if(hireTmpY==2){
        hireTmpX++;
        hireTmpY=0;
    }else
        hireTmpY++;
    employeeInformations[hireTmpX][hireTmpY][0]=0;
    document.getElementById("emp"+hireTmpX+""+hireTmpY).innerHTML="<img src='/CoffeeInc/assets/add.svg' class='add_button'>";
    document.getElementById("emp"+hireTmpX+""+hireTmpY).href="#employee_hire";
    updateHeader();
    window.setTimeout(rotateToNewEmpPic,1,);
}
function rotateToNewEmpPic () {
    for(var i=0;i<employeeInformations.length;i++){
        for( var j=0;j<employeeInformations[0].length;j++){
            if(employeeInformations[i][j][0]>0){
                document.getElementById("emp"+i+""+j).innerHTML="<img src='/CoffeeInc/assets/emp_d_1.svg'>"; 
            }
        }
    }
    window.setTimeout(rotateToOldEmpPic, Math.floor(Math.random()+501));
}
function rotateToOldEmpPic () {
    for(var i=0;i<employeeInformations.length;i++){
        for( var j=0;j<employeeInformations[0].length;j++){
            if(employeeInformations[i][j][0]>0){
                document.getElementById("emp"+i+""+j).innerHTML="<img src='/CoffeeInc/assets/emp_d_"+employeeInformations[i][j][0]+".svg'>";
                window.setTimeout("", Math.floor(Math.random()+501));
                //document.getElementById("empPic"+i+""+j).src="/CoffeeInc2/assets/emp_d_"+employeeInformations[i][j][0]+".svg"; 
            }
        }
    }
    window.setTimeout(rotateToNewEmpPic, Math.floor(Math.random()+501));
}

