let stocks = {
    Fruits:["apple","mango","banana","orange"],
    Toppings:[ "sprinkles", "coffee", "nuts"],
    Holder:["cone","cup","stick"],
    liquid:["water","ice"]
}


// Relationship between time and work
// let work1=()=>{
//     console.log(`${stocks.Fruits[0]}`);
// }

let is_shop_open = true;

let order = (time,work)=>{

    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(()=>{
                resolve(work())
            },time);
        }
        else{
            reject(console.log("Our shop is closed."))
        };
    });
};

// order(2000,work1)

order(2000,()=>console.log(`${stocks.Fruits[0]}`)) // another method of passing the message

// promise chaining
.then(()=>{
    return order(0,()=>console.log("Production has started"))
})
.then(()=>{
    return order(2000, () => console.log("The fruit was chopped"))
})
.then(()=>{
    return order(1000, ()=>{
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
    })
})
.then(()=>{
    return order(1000,()=>{
        console.log("Start the machine")
    })
})
.then(()=>{
    return order(2000,()=>{
        console.log(`Ice cream was filled in ${stocks.Holder[0]}`)
    })
})
.then(()=>{
    return order(3000,()=>console.log(`${stocks.Toppings[0]} was added as last`))
})
.then(()=>{
    return order(2000, ()=>console.log("Ice cream was served"))
})


.catch(()=>{
    console.log("customer left")
})

.finally(()=>{
    console.log("Day ended shop is closed.")
})


// simple example of promises
// let oder1 = (True,time)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(True){
//                 resolve(console.log("it is true."))
//             }else{
//                 reject("It is not true")
//             }
//         },time)
        
//     })
// }
// oder1(true,2000)
// .then(()=>{
//     return oder1(true,4000)
// })
// .then(()=>{
//     return oder1(false,3000)
// })


