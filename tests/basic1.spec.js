import { test, expect } from '@playwright/test';
test("verify the filling form ",async({page})=>{
test.setTimeout(6000);
await page.reload({waitUntil:'domcontentloaded'});//to reload page if not loads 

await page.goto('https://demo.automationtesting.in/Register.html',{waitUntil:'domcontentloaded'});
// //gotodifferent page
// await page.goto('https://www.google.com/?zx=1774715533710&no_sw_cr=1');
// //goback
// await page.goBack();
// //forward

console.log("after delete add");
await page.getByPlaceholder("First Name").fill('Nikita');
await page.type('input[placeholder="Last Name"]','Agrawal');

//radio
test.setTimeout(6000);
await page.locator("input[name='radiooptions'][value='Male']").check();
test.setTimeout(6000);
await page.check("input[name='radiooptions'][value='FeMale']");
await expect( page.locator("input[name='radiooptions'][value='FeMale']")).toBeChecked();
//checkbox
test.setTimeout(6000);
await page.locator("input[id='checkbox1']").check();
test.setTimeout(6000);
await page.locator('input#checkbox2').check();
await page.pause();

})

test("verify the click of button",async({page})=>{
test.setTimeout(6000);
await page.reload({waitUntil:'domcontentloaded'});
await page.goto('https://www.adaptiveu.io/');
await page.locator('div a.link-btn-primary.desktop').click();
})

//error msgs grab
test("verify the error msgs",async({page})=>{
test.setTimeout(6000);
await page.pause();
await page.reload({waitUntil:'domcontentloaded'});
await page.goto('https://www.adaptiveu.io/');
await page.locator('li a.link-btn-primary.desktop').click();
await page.locator('#submit-btn').click();
// /await expect(page.locator('div.g-input-wrapper.error')).toHaveClass('g-input-wrapper.error');
await expect(page.getByText("Enter valid name")).toBeVisible();
})


//drop down handling -by select tag
test("verify the dropdown",async({page})=>{
test.setTimeout(6000);
await page.pause();
await page.reload({waitUntil:'domcontentloaded'});
await page.goto('https://demo.automationtesting.in/Register.html');
await page.locator('#Skills').selectOption('Adobe InDesign');
//if no id in select  tag by text or label,value
await page.selectOption('select',{value:'Adobe Photoshop'});
await page.selectOption('select',{label:'Analytics'});


})
//drop down with entering value 
test("verify the dropdown with text enter ",async({page})=>{
test.setTimeout(6000);
await page.pause();
await page.reload({waitUntil:'domcontentloaded'});
await page.goto('https://demo.automationtesting.in/Register.html');
await page.click("span[role='combobox']");
await page.locator("input[role='textbox']").fill('India');
await page.getByRole('treeitem',{name:'India'}).click();
})


