function wait(duration){
    const promise = new Promise((res,rej)=>{
        setTimeout(()=>{
            res("This is the resolved value after waiting "+ duration + " ms");
        },duration)
    })
    return promise;
}

async function demo() {
    console.log('Start demo');
    const result = await wait(1000);
    const result2 = await wait(500);
    console.log(result);
    console.log(result2);
    console.log('1 second later');
}
// console.log('Before demo call');
// demo();
// console.log('After demo call');


//--------------

function randomResolveReject(){
    const p = new Promise ((res ,rej)=>{
        setTimeout(()=>{
            const ren = Math.random();
            if(ren<0.5){
                res("Resolved! Random number was " + ren);
            }else{
                rej("Rejected! Random number was " + ren);      
            }
        },2000)
    })
    return p;
}
randomResolveReject().then((value)=>{
console.log("Promise fulfilled with value: ", value);
return randomResolveReject()
}).then((val)=>{
    console.log("Second promise fulfilled 2 with value: ", val);
}).catch((error)=>{
    console.error("Promise rejected with error: ", error);
});