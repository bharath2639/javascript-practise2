// let usersInput = parseFloat(prompt("enter your number"));

// let arry = [1,2,12,13,15,23,25,26,27,28,29,30,31,33,45,46,48,,55,56,54];

// let pushArry = [];

// let filterNumber = arry.filter((n)=>{
//     if(n>usersInput){
//         return pushArry.push(n)
//     }
// })

// console.log(filterNumber);


// const numbers =[2,5,6,9];

// let mapMethod = numbers.map((n)=>{

//     return n*n;
// })

// console.log(mapMethod);

// const greater10 = mapMethod.filter((numbers)=>{
//     return numbers > 10;


// })

// console.log(greater10);

// const people = [
//     { name: "John", age: 25 },
//     { name: "Alice", age: 35 },
//     { name: "Bob", age: 20 },
//     { name: "Jack", age: 28 }
//   ];
// // console.log(people[0]);
// // console.log(people);
// let peopleAge = people.map((keys,index,arry)=>{
//     if(keys.age < 30 ){
//         return keys.name;
//     }
// })

// console.log(peopleAge);

// let filter = people.filter(keys => !keys.name.startsWith('J'));

// console.log(filter);


// const products = [
//     { names: "T-shirt", price: 25, category: "Fashion" },
//     { names: "Laptop", price: 1200, category: "Electronics" },
//     { names: "Headphones", price: 80, category: "Electronics" },
//     { names: "Watch", price: 60, category: "Fashion" }
//   ];
 
  
// const greaterThan50 = products.filter((keys)=>{
//     if(keys.price > 50){
//         return keys
//     }

// })

// // console.log(greaterThan50);

// const namesAccess = greaterThan50.map((keys)=>{
//    return keys.names

// })

// console.log(namesAccess);

// let headerBackground = document.getElementById("header");

// let buttonBackground = document.getElementById("button1");

// buttonBackground.onclick = () =>{
//     let randomColors1 = Math.floor(Math.random()*255);
//     let randomColors2 = Math.floor(Math.random()*255);
//     let randomColors3 = Math.floor(Math.random()*255);

//     headerBackground.style.backgroundColor =`rgb( ${randomColors1},${randomColors2},${randomColors3}) `
//     buttonBackground.style.backgroundColor = `rgb( ${randomColors1},${randomColors2},${randomColors3}) `
// }


// let usersInput = document.getElementById("userinput");
// let userUpload = document.getElementById("upload") ;

// let display = document.getElementById("image");
// let inputDisplay = document.getElementById("userinput1")



// userUpload.onchange = (event) =>{
//     let object = event.target.files[0];
//     let path = URL.createObjectURL(object);
//     display.src = path;
//     inputDisplay.innerHTML = usersInput.value ;
//     usersInput.value = ""
// }


// let arry = [1,3,5,6,9,12,16,17,19,20,23,24,26,29,30,32,33,34,36,39,45,55,65,67,69,75,77,79,85,88,89,92,95,99];
// let usersInput = parseFloat(prompt("Enter the Number"));



// let empty =[];

// let arry2=arry.filter((ele)=>{
    


//     if(ele>usersInput){
//         return empty.push(ele)
//     }


// })

// console.log(arry2);



// const numbersArray = [1, 5, 10, 15, 20];

// const mapMethod = numbersArray.map((double)=>{
//     return double*double ;
// })
// console.log(mapMethod);

// const filterNumber = mapMethod.filter((value)=>{
//     if(value > 10){
//         return value;
//     }

// })
// console.log(filterNumber);


// const people = [
//     { name: "John", age: 25 },
//     { name: "Alice", age: 35 },
//     { name: "Bob", age: 20 },
//     { name: "Jack", age: 28 }
//   ];


// const peopleAge = people.map((age)=>{
//     if(age.age<30){
//         return age.name;
//     }

// })

// console.log(peopleAge);

// const filterPeople = peopleAge.filter((n)=>{
//     if(n!=undefined){
//         return n;
//     }

// })

// console.log(filterPeople);

// const peopleFilter = people.filter(keys => !keys.name.startsWith('J'));

// console.log(peopleFilter);


// const products = [
//     { name: "Laptop", price: 1200, category: "Electronics" },
//     { name: "T-shirt", price: 25, category: "Fashion" },
//     { name: "Headphones", price: 80, category: "Electronics" },
//     { name: "Watch", price: 60, category: "Fashion" }
//   ];


// const filterProduct = products.filter(values => values.price > 50);

// const mapProduct = filterProduct.map(values => values.name);


// console.log(filterProduct);

// console.log(mapProduct);


// studentScores[1]

// const studentScores = [
//     { name: "Alice", scores: [85, 92, 88] },
//     { name: "Bob", scores: [78, 80, 75] },
//     { name: "Charlie", scores: [90, 87, 91] }
//   ];
// console.log(studentScores[1].scores);

// const filterStudet  = studentScores.filter((arry) =>{
//     // console.log(arry);
//     let eachEle = arry.name == "Alice"
//     return eachEle;
// })

