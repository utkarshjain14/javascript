const mySym = Symbol("keys")


const JsUser = {
    name: "utkarsh",
    "full name": "utkarsh jain",
    [mySym]: "mykeys1",
    age:18,
    location: "indore",
    email: "utkarsh@google.com",
    isLoggedIn: false,
    lastLoginDays: ['monday','saturday']

}


// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])



JsUser.email = "utkarsh@microsoft.com"
// Object.freeze(JsUser)
JsUser.email = "utkarsh@chatgpt.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this["full name"]}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());