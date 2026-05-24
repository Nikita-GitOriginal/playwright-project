import { test,expect } from "@playwright/test";
import {ENV} from "../utils/env";
import {LoginPage} from "../pages/login.page.js";
 test.describe('Heroku login using pom',()=>{
    test("valid login should success",async({page})=>{
     const loginpage=new LoginPage(page);
     loginpage.goToPage(ENV.BASE_URL);
     loginpage.enterPassword(ENV.USERNAME);
     loginpage.enterPassword(ENV.PASSWORD);
     loginpage.clickLogin();
     await page.pause();
     //asertion
    const msgFlash= loginpage.geyFlashmsg();
    await expect(msgFlash).toContain("You logged into a secure area!");
    });
 });