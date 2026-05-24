import { test, expect } from '@playwright/test';



test("verify the drop down",async({page})=>{
await page.goto('https://practice.expandtesting.com/dropdown');
const simpledd= page.locator("#dropdown");
await simpledd.click();
await simpledd.selectOption({label:'Option 1'});
await simpledd.selectOption({value:'2'});
await expect(page.locator("//option[text()='Option 2']")).toBeEnabled(); 
await page.pause(); 
})

test("verify the Multi select drop down",async({page})=>{
await page.goto('https://demoqa.com/select-menu');
const Noselectdd= page.locator("#react-select-4-input");
await Noselectdd.click();
await page.locator('//div[text()="Green"]').click();
await page.locator('//div[text()="Blue"]').click();
await page.locator('//div[@aria-label="Remove Blue"]').click();
await page.pause(); 
})


test("verify the to get all iframe with frames()",async({page})=>{
await page.goto('https://the-internet.herokuapp.com/nested_frames',{waitUntil:'domcontentloaded'});
await page.pause();
const frames=page.frames();
console.log(frames.length);
})
//prompt 
  test("verify handling prompts", async ({ page,context }) => {
  test.setTimeout(20000);

  await page.goto("https://the-internet.herokuapp.com/javascript_alerts", {
    waitUntil: "domcontentloaded"});
    await page.pause();
    //event listner -whwn prompt appears it runs
    page.on('dialog',async dialog=>{
        await dialog.accept('playwright user');//clicks on ok and enters text in prompt 
    });
    await page.locator("button[onclick='jsPrompt()']").click();//triggers prompt pop up 



  });
  //alerts
   test("verify handling ALerts", async ({ page,context }) => {
  test.setTimeout(20000);

  await page.goto("https://the-internet.herokuapp.com/javascript_alerts", {
    waitUntil: "domcontentloaded"});
    await page.pause();
    //event listner -whwn prompt appears it runs
    page.on('dialog',async dialog=>{
        console.log(dialog.message());//grabs the text on dialog box
        await dialog.accept();//clicks on ok 
    });
    await page.locator("button[onclick='jsAlert()']").click();//triggers prompt pop up 



  });

  //confirmation
    test("verify handling confirmALerts", async ({ page,context }) => {
  test.setTimeout(20000);

  await page.goto("https://the-internet.herokuapp.com/javascript_alerts", {
    waitUntil: "domcontentloaded"});
    await page.pause();
    //event listner -whwn prompt appears it runs
    page.on('dialog',async dialog=>{
        console.log(dialog.message());//grabs the text on dialog box
        await dialog.accept();//clicks on ok 
        await dialog.dismiss();
    });
    await page.locator("button[onclick='jsConfirm()']").click();//triggers prompt pop up 



  });


   //PAGE SCROLL
    test.only("verify pagescrolling", async ({ page,context }) => {
  test.setTimeout(20000);

  await page.goto("https://the-internet.herokuapp.com/infinite_scroll", {
    waitUntil: "domcontentloaded"});
    await page.pause();
    //using mouse infinite scroll or by pixel
    await page.mouse.wheel(0,1000);//scroll down
    await page.waitForTimeout(4000);
    await page.mouse.wheel(0,-1000);//scroll up

    //using evaluate function of playwright 
    await page.evaluate(()=>window.scrollBy(0,1000));
   

    //using only javascript
     const ele =page.locator("//div[@class='example']");
     await ele.scrollIntoViewIfNeeded();
     console.log(ele.textContent());

   

  });
 
 

