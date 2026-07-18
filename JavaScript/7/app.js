console.log("Processing Payment...");

const Payment = new Promise((resolve) => {
    setTimeout(()=>{
        resolve("Payment succesfull");
    },4000);
});

Payment
    .then((message)=>{
        console.log(message);
    })
    .catch((error)=>{
        console.log(error);
    });