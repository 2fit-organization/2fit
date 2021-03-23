'use strict';

//declearing global verable and get element from html//
let formData=document.getElementById('form');
let bmiText=document.getElementById('bmiText');
let activityText=document.getElementById('activityText');
let videoResult=document.getElementById('videoResult');
let pdfResult=document.getElementById('pdfResult');
let storeLink=document.getElementById('storeLink');
let chartLink=document.getElementById('chartLink');
let address=document.getElementById('address');

let getHealthy=0;
let loseWeight=0;
let bodybuilding=0;
let goalArray=[getHealthy,loseWeight,bodybuilding];

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

UserData.prototype.generateBMI=function(){
  let BMI =Math.round(this.weight/(this.height*this.height)* 10) / 10;
  return BMI;
};

//>>>>>>>>>>>>>>>>>>>>>>> adding first sentences <<<<<<<<<<<<<<<<<<<<<<<//

UserData.prototype.bmiCases=function (){
  if(this.generateBMI()<=18.5){
    let bmiResult= document.createElement('h2');
    bmiResult.textContent= 'Hello ' + this.userName + '! Your BMI result is: ' + this.generateBMI() + ', which means you\'re mostly underweight. Don\'t worry though.. We\'re here to help!' ;
    bmiText.appendChild(bmiResult);
  }

  if(this.generateBMI()>18.5 && this.generateBMI()<25){
    let bmiResult= document.createElement('h2');
    bmiResult.textContent= 'Hello ' + this.userName + '! Your BMI result is: ' + this.generateBMI() + '. Which means you\'re in the normal range, Congrats!' ;
    bmiText.appendChild(bmiResult);
  }

  if(this.generateBMI()>25 && this.generateBMI()<30){
    let bmiResult= document.createElement('h2');
    bmiResult.textContent= 'Hello ' + this.userName + '! Your BMI result is: ' + this.generateBMI() + '. Which means you\'re a little overweight. Watch your health out!' ;
    bmiText.appendChild(bmiResult);
  }

  if(this.generateBMI()>=30){
    let bmiResult= document.createElement('h2');
    bmiResult.textContent= 'Hello ' + this.userName + '! Your BMI result is: ' + this.generateBMI() + '. Which means you\'re probably suffering from obesity. But don\'t worry.. We\'re here to help!' ;
    bmiText.appendChild(bmiResult);
  }
};

//>>>>>>>>>>>>>>>>>>>>>>> adding second sentence <<<<<<<<<<<<<<<<<<<<<<<//

UserData.prototype.activity=function (){
  if(this.active === 'lazy'){
    let activeResult= document.createElement('h2');
    activeResult.textContent= 'We have your workout & diet plans ready! You need to workout 4-5 days a week, based on your usual activity:';
    activityText.appendChild(activeResult);
  }else if(this.active === 'active'){
    let activeResult= document.createElement('h2');
    activeResult.textContent= 'We have your workout & diet plans ready! You need to workout 2-3 days a week, based on your usual activity:';
    activityText.appendChild(activeResult);
  }
};

//>>>>>>>>>>>>>>>>>>>>>>> added event listener <<<<<<<<<<<<<<<<<<<<<<<//

