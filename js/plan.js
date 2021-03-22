'use strict';

//declearing global verable and get element from html//
let formData = document.getElementById('form');
let textResult = document.getElementById('textResult');
let videoResult = document.getElementById('videoResult');
let pdfResult = document.getElementById('pdfResult');
document.getElementById('submit');//what is this//
let gainWeight = 0;
let loseWeight = 0;
let bodybuilding = 0;
let goalArray = [gainWeight, loseWeight, bodybuilding];

//bulindg a constructor //

function UserData(name, age, gender, weight, height, active, goal, equipment) {
  this.userName = name;
  this.age = age;
  this.gender = gender;
  this.weight = weight;
  this.height = height;
  this.active = active;
  this.goal = goal;
  this.equipment = equipment;
}

//>>>>>>>>>>>>>>>>>>>>>> MBI calucoluter function <<<<<<<<<<<<<<<<<<<<<<<//

UserData.prototype.generateBMI = function () {
  let BMI = this.weight / (this.height * this.height);
  return BMI;
};

//for test//
// let test=new UserData('hala',25,'female',40,1.67,'lazy','loosin weight','yes');


//>>>>>>>>>>>>>>>>>>>>>>> adding first sentences <<<<<<<<<<<<<<<<<<<<<<<//

UserData.prototype.bmiCases = function () {
  // event.preventDefault();
  if (this.generateBMI() <= 18.5) {
    let bmiResult = document.createElement('h2');
    bmiResult.textContent = 'Hello ' + this.userName + '! Your BMI result is: ' + this.generateBMI() + '. Which means you\'re mostly underweight. Don\'t worry tough.. We\'re here to help!';
    textResult.appendChild(bmiResult);
  }

  if (this.generateBMI() > 18.5 && this.generateBMI() < 25) {
    let bmiResult = document.createElement('h2');
    bmiResult.textContent = 'Hello ' + this.userName + '! Your BMI result is: ' + this.generateBMI() + '. Which means you\'re in the normal range, Congrats!';
    textResult.appendChild(bmiResult);
  }

  if (this.generateBMI() > 25 && this.generateBMI() < 30) {
    let bmiResult = document.createElement('h2');
    bmiResult.textContent = 'Hello ' + this.userName + '! Your BMI result is: ' + this.generateBMI() + '. Which means you\'re a little overweight. Watch your health out!';
    textResult.appendChild(bmiResult);
  }

  if (this.generateBMI() >= 30) {
    let bmiResult = document.createElement('h2');
    bmiResult.textContent = 'Hello ' + this.userName + '! Your BMI result is: ' + this.generateBMI() + '. Which means you\'re probably suffering from obesity. But don\'t worry.. We\'re here to help!';
    textResult.appendChild(bmiResult);
  }
};

//>>>>>>>>>>>>>>>>>>>>>>> added event listener <<<<<<<<<<<<<<<<<<<<<<<//
// formData.addEventListener('submit',submitHander);

formData.addEventListener('submit', submitHandler);
function submitHandler(event) {
  event.preventDefault();
  // userDataParse();
  let user_input = new UserData(event.target.name.value, event.target.age.value, event.target.gender.value, event.target.weight.value, event.target.height.value, event.target.active.value, event.target.goal.value, event.target.equipment.value);
  user_input.bmiCases();
  ///// CASE 1 (M, L, E) /////-------------------------------------------
  if (event.target.gender.value === 'male' && event.target.goal.value === 'loseWeight' && event.target.equipment.value === 'yes') {
    videoResult.innerHTML = '<iframe width="420" height="315"' + 'src="https://www.youtube.com/embed/tgbNymZ7vqY">' + '</iframe>';
    pdfResult.innerHTML = '<iframe width="420" height="315"' + 'src="male-body building-workout.pdf">' + '</iframe>';
    loseWeight++;
  }

  ///// CASE 2 (M, L, W.E) /////---------------------------------------------
  else if (event.target.gender.value === 'male' && event.target.goal.value === 'loseWeight' && event.target.equipment.value === 'no') {
    //PLANS
    loseWeight++;
  }

  ///// CASE 3 (M, G, E) /////----------------------------------------------
  else if (event.target.gender.value === 'male' && event.target.goal.value === 'gainWeight' && event.target.equipment.value === 'yes') {
    //PLANS
    gainWeight++;
  }

  ///// CASE 4 (M, G, W.E) /////-----------------------------------------------
  else if (event.target.gender.value === 'male' && event.target.goal.value === 'gainWeight' && event.target.equipment.value === 'no') {
    //PLANS
    gainWeight++;
  }

  ///// CASE 5 (M, B, E) /////------------------------------------------------
  else if (event.target.gender.value === 'male' && event.target.goal.value === 'bodybuilding' && event.target.equipment.value === 'yes') {
    //PLANS
    bodybuilding++;
  }

  ///// CASE 6 (M, B, W.E) /////------------------------------------------------
  else if (event.target.gender.value === 'male' && event.target.goal.value === 'bodybuilding' && event.target.equipment.value === 'no') {
    //PLANS
    bodybuilding++;
  }

  ///// CASE 7 (F, L, E) /////------------------------------------------------
  else if (event.target.gender.value === 'female' && event.target.goal.value === 'loseWeight' && event.target.equipment.value === 'yes') {
    //PLANS
    loseWeight++;
  }

  ///// CASE 8 (F, L, W.E) /////------------------------------------------------
  else if (event.target.gender.value === 'female' && event.target.goal.value === 'loseWeight' && event.target.equipment.value === 'no') {
    //PLANS
    loseWeight++;
  }

  ///// CASE 9 (F, G, E) /////------------------------------------------------
  else if (event.target.gender.value === 'female' && event.target.goal.value === 'gainWeight' && event.target.equipment.value === 'yes') {
    //PLANS
    gainWeight++;
  }

  ///// CASE 10 (F, G, W.E) /////------------------------------------------------
  else if (event.target.gender.value === 'female' && event.target.goal.value === 'gainWeight' && event.target.equipment.value === 'no') {
    //PLANS
    gainWeight++;
  }

  ///// CASE 11 (F, B, E) /////------------------------------------------------
  else if (event.target.gender.value === 'female' && event.target.goal.value === 'bodybuilding' && event.target.equipment.value === 'yes') {
    //PLANS
    bodybuilding++;
  }

  ///// CASE 12 (F, B, W.E) /////------------------------------------------------
  else if (event.target.gender.value === 'female' && event.target.goal.value === 'bodybuilding' && event.target.equipment.value === 'no') {
    bodybuilding++;
    //PLANS
  }
  else { console.log('final else'); }
  goalArray = [gainWeight, loseWeight, bodybuilding];
  localST();

  // textResult.addEventListener('submit', bmiCases);
  // let userInput= new UserData (userName,age,gender,weight,height,active,goal,equipment);
}

function localST() {
  let userDatast = JSON.stringify(goalArray);
  console.log('uuu');
  if (JSON.parse(localStorage.getItem('user data') === null)) {
    localStorage.setItem('user data', userDatast);
  } else {
    let olddata = JSON.parse(localStorage.getItem('user data'));
    let newdata = [];
    for (let i = 0; i < goalArray.length; i++) {
      newdata[i] = olddata[i] + goalArray[i];
    }
    localStorage.setItem('user data', newdata);
  }

}
function userDataParse() {
  let newUserData = localStorage.getItem('user data');
  if (newUserData) {
    UserData.goal = JSON.parse(newUserData);
  }
}
