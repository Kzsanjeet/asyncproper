 // we make any function async
 // and we can await the promises
// we have to keep on mind that async function always returns a promise
 



async function sanjeet(){
    let ktmWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("27 Deg")
        },2000)
    })
    
    let b12Weather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("23 Deg")
        },5000)
    })
    let kdcWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("24 Deg")
        },4000)
    })
    // ktmWeather.then(alert)
    // b12Weather.then(alert)
    // kdcWeather.then(alert)
    console.log("Fething ktm weather, please wait..")
    let ktm = await ktmWeather
    console.log("Fetched ktm weather:"+ktm)

    console.log("Fetching kdc weather, please wait..")
    let kdc = await b12Weather
    console.log("Fetched kdc weather"+kdc)
    //return [ktm, kdc] // if we store in list it gives in list
    return {ktm,kdc} //if we return in array
}
console.log("Welcom to control room");
// let a = sanjeet()
// a.then((value)=>{
//     console.log(value)  //here it returns the value in list
//     // here it display the value in array 
// })

const cheru=async()=>{
    console.log("Im not waiting and it is been displayed")
}

const main1= async()=>{
    let a = await sanjeet()
    let b = await cheru()
}

main1()