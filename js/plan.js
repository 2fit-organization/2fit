'use strict';

//declearing global verable and get element from html//

let formData=document.getElementById('form');
let textResult=document.getElementById('textResult');
let videoResult=document.getElementById('videoResult');
let pdfResult=document.getElementById('pdfResult');
document.getElementById('submit');

//bulindg a constructor //

function UserData (name,age,gender,weight,height,active,goal,equipment){
  this.userName=name;
  this.age=age;
  this.gender=gender;
  this.weight=weight;
  this.height=height;
  this.active=active;
  this.goal=goal;
  this.equipment=equipment;
}

//>>>>>>>>>>>>>>>>>>>>>> MBI calucoluter function <<<<<<<<<<<<<<<<<<<<<<<//

UserData.prototype.generatBMI=function(){
  let BMI =this.weight/(this.height*this.height);
  return BMI;
};

//for test//
// let test=new UserData('hala',25,'female',69,1.67,'lazy','loosin weight','yes');
// test.generatBMI();

//>>>>>>>>>>>>>>>>>>>>>>> adding first sentences <<<<<<<<<<<<<<<<<<<<<<<//

formData.addEventListener('submit',submitHander);

UserData.prototype.bmiCases=function (event){
  event.preventDefault();
  if(this.generateBMI()<=18.5){
    let bmiResult= document.createElement('h2');
    bmiResult.textContent= 'Hello ' + this.userName + '! Your BMI result is: ' + this.generatBMI() + '. Which means you\'re mostly underweight. Don\'t worry tough.. We\'re here to help!' ;
    textResult.appendChild(bmiResult);
  }

  if(this.generateBMI()>18.5 && this.generateBMI()<25){
    let bmiResult= document.createElement('h2');
    bmiResult.textContent= 'Hello ' + this.userName + '! Your BMI result is: ' + this.generatBMI() + '. Which means you\'re in the normal range, Congrats!' ;
    textResult.appendChild(bmiResult);
  }

  if(this.generateBMI()>25 && this.generateBMI()<30){
    let bmiResult= document.createElement('h2');
    bmiResult.textContent= 'Hello ' + this.userName + '! Your BMI result is: ' + this.generatBMI() + '. Which means you\'re a little overweight. Watch your health out!' ;
    textResult.appendChild(bmiResult);
  }

  if(this.generateBMI()>=30){
    let bmiResult= document.createElement('h2');
    bmiResult.textContent= 'Hello ' + this.userName + '! Your BMI result is: ' + this.generatBMI() + '. Which means you\'re probably suffering from obesity. But don\'t worry.. We\'re here to help!' ;
    textResult.appendChild(bmiResult);
  }
};

//>>>>>>>>>>>>>>>>>>>>>>> added event listener <<<<<<<<<<<<<<<<<<<<<<<//

formData.addEventListener('submit',submitHander);
function submitHander(event){
  event.preventDefault();
  ///// CASE 1 (M, L, E) /////-------------------------------------------
  if(event.target.gender.value === 'male' && event.target.goal.value === 'loseWeight' && event.target.equipment.value === 'yes' ){
    videoResult.innerHTML= '<iframe width="420" height="315"' + 'src="https://www.youtube.com/embed/tgbNymZ7vqY">' + '</iframe>';
    pdfResult.innerHTML= '<iframe width="420" height="315"' + 'src="male-body building-workout.pdf">' + '</iframe>';
  }

  ///// CASE 2 (M, L, W.E) /////---------------------------------------------
  else if(this.event.target.gender.value === 'male' && this.event.target.goal.value === 'loseWeight' && this.event.target.equipment.value === 'no' ){
    //PLANS
  }

  ///// CASE 3 (M, G, E) /////----------------------------------------------
  else if(this.event.target.gender.value === 'male' && this.event.target.goal.value === 'gainWeight' && this.event.target.equipment.value === 'yes' ){
    //PLANS
  }

  ///// CASE 4 (M, G, W.E) /////-----------------------------------------------
  else if(this.event.target.gender.value === 'male' && this.event.target.goal.value === 'gainWeight' && this.event.target.equipment.value === 'no' ){
    //PLANS
  }

  ///// CASE 5 (M, B, E) /////------------------------------------------------
  else if(this.event.target.gender.value === 'male' && this.event.target.goal.value === 'bodybuilding' && this.event.target.equipment.value === 'yes' ){
    //PLANS
  }

  ///// CASE 6 (M, B, W.E) /////------------------------------------------------
  else if(this.event.target.gender.value === 'male' && this.event.target.goal.value === 'bodybuilding' && this.event.target.equipment.value === 'no' ){
    //PLANS
  }

  ///// CASE 7 (F, L, E) /////------------------------------------------------
  else if(this.event.target.gender.value === 'female' && this.event.target.goal.value === 'loseWeight' && this.event.target.equipment.value === 'yes' ){
    //PLANS
  }

  ///// CASE 8 (F, L, W.E) /////------------------------------------------------
  else if(this.event.target.gender.value === 'female' && this.event.target.goal.value === 'loseWeight' && this.event.target.equipment.value === 'no' ){
    //PLANS
  }

  ///// CASE 9 (F, G, E) /////------------------------------------------------
  else if(this.event.target.gender.value === 'female' && this.event.target.goal.value === 'gainWeight' && this.event.target.equipment.value === 'yes' ){
    //PLANS
  }

  ///// CASE 10 (F, G, W.E) /////------------------------------------------------
  else if(this.event.target.gender.value === 'female' && this.event.target.goal.value === 'gainWeight' && this.event.target.equipment.value === 'no' ){
    //PLANS
  }

  ///// CASE 11 (F, B, E) /////------------------------------------------------
  else if(this.event.target.gender.value === 'female' && this.event.target.goal.value === 'bodybuilding' && this.event.target.equipment.value === 'yes' ){
    //PLANS
  }

  ///// CASE 12 (F, B, W.E) /////------------------------------------------------
  else if(this.event.target.gender.value === 'female' && this.event.target.goal.value === 'bodybuilding' && this.event.target.equipment.value === 'no' ){
    //PLANS
  }

  // textResult.addEventListener('submit', bmiCases);
  // let userInput= new UserData (userName,age,gender,weight,height,active,goal,equipment);
}

