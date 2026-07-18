class banckAcc{
    constructor(holder,balance){
        this.holder = holder;
        this.balance = balance;
    }

    deposite(amount){
        this.balance += amount;
        console.log("Balance after deposite:" +this.balance);
    }

    withdraw(amount){
        if (amount<=this.balance){
            this.balance -= amount;
            console.log("Balance after withdrawal:" + this.balance);
        }else{
            console.log("Insufficient Balance");
        }
    }
}

const account = new banckAcc ("Nishit",10000);

account.deposite(5000);
account.withdraw(30000);