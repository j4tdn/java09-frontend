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

let months = ['March','April','May','June'];
months.unshift('January','Feburary');
months.push("July");
months.splice(2, 0, 'new months');
console.log(months);