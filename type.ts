console.log("My first typescript program")
var k = 10;
console.log(k)

var y = Math.random() < 0.7
console.log(y)

// function wish(persion:string,date:Date)
// {
//     console.log(`hello ${persion}, today is ${date.toDateString()}`);

// }

// wish("gaurav", new Date())

// export function greet(person: string, date: Date) {
//     console.log(`Hello ${person}, today is ${date.toDateString()}!`);
//   }

//   greet("Maddison", new Date());

// with type  annotions
var t: any
t = { 1: "gaurav", 2: "prasant", 3: "Ankit" }
console.log(t)

// without type annotions
var z = "sujit"
console.log(z)

var q: string = "guarav"
console.log(q)

// return type annotions in functions
// function teacher(persion:number):number
// {
//     return persion;
// }
// var d=teacher(10)
// console.log(d);

function student(st: string): string {
    return st;

}

console.log(student("gaurav"));

// const arr=["kumar","sujit","vishal"]
// arr.forEach(function(l){
//     console.log(l.toUpperCase())
// });

// var arr=[1,2,3,4,5]
// arr.forEach((p)=>{
//     console.log(p)
// })

// function MyCollage(st:{a:string,b:number})
// {
//     console.log("My name is " +st.a);
//     console.log("My roll is " +st.b);
// }
// MyCollage({a:"Gaurav",b:156.00})

// ===========union types============
// function MyData(st:string|number|boolean)
// {
//     console.log("name is "+st);
// }

// MyData("Gaurav")
// MyData(890);
// MyData(true);

// function Details(id: string | number) {
//     if (typeof id === "string") {
//         console.log("My data is ", id.toUpperCase())
//     }else{
//         console.log("Value is ",id);
//     }
// }

// Details("gaurav");
// Details(256);

// ============type alias========
// type pt=string

// function Student(my:pt)
// {
//     console.log("My value is:"+my);
// }

// Student("kumar")

// var t:string[];
// t=["gaurav","kumar","Ankit"]
// console.log(t)

// var t:number[]
// t=[1,2,3,4,5,6];
// console.log(t);  


// ================Narrowing=================

// function printall(str: string[] | null) {
//     if (str && typeof str === "object") {
//         for (const i of str) {
//             console.log("the value is " +i);
//         }
//     }else{
//         console.log("the value is null")
//     }
// }
// printall(["kumar","sujit","ankit"])
// printall(null)

// var num=[1,2,3,4,5];
// var zx=num.map((i)=>i*5)
// console.log(zx);

// ========= includes() method narrowing=======
// var we=["gaurav","ankit","prasant"];
// if(we.includes("gaurav")){
//     console.log("Yes it is...")
// }else{
//     console.log("No..not yet")
// }


// ==========in opeartor==========
// var nm={me:'gaurav',you:'ankit'};
// if('me' in nm){
//     console.log("yes it is...")
// }else{
//     console.log("No...not yet")
// }


// ============instanceof==============
// function printall(x: Date | string) {
//     if (x instanceof Date) {
//         console.log("Valeu is:"+x.toDateString());
//     } else {
//         console.log(x)
//     }
// }

// printall(new Date());



// ====================interface===================
// interface Circle{
//     kind:"circle";
//     radius:number;
// }

// interface Square{
//     kind:"square";
//     sidelength:number;
// }

// function calc(shape:Circle|Square){
//     switch(shape.kind){
//         case "circle":
//             return Math.PI*shape.radius**2;
//         case "square":
//             return shape.sidelength**2;
//     }
// }

// let arr:Circle={
//     kind:"circle",
//     radius:8
// };

// let ml:Square={
//     kind:"square",
//     sidelength:60
// };

// console.log("the area is :"+calc(arr));
// console.log("the area is :"+calc(ml));


// let eat=(firstname:string)=>{
//     console.log("the name is :"+firstname);
// }

// eat("sujit");

// ===========generics===========
// In genercis function you can pass any types of values inside the function
// // 
// function eat<T>(arr:T){
//     console.log("the value is: "+arr);
// }

// let a=[12,33,45,76]
// eat(a);

// function printall(arr:any){
//     console.log("the data is:"+arr)
// }
// printall("gaurav")
// printall([1,2,3,4,56])


// ===============classes==============
// class Gaurav{
//     name:string="ankit";
//     roll:number;

//     getName(){
//         return this.name;
//     }

//     getRoll(){
//         return this.roll;
//     }
// }

// let myData=new Gaurav();
// myData.name="gaurav"
// myData.roll=200;
// console.log(`Name is ${myData.getName()} and Roll is ${myData.getRoll()}`)
// console.log(myData.getRoll())

// ==============Constructors========
// class Student{
//     name:string;
//     age:number;
//     branch:string;

//     constructor(name:string,age:number,branch:string){
//         this.name=name;
//         this.age=age;
//         this.branch=branch;

//     }


//     getName(){
//         return this.name;
//     }

//     getAge(){
//         return this.age;
//     }

//     getBranch(){
//         return this.branch;
//     }
// }

// let stu=new Student("gaurav",20,"CSE");
// console.log(stu.getName())
// console.log(stu.getAge())
// console.log(stu.getBranch())

// ============Super calls============
// class Teacher{
//     name:string;
//     age:number;

//     constructor(name:string,age:number){
//         this.name=name;
//         this.age=age;
//     }
//     getName(){
//         return this.name;
//     }
//     getAge(){
//         return this.age;
//     }
// }

// class Student extends Teacher{
//     branch:string;
//     constructor(name:string,age:number,branch?:string){
//         super(name,age);
//         this.branch=branch;
//     }

//     getBranch(){
//         return this.branch;
//     }

//     myBio(emp:string){  //Method
//         console.log(`Current I am emp of ${emp}`)
//     }

//     printAll(){
//         console.log(`My name is ${this.getName()} I am from ${this.getBranch()} branch and my age is ${this.getAge()}`)
//     }
// }

// let mydata=new Student("gaurav",20,"CSE");
// mydata.printAll();
// mydata.myBio("Nile Technogies")


// ===============getter and setter============

// class Emp{
//  name:string;
//  roll:number;

//  set setName(name:string){
//      this.name=name;
    
//  }
//  set setRoll(roll:number){
//     this.roll=roll;
//  }
//  get getName(){
//      return this.name;
//  }

//  get getRoll(){
//      return this.roll;
//  }
 
// }

// let emp=new Emp();
// emp.setName="gaurav";
// emp.setRoll=20;
// console.log("the bnam is :"+emp.getName+" and roll is:"+emp.getRoll);

// ============implements==================
// interface Gaurav{
//     eat(name:string);

// }

// class Student implements Gaurav{
//     eat(name:string){
//         console.log("My name is:"+name)
//     }

//     showBio(){
//         console.log("The data will be:....going to fast")
//     }
// }

// let data=new Student();
// data.eat("sujit");
// data.showBio();


// class Sujit{
//     data(){
//         console.log("hello how are you")
//     }
// }
// class Ankit extends Sujit{
//     data(){
//         console.log("Helo ankit how are you")
//     }
// }

// let data=new Ankit();
// let mydata=new Sujit();
// data.data();
// mydata.data();

//================ generic classes=================
// class Box<Type> {
//     contents: Type;
//     constructor(value: Type) {
//       this.contents = value;
//     }
//   }
  
//   const b = new Box("hello!");
//   //    ^?
//   console.log(b.contents)


// ==================abstract classes and members========
// instantiation of abstract class can not be created.
// If any abstract method is present  in parent class that should be override in the child class
abstract class Gaurav{
  abstract getName();

  printName(){
    console.log("hello good morning:" +this.getName())
  }
}
class Sujit extends Gaurav{
  getName(){
    return "Gaurav"
  }
}

let s=new Sujit();
s.printName();
