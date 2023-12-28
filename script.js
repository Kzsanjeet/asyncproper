// synchronous

// console.log("I")

// console.log("eat ")

// console.log("ice cream")

// console.log("with a ")

// console.log("spoon")


// asynchronous

// console.log("I")

// console.log("eat ")

// setTimeout(()=>{
//     console.log("ice cream")
//     },4000)

// console.log("with a ")

// console.log("spoon")


// call backs -> calling the function inside another function is called callbacks
// let one = (call_two) =>{// passing an argument
//     //call_two() // it this way it runs function two first and runs function one
//     console.log('step 1 complete, please call the step 2');
//     call_two() //calling that argument as function as the two is a function
// }

// let two=()=>{
//     console.log ('step 2')
// }

// one(two)//passing function two as an argumnet


// ice-cream shop example

let stocks = {
    Fruits:["apple","mango","banana","orange"],
    Toppings:[ "sprinkles", "coffee", "nuts"],
    Holder:["cone","cup","stick"]
}


let order = (Fruit_name,call_production)=>{
setTimeout(()=>{
    console.log(`${stocks.Fruits[Fruit_name]}`)
 call_production()

},2000)
//  call_production()
}

let production = ()=>{
    setTimeout(()=>{
        console.log ("Production started!")
    },0)
}

order(0,production)
