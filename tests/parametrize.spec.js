import {test,expect} from '@playwright/test'
test.describe("login serial execution",()=>{test.describe.configure({
     mode:'serial'
})
    })
//create aray of object 
const users=[
{username:'tomsmith',password:'SuperSecretPassword!'},
{username:'tomsmith1',password:'SuperSecretPassword!1'},
{username:'tomsmith2',password:'SuperSecretPassword!2'}
];
users.forEach((user)=>{
    test(`verify login with ${user.username}`,async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.locator('#username').fill(user.username);
    await page.locator('#password').fill(user.password);
    await page.click("button[type='submit']");
    await expect(page.locator('#flash')).toBeVisible();


    })
})

