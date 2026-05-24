export class LoginPage{
      constructor(page){
        this.page=page;
      
      //locators
      this.locators={
        usernameInput:'#username',
        passwordInput:'#password',
        loginButton:'//button[@type="submit"]',
        flashMessage:'#flash'
                   };


      }

    async goToPage(baseUrl){
        await this.page.goto(`${baseUrl}/login`); }

    async enterUsername(username){
        await this.page.fill(this.locators.usernameInput,username);
    }
    async enterPassword(password){
        await this.page.fill(this.locators.passwordInput,password);
    }
    async clickLogin(){
        await this.page.click(this.locators.loginButton);
    }

    async geyFlashmsg(){
        return await this.page.textContent(this.locators.flashMessage);
    }

    //some coders use this aswell optional 
    // async login(username,password){
    //     await this.enterUsername(username);
    //     await this.enterPassword(password);
    //     await this.clickLogin();
    // }
}