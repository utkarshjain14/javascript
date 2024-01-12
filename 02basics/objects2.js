// const instauser = new Object()
const instauser = {}

instauser.name = "utkarshjain"
instauser.id = "utkarshj14"
instauser.isLoggedIn = false

// console.log(instauser);







const regularUser = {
    email: "utkarsh@gmail.com",
    fullname: {
        userfullname: {
            firstname: "utkarsh",
            lastname: "jain"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1, ...obj2}

// console.log(obj3);


const users = [
    {
        id: 1,
        email: "u@gmail.com"
    },
    {
        id: 1,
        email: "u@gmail.com"
    },
    {
        id: 1,
        email: "u@gmail.com"
    },
]
users[1].email
// console.log(instauser)


// console.log(Object.keys(instauser));
// console.log(Object.values(instauser));
// console.log(Object.entries(instauser));

console.log(instauser.hasOwnProperty('isLoggedIn'));

