class BankAccount {
    constructor(accountNumber , accountHolder, balance = 0){
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amt){
        if(amt>0){
            this.balance+=amt;
            console.log(`Successfully deposited ${amt}. New balance is ${this.balance}`);

        }else{
            console.log("Deposit amount must be positive");
        }
    }
}