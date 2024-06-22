// This project is not GUI based. It is a console-based game. The video here shows how to develop the game in Java. You will take the requirements of the game from the video and develop the game in TypeScript and Node.js

import inquirer  from "inquirer";
import chalk from "chalk"
class Player{
    name: string;
    fuel: number = 100;
    constructor(name: string){
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease(){
        this.fuel = 100
    }
    
}
class Opponent{
    name: string;
    fuel: number = 100;
    constructor(name: string){
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
}
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: chalk.magenta("Please Enter Your Name:")
    }
])
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: chalk.greenBright("Select Your Opponent"),
        choices: ["Skeleton", "Alien", "Zombie"]
    }
])
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select)

do{
    //Skeleton
    if(opponent.select == "Skeleton"){
        let ask = await inquirer.prompt([
            {
                name: "options",
                type: "list",
                message: chalk.yellow("What would you like to do?"),
                choices: ["Attack", "Drink portion", "Run for your life.."]
            }
        ]);
        if(ask.options === "Attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if(p1.fuel <= 0){
                    console.log(chalk.redBright("You Loose, Better Luck Next Time"));
                    process.exit()
                    
                }
                
            }
            if(num <= 0){
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if(o1.fuel <= 0){
                    console.log(chalk.blueBright("You Win"));
                    process.exit()
                    
                }

            }
        }
        if(ask.options === "Drink portion"){
            p1.fuelIncrease()
            console.log(chalk.yellowBright(`Your Drink Health portion your fuel is ${p1.fuel}`));
            
        }
        if(ask.options === "Run for your life.."){
            console.log(chalk.redBright("You loose, better luck next time"));
            process.exit()
        }

    }
    //Alien
    if(opponent.select == "Alien"){
        let ask = await inquirer.prompt([
            {
                name: "options",
                type: "list",
                message: chalk.yellowBright("What would you like to do?"),
                choices: ["Attack", "Drink portion", "Run for your life.."]
            }
        ]);
        if(ask.options === "Attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if(p1.fuel <= 0){
                    console.log(chalk.redBright("You Loose, Better Luck Next Time"));
                    process.exit()
                    
                }
                
            }
            if(num <= 0){
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if(o1.fuel <= 0){
                    console.log(chalk.greenBright("You Win"));
                    process.exit()
                    
                }

            }
        }
        if(ask.options === "Drink portion"){
            p1.fuelIncrease()
            console.log(`Your Drink Health portion your fuel is ${p1.fuel}`);
            
        }
        if(ask.options === "Run for your life.."){
            console.log(chalk.redBright("You loose, better luck next time"));
            process.exit()
        }

    }
    //Zombie
    if(opponent.select == "Zombie"){
        let ask = await inquirer.prompt([
            {
                name: "options",
                type: "list",
                message: chalk.yellow("What would you like to do?"),
                choices: ["Attack", "Drink portion", "Run for your life.."]
            }
        ]);
        if(ask.options === "Attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if(p1.fuel <= 0){
                    console.log(chalk.red("You Loose, Better Luck Next Time"));
                    process.exit()
                    
                }
                
            }
            if(num <= 0){
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if(o1.fuel <= 0){
                    console.log(chalk.greenBright("You Win"));
                    process.exit()
                    
                }

            }
        }
        if(ask.options === "Drink portion"){
            p1.fuelIncrease()
            console.log(`Your Drink Health portion your fuel is ${p1.fuel}`);
            
        }
        if(ask.options === "Run for your life.."){
            console.log(chalk.red("You loose, better luck next time"));
            process.exit()
        }

    }
}
while(true)