formData.addEventListener('submit',submitHandler);
function submitHandler(event){
  event.preventDefault();
  let user_input=  new UserData(event.target.name.value,event.target.age.value,event.target.gender.value,event.target.weight.value,event.target.height.value,event.target.active.value,event.target.goal.value,event.target.equipment.value);
  user_input.bmiCases();
  user_input.activity();

  ///// CASE 1 (M, L, E) /////-------------------------------------------
  if(event.target.gender.value === 'male' && event.target.goal.value === 'loseWeight' && event.target.equipment.value === 'yes'){
    videoResult.innerHTML= '<iframe src="https://www.youtube.com/embed/TdUlF4F2nto" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    pdfResult.innerHTML= '<embed src="nip-diet.pdf" type="application/pdf">';
    loseWeight++;
    goalArray.push(loseWeight);
    // console.log(loseWeight);
  }

  ///// CASE 2 (M, L, W.E) /////---------------------------------------------
  else if(event.target.gender.value === 'male' && event.target.goal.value === 'loseWeight' && event.target.equipment.value === 'no'){
    videoResult.innerHTML='<iframe src="https://www.youtube.com/embed/EQWiqhVSHdw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    pdfResult.innerHTML= '<embed src="nip-diet.pdf" type="application/pdf">';
    loseWeight++;
  }

  ///// CASE 3 (M, H, E) /////------------------------------------------------
  else if(event.target.gender.value === 'male' && event.target.goal.value === 'getHealthy' && event.target.equipment.value === 'yes'){
    videoResult.innerHTML='<iframe src="https://www.youtube.com/embed/KY8jENkQpDQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    pdfResult.innerHTML= '<embed src="healthy-diet.pdf" type="application/pdf">';
    bodybuilding++;
  }

  ///// CASE 4 (M, H, W.E) /////------------------------------------------------
  else if(event.target.gender.value === 'male' &&event.target.goal.value === 'getHealthy' && event.target.equipment.value === 'no'){
    videoResult.innerHTML='<iframe src="https://www.youtube.com/embed/DzMG4g3mLXY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    pdfResult.innerHTML= '<embed src="healthy-diet.pdf" type="application/pdf">';
    getHealthy++;
  }

  ///// CASE 5 (M, B, E) /////----------------------------------------------
  else if(event.target.gender.value === 'male' && event.target.goal.value === 'bodybuilding' && event.target.equipment.value === 'yes'){
    videoResult.innerHTML='<iframe src="https://www.youtube.com/embed/6hgBossMfOs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    pdfResult.innerHTML= '<embed src="modern-hero.pdf" type="application/pdf">';
    bodybuilding++;
  }

  ///// CASE 6 (M, B, W.E) /////-----------------------------------------------
  else if(event.target.gender.value === 'male' && event.target.goal.value === 'bodybuilding' && event.target.equipment.value === 'no'){
    videoResult.innerHTML='<iframe width="1366" height="600" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    pdfResult.innerHTML= '<embed src="modern-hero.pdf" type="application/pdf">';
    bodybuilding++;
  }

  ///// CASE 7 (F, L, E) /////------------------------------------------------
  else if(event.target.gender.value === 'female' && event.target.goal.value === 'loseWeight' && event.target.equipment.value === 'yes'){
    videoResult.innerHTML='<iframe src="https://www.youtube.com/embed/fZcwXcd2Ogc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    pdfResult.innerHTML= '<embed src="nip-diet.pdf" type="application/pdf">';
    loseWeight++;
  }

  ///// CASE 8 (F, L, W.E) /////------------------------------------------------
  else if(event.target.gender.value === 'female' && event.target.goal.value === 'loseWeight' && event.target.equipment.value === 'no'){
    videoResult.innerHTML='<iframe src="https://www.youtube.com/embed/pHTBWOpRHMY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    pdfResult.innerHTML= '<embed src="nip-diet.pdf" type="application/pdf">';
    loseWeight++;
  }

  ///// CASE 9 (F, H, E) /////------------------------------------------------
  else if(event.target.gender.value === 'female' && event.target.goal.value === 'getHealthy' && event.target.equipment.value === 'yes'){
    videoResult.innerHTML= '<iframe src="https://www.youtube.com/embed/siIicrZ4gng" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    pdfResult.innerHTML= '<embed src="healthy-diet.pdf" type="application/pdf">';
    getHealthy++;
  }

  ///// CASE 10 (F, H, W.E) /////------------------------------------------------
  else if(event.target.gender.value === 'female' && event.target.goal.value === 'getHealthy' && event.target.equipment.value === 'no'){
    videoResult.innerHTML='<iframe src="https://www.youtube.com/embed/PyUP10dh8CE?list=PLQSMS0J6JbrK9fA74RqpVHkzH14qvaPYH" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    pdfResult.innerHTML= '<embed src="healthy-diet.pdf" type="application/pdf">';
    getHealthy++;
  }
  ///// CASE 11 (F, B, E) /////------------------------------------------------
  else if(event.target.gender.value === 'female' && event.target.goal.value === 'bodybuilding' && event.target.equipment.value === 'yes'){
    videoResult.innerHTML='<iframe src="https://www.youtube.com/embed/43eSKCBvTG8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    pdfResult.innerHTML= '<embed src="modern-hero.pdf" type="application/pdf">';
    bodybuilding++;
  }

  ///// CASE 12 (F, B, W.E) /////------------------------------------------------
  else if(event.target.gender.value === 'female' && event.target.goal.value === 'bodybuilding' && event.target.equipment.value === 'no'){
    videoResult.innerHTML= '<iframe src="https://www.youtube.com/embed/06msLl_wMtM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    pdfResult.innerHTML= '<embed src="modern-hero.pdf" type="application/pdf">';
    bodybuilding++;
  }
  else{console.log('final else');}
  goalArray=[getHealthy,loseWeight,bodybuilding];
  formData.remove();
  address.remove();
  externalLinks();
  localST();
}

// let car = [1,1,1,1]
// let car2 = [1,1,1,1]
// let caradd=[]
// for (let i = 0; i < car.length; i++) {
//   caradd[i] = car[i]+car2[i];
  
// }





function externalLinks(){
  storeLink.innerHTML= 'For supplements & equipments, check out our <a href="store.html">store</a>';
  chartLink.innerHTML= 'See what other people came here for, <a href="chart.html">click here</a>';
}

function localST(){
  if(JSON.parse(localStorage.getItem('user data'))=== null){
    localStorage.setItem('user data',JSON.stringify(goalArray));
  } else {
    let oldData = JSON.parse(localStorage.getItem('user data'));
    let newDataArray=[];
    for(let i=0;i<goalArray.length;i++){
      newDataArray[i] = oldData[i] + goalArray[i];
    }
    localStorage.setItem('user data',JSON.stringify(newDataArray));
  }
}

