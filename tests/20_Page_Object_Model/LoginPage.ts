import {Page , Locator, expect} from '@playwright/test'

export class LoginPage{

    //page locator 
    readonly page:Page;
    readonly emailinput:Locator;
    readonly passwordinput:Locator;
    readonly loginbutton:Locator;

    constructor(page:Page){
        this.page=page;
        this.emailinput = page.getByRole("textbox", { name: "Username" })
        this.passwordinput = page.getByRole("textbox", { name: "Password" })
        this.loginbutton = page.getByRole("button", { name: "Login" })
    }

    //page actions

    async goto(){
        await this.page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    }

    async login(username:string,password:string){
        this.emailinput.fill(username);
        this.passwordinput.fill(password);
        this.loginbutton.click();
    }

}