// console.log(filterStudet);

// const scoress=studentScores.filter((ele)=>{
//     let students = ele.scores.some(score =>score>90);
//     return students;
    
// })
// console.log(scoress);

// let studentDtails = scoress.map((value)=>{
//     let students = value.name;
//     let marks = Math.max(...value.scores);
//     return `name:${students},HeighestScores:${marks}`
// })

// console.log(studentDtails);




// let arry = [25,65,98,97,99];

// let arry2 = arry.some(value);

// function value(fuck){
//    return fuck > 90;
// }

// console.log(arry2);

















// const studentMarks = studentScores.filter(arry => arry.scores.some(mark=>mark>90))

// console.log(studentMarks);

// const heighestMarks = studentMarks.map((arry) =>{
//     let studentName = arry.name;
//     let heighestMarks = Math.max(...arry.scores);
//     return `name:${studentName}, Heighestmarks:${heighestMarks}`
// })

// console.log(heighestMarks);

// const highestScores = studentScores.filter(student =>student.scores.some(score => score >=90));

// console.log(highestScores);


// let mapping = highestScores.map((value) =>{
//     return `name:${value.name},highestscores :${Math.max(...value.scores)}`;

// })

// console.log(mapping);


// const books = [
//     { title: "The Great Gatsby", author: "F. Scott Fitzgerald", rating: 4.5 },
//     { title: "To Kill a Mockingbird", author: "Harper Lee", rating: 4.8 },
//     { title: "1984", author: "George Orwell", rating: 4.3 },
//     { title: "Pride and Prejudice", author: "Jane Austen", rating: 3.9 }
//   ];
  

// const highestRating = books.filter(arry => arry.rating > 4.0)

// const mapping = highestRating.map(ayy2 => ayy2.title)

// console.log(mapping);

// console.log(highestRating);



// const studentScores = [
//     { name: "Alice", scores: [85, 92, 88] },
//     { name: "Bob", scores: [78, 80, 75] },
//     { name: "Charlie", scores: [90, 87, 91] }
//   ];

// const filterScores = stu




const employees = [
  { name: "Alice", department: "Sales", salary: 50000 },
  { name: "Bob", department: "Engineering", salary: 60000 },
  { name: "Charlie", department: "Sales", salary: 55000 },
  { name: "David", department: "Marketing", salary: 48000 }
];


const salesDepartment = employees.filter((value) =>{
    let sales = value.department=="Sales"
    return sales
});

console.log(salesDepartment);


const increment = salesDepartment.map((value)=>{
    let salary = value.salary
    let increase = salary * 0.10
    let add = increase + salary
    return `name:${value.name}, adjustedsalary:${add}`
})

console.log(increment);



const movies = [
  { title: "Inception", year: 2010, genre: "Sci-Fi" },
  { title: "The Dark Knight", year: 1998, genre: "Action" },
  { title: "Avatar", year: 1999, genre: "Sci-Fi" },
  { title: "The Lord of the Rings: The Return of the King", year: 2003, genre: "Fantasy" }
];



let arrayOf = [];

let getData = movies.filter(arr => arr.year >2000);

console.log(getData);

let moviesName = getData.map(arry => arry.title);

let pushInArry = arrayOf.push(moviesName)

console.log(arrayOf);

const studentGrades = [
  { name: "Alice", grades: [85, 52, 88] },
  { name: "Bob", grades: [58, 80, 95] },
  { name: "Charlie", grades: [90, 87, 91] }
];


let passStudents = studentGrades.filter(arr => arr.grades.every(arr => arr>60));

console.log(passStudents);

let average = passStudents.map((arr) =>{
  let studentName = arr.name ;
  let data = arr.grades;
  let averageOf = data.reduce((num,num1)=>{
      return num + num1/3 ;
},0);
console.log("name:",studentName,"average:",averageOf);
})






let guys = ["bharath","kumar","karthik"];

console.log(guys.includes("bharath"));


// for(n=0;n<guys.length;n++){
//   console.log(guys[n]);
// }

// for(let ele of guys){
//   console.log(ele.split());
// }

// let object = {
//   name :"bharath",
//   lName : "kumar",
//   rollNumber:2522
// }

// for(let ele in object){
//   console.log(ele);
// }


// let i=0;
// while(i<10){
//   console.log(i);
//    i++

// }


// let j= 1
// do {
//   console.log(j);
//   j++;


// }while(j<3);






// let n = 0;
// for(;n<=10;n++){
//   if(n==6){
//     continue;
//   }
//   console.log(n);
// }


const object ={
  name:"bharath",
  rollNumber:2562,
  favThings:["bikes","movies","trekking"],
  details: function(family){
    return `my roll:${this.rollNumber},and my family:${family}`
  }
}

// console.log(object.details());

// details.call(object);
// console.log(object.details.apply(object,["orthodox"]));

// console.log(object.details.bind(object));

const family = object.details.bind(object);

const familyDetails = family();

console.log(family("myname"));








































