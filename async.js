let stocks = {
    Fruits:["apple","mango","banana","orange"],
    Toppings:[ "sprinkles", "coffee", "nuts"],
    Holder:["cone","cup","stick"],
    liquid:["water","ice"]
}

let is_shop_open = true;



// understand the concept and relation between time and work
// the below is the example

function time(ms){

    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(resolve,ms)
        }else{
            reject(console.log("The shop is closed."))
        }
    })
}


async function kitchen(){
    try{
        await time(2000)
        console.log(`${stocks.Fruits[0]} is selected`)

        await time(0)
        console.log("start the production")

        await time(2000)
        console.log("cut the fruits")

        await time(2000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`)

        await time(1000)
        console.log("start the machine")

        await time(2000)
        console.log(`Ice cream placed on ${stocks.Holder[0]}`)

        await time(3000)
        console.log(`${stocks.Toppings[0]} was added`)

        await time(2000)
        console.log("Serve the ice cream")
    }
    catch(error){
        console.log("Customer left",error)
    }
    finally{
        console.log("day ended, shop closed")
    }
 }

kitchen()




//sample example of the async await function

// let order = () =>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(console.log("Which topping would u like to have?"))
//         },3000)
//     })
// }

// async function kitchen(){
//     console.log("A")
//     console.log("B")
//     console.log("C")

//     await order()

//     console.log("D")
//     console.log("E")
// }
// kitchen()
// console.log("Cleaning the table")
// console.log("Getting others order")



// simple async await function
// async function order(){
//     try{
//         await abc;
//     }
//     catch(error){
//         console.log("abc doesnt exist",error)
//     }
//     finally{
//         console.log("runs code anyways")
//     }
// }

// order();

// can do same as promises
// order()

// .then(()=>{// in this way we can also use .then, .catch and .finally in async await
//     console.log("jfbvadjfbau")
// })
