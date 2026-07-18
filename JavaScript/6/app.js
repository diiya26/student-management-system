function checkresult(marks){
    return new Promise((resolve,reject) => {
        if (marks >= 35){
            resolve("Student Passed");
        }
        else{
            reject("Student Failed");
        }
    });
}

checkresult(50)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });