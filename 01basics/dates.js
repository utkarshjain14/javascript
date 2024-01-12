// let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toLocaleString());

// let mycreateddate = new Date(2024,0,23)
// let mycreateddate = new Date(2024,0,23,5,3)

let mycreateddate = new Date("2024,09,14")
// console.log(mycreateddate.toLocaleString());

let mytimestamp = Date.now()
// console.log(mytimestamp);
// console.log(mycreateddate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
console.log(newdate.getHours());

newdate.toLocaleString('default',{
    weekday:"long"
})
console.log(newdate.toLocaleString());