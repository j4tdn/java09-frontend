// alert("Hello. WellCome to our page");

// unassigned:'underfined'
// let x;
// x=5;
// let y=5;
// let z="hello";
// z=5>3;
// console.log(x+ (typeof z));
// console.log(y);
// console.log(z);
// let s="wellcome";
// console.log(s[2]);
// console.log(s.charAt(2));
// let isAdult = confirm('Are you adult ?');
// console.log('is adult'+isAdult);	
// let age = prompt('enter your age', '18');
// console.log('age: '+age);
//Enter list of numbers from promt
//until promt 's input = 0 >> sum of non-zero element


// let names =['vera','john','smiths'];
// console.log(names[0]);

// //for index
// for(let i=0;i< names.length;i++){
// 		console.log(i+':'+names[i]);
// }

// console.log('=================');
// for(let name of names){
// 	console.log(name);
// }	


// let sum =0;
// while (true) {
// 	let value =+prompt('Enter Number: ');
// 	if(value ===0){
// 		break;
// 	} 
// 	sum+=value;
// 	console.log('result: '+sum);
// 	// statement
// }

//JS: everything is object

// function printLines(){
// 	console.log('line_1');
// 	console.log('line_2');

// }
// printLines();

// function sum(a,b){
// 	return a+b;
// }

// let sum = function(a,b){
// 	function printOut(){
// 		console.log("nested function");

// 	}
// 	printOut();
// 	return a+b;
// };

// let x= +prompt('enter a:');
// let y= +prompt('enter b:');

// let result =sum(x,y);

// console.log('result: '+result);

//nested  class 
//nested  function


// function bake (ipFruit, otherIngs) {
// 	function squeeze(fruit) {
// 		let juice =fruit + ' juice';
// 		return juice;
		
// }
// 	if(squeeze(ipFruit)==='orange juice' && otherIngs.includes('eggs') && otherIngs.includes('milk')){
// 	console.log('The cupcake has been baked')

// 	} else {
// 		console.log('you do not have enough ingredients');
// 	} 
// }

// // let juice = squeeze('orange');
// bake('orange', ['eggs', 'milk']);
// function greetz(name){
// 	alert("hello"+name);
// function show(){

// }

// }
// function processFromInput(callback){
// 	let input = prompt("enter user: ");
// 	callback(input);
// }

// processFromInput(greetz);

// let a=7;
// let b=4;

// let sub = (a,b)=> a-b;

// function cal(a,b, callback){
// 	return callback(a,b);

// }

// let result =cal(a,b,function(a,b){
// 	return a*b;
// });

// console.log('result '+ result);

// let counter=0;
// let intervel = setInterval(function(){
// 	console.log('hello'+ counter++);
// 	if(counter === 5 ){
// 		clearInterval(intervel);
// 	}
// }, 1000);
// console.log(intervel);

// Array.prototype.isert = function(idx, item) {
//      this.splice(idx, 0, item);
// };

// Array.prototype.remove = function(idx) {
//      this.splice(idx, 1);
// };

// let months = ['March','April','May','June'];

// months.unshift('January','Feburary');
// months.push("July");
// months.isert(2, 'new months');

// months.shift();
// months.pop();

// months.remove(0);

// let months = [1,2,3,4,5,6]; 

// console.log(months.filter(month => month<3));
// console.log(months.every(month => month <5));

//  months.forEach((month, idx) => console.log(idx + ': '+ month));
// 	months.forEach(function(month, idx){
// 	console.log(idx + ': '+ month);
// } );

// let person={
// 	fristName:'Daniel',
// 	lastName: 'Turk',
// 	age     :28,
// 	sex 	:'male',
// 	greetz	:function() {
// 		console.log(`hello. my name is ${this.fristName}`);

// 	}
// }
// 	console.log(person); 
// 	person.greetz();

// let tag = document.querySelectorAll("p:nth-of-type(1)");
// console.dir(tag);
// let items = document.querySelector(".items");
// let item = document.createElement("li");

// item.textContent = 'task 3';

// items.appendChild(item);

// let first =items.children[0];

// item.textContent='text 4';
// items.insertBefore(item, first);

// let btn =document.querySelector(".btn");

// btn.onclick = function() {
// 	console.log('you have clicked me');
// }
// btn.addEventListener('click',function()  {
// 	console.log('click1');
// })
// btn.addEventListener('click',function() {
// 	console.log('click2');
// })
// btn.onmouseover =function(){
// 	this.style.color='red';
// }
// btn.onmouseout = function(){
// 	this.style.color='black';
// }
let tag = document.querySelector("input");

// tag.addEventListener('keyup',function(){
// 	console.log(tag.value);
// });
tag.addEventListener('keypress',function(event){
	if(event.which===13){
		console.log(tag.value);
	}
});
