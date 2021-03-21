'use strict';
//declearing global verable and get element from html//

let formData=document.getElementById('form');
let text=document.getElementById('textResult');
let video=document.getElementById('videoResult');
let pdf=document.getElementById('pdfResult');

//bulindg a constructor //

function UserData (name,age,gender,weight,height,active,goal,equipment){
  this.name=name;
  this.age=age;
  this.gender=gender;
  this.weight=weight;
  this.height=height;
  this.active=active;
  this.goal=goal;
  this.equipment=equipment;
}

//added event listener  //

// formData.addEventListener('submit',submitHander);
// function submitHander(event){
//   event.preventDefault();
//   for(let i=0; i<100;i++){
//     if (event.terget.age ){
//     }
//   }
// }

//MBI calucoluter function//

UserData.prototype.generatBMI=function(){
  let BMI =this.weight/(this.height*this.height);
  console.log(BMI);
  return BMI;
};
//for test//
// let test=new UserData('hala',25,'female',69,1.67,'lazy','loosin weight','yes');
// test.generatBMI();
