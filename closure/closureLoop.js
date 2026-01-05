for(var i=1; i<=5; i++) {
   ( function (j){
 setTimeout(()=>{
        console.log(j);
    },1000*j)
    })(i);
   
} 

// we should use let in this case 
// because let has block scope so each iteration of the loop will have 
// its own copy of the variable i.