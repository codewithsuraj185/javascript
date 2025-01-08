
// let text="This is the string";     //string
// let arr1=["suraj",22,"bhopal"]    //array

// //object
// //key:value;

// let student={
//     name:"Suraj",
//     age:22,
//     city:"bhopal",
//     welcome:function(){
//         console.log(`Welcome to ${this.name} Home`);
//     },
//     fruits:["Apple","mango","banana","avacado"]
//     // name:"ansh"         
// }
// // console.log(student.age);               //  access 25
//  student.email="sn701746@gmail.com";      // add any word an object view -cons .log(____)
// // student.age=25;                           // update 
// // delete student.name;                       //  delete 

// // student.welcome()

// // console.log(student.fruits[2])             // add a value 



// // interview vivi question
// // distrucher 


// // spread operator 



// let student={
//     name:"Suraj",
//     age:20,
//     city:"bhopal"
// }


// const {name,age,city}=student;
// console.log(city);


let student1={
    name:"suraj",
    age:20,
    
}

let student2={
    city:"bhopal",
    mobile:123456
}

let newobj={...student1,...student2}
console.log(newobj);

let arry=[8,9,6]
let newarry=["name,...arry,3,5,7"]
console.log(newarry)
