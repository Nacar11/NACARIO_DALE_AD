export class user {

    private username:string;
    private fullName: name;
    private id:number; 
    private age: number;
    private email: string;
    private password: string

    constructor(username:string, password:string, age:number, email:string, fullName: name){
        this.username = username;
        this.password = password;   
        this.age = age;
        this.email = email;
        this.fullName = fullName;
    }

    displayAccountInfo(){
        console.log(`Username: ${this.username}`);
        console.log(`Password: ${this.password}`);
        console.log("/nAccount Information");
        console.log(`Full Name: ${this.fullName.lastName}, ${this.fullName.firstName} ${this.fullName.middleName}`);
        console.log(`Age: ${this.age}`);
        console.log(`email: ${this.email}`);
        console.log(`ID No: ${this.id}`);
    }

    toJson(){
        return {
            username:this.username,
            password:this.password,
            fullName:this.fullName,
            age:this.age,
            email:this.email,
            id:this.id
        };
    }

}


export interface name {
    firstName: string;
    middleName: string;
    lastName: string;
}