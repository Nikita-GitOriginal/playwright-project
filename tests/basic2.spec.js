//MOUSE -click-for left 
//doble click-dblclick();
//right click=click({button:'right'})
//hover-page.hover(loctor)
//draganddrop=page.draganddrop("draggablelocator",'dropable locator')






import { test, expect } from '@playwright/test';
import { error } from 'node:console';
test("verify  ",async({page})=>{
test.setTimeout(700000);

await page.goto('https://the-internet.herokuapp.com/drag_and_drop',{waitUntil:'domcontentloaded'});
await page.hover('.example');
//await page.locator('#column-a').dblclick();
//or await page.mouse.click(100,200)-alternativr to dblclick function
await page.locator('#column-a').click();
//or await page.mouse.click(100,200)-alternativr toclick function

await page.dragAndDrop('#column-a','#column-b');
await page.pause();



})


//keyboard
test("verify key actions  ",async({page})=>{
test.setTimeout(700000);

await page.goto('https://the-internet.herokuapp.com/key_presses',{waitUntil:'domcontentloaded'});
await page.press('#target','Enter');//enter
await page.keyboard.press('Enter');//just enter anywhere
await page.pause();
//shift +arrow to select key //clear something 
await page.keyboard.press('Control+A');
await page.keyboard.press('Control+c');
await page.keyboard.press('Control+v');
await page.keyboard.press('Shift+ArrowRight');
await page.keyboard.press('Control+A');
await page.keyboard.press('Backspace');
await page.keyboard.press('Shift/Caps+A');


})

//FILE UPLOAD 
//keep file in test or uploads 
test("verify file upload  ",async({page})=>{
test.setTimeout(20000);
await page.goto('https://the-internet.herokuapp.com/upload',{waitUntil:'domcontentloaded'});
await page.setInputFiles('#file-upload','tests/sample.pdf');
await page.setInputFiles('#file-upload',[]);
// await page.click('#file-submit');
// const msg =page.locator("#content");
// await expect(msg).toBeVisible();
// console.log(msg.textContent());
//to uploafd multiple files
//await page.setInputFiles('#file-upload',['tests/sample.pdf','file2']);
//want to remove upload files await page.setInputFiles('#file-upload',[]]);
//filechooser event is also therre but not used to upload real time-system se 
// const [filechooser] =await Promise.all({
//     page.waitForEvent('filechooser');
//     page.click('locator');
// })
// await filechooser.setFiles('system file path');
await page.pause();

})

//screenshot
test("verify screenshot ",async({page})=>{
test.setTimeout(20000);
await page.goto('https://the-internet.herokuapp.com/upload',{waitUntil:'domcontentloaded'});
await page.screenshot({path:'fullpage.png',fullPage: true});
await page.locator('#file-submit').screenshot({path:"element.png"});


})
test("verify Datesetting ",async({page})=>{
test.setTimeout(200000);
await page.goto('https://formy-project.herokuapp.com/datepicker',{waitUntil:'domcontentloaded'});
await page.click('#datepicker');//01/03/2024
await page.click('div.datepicker-days th[class="datepicker-switch"][colspan="5"]');
// //div.datepicker-days th[class="datepicker-switch"][colspan="5"]
// await page.click('div.datepicker-months th[class="prev"]');
// await page.click('div.datepicker-months th[class="prev"]');
// await page.locator('div.datepicker-months .month',{hasText:'Mar'}).click();
// await page.locator('td[data-date="1709337600000"]').click();
// await page.pause();
// //for infinite <<or>> click either use input best way or loop
const reqyeartext ="1998";

while(true){
    const yeartext=await page.locator('div.datepicker-days th[class="datepicker-switch"][colspan="5"]').textContent();

if(yeartext.includes(reqyeartext)){
    break;
    
}
await page.click('div.datepicker-months th[class="prev"]');
}
await page.locator('div.datepicker-months .month',{hasText:'Mar'}).click();
await page.locator('td[data-date="888796800000"]').click();
await page.screenshot({path:'date.png',fullPage:true});
await page.pause();

})

test(" verify webtables ",async({page})=>{
test.setTimeout(200000);
await page.goto('https://the-internet.herokuapp.com/tables',{waitUntil:'domcontentloaded'});
//header print
const headers=page.locator('table#table1 thead tr th');
for(let i=0;i<await headers.count();i++)
{  const text= headers.nth(i).textContent(); 
    console.log(text);
}
const allrowsdata=page.locator('table#table1 tbody tr');
for(let j=0;j<await allrowsdata.count();j++){//count numbers of rows
    const col =allrowsdata.nth(j).locator('td');
    let rowData=[];
       for(let p=0;p<await col.count();p++){
        rowData.push(await col.nth(p).textContent());

       }
       console.log(rowData);
}



await page.pause();
})

//email print

test(" verify only a particular col data ",async({page})=>{
test.setTimeout(200000);
await page.goto('https://the-internet.herokuapp.com/tables',{waitUntil:'domcontentloaded'});
const allrow=await page.locator('table#table1 tbody tr');
let coldataofemail=[];
for(let i=0;i<await allrow.count();i++){
    const col =allrow.nth(i).locator('td').nth(2);
    
    coldataofemail.push(await col.textContent())//table#table1 tbody tr td:nth-of-type(3)
   

}
console.log(coldataofemail);

})

//slider using focus or mouse drag using pixel bt is flaky so avoid


test(" verify horizontal slider ",async({page})=>{
test.setTimeout(200000);
await page.goto('https://the-internet.herokuapp.com/horizontal_slider',{waitUntil:'domcontentloaded'});
const slider = page.locator("input[type='range']");
await slider.focus();
for(let i=0;i<4;i++){
await page.keyboard.press('ArrowRight');}

await page.pause();

})



test(" verify iframes",async({page})=>{
test.setTimeout(200000);
await page.goto('https://the-internet.herokuapp.com/iframe',{waitUntil:'domcontentloaded'});
const Iframelocator=page.frameLocator('#mce_0_ifr');
await page.locator('button.tox-notification__dismiss.tox-button.tox-button--naked.tox-button--icon').click();
await expect(Iframelocator.locator('p')).toHaveText('Your content goes here.');
await page.pause();

})
// //if id of frame is not given
// page.frame({att:''})
// page.frames()//for all frames
test("verify the Frames ",async({page})=>{
await page.goto('https://demoqa.com/frames',{waitUntil:'domcontentloaded'});
await page.pause();
const Pageframe= page.frameLocator("#frame1");//entring into frame //if not id given then use page.frame({class:''})
// await expect(Pageframe.loca)
const allframes=page.frames("div#framesWrapper");
for(const frame of allframes) {
    console.log(frame);
}
})

test("verify the nested iframe",async({page})=>{
await page.goto('https://the-internet.herokuapp.com/nested_frames',{waitUntil:'domcontentloaded'});
await page.pause();
const TopPageframe= page.frame({name:'frame-top'}); //entring into frame //if not id given then use page.frame({class:''})
// await expect(Pageframe.loca)
const nestframeleft=TopPageframe.frameLocator("//frame[@name='frame-left']");
await expect(nestframeleft.locator('body')).toHaveText("LEFT");

})
test("verifynested frames", async ({ page }) => {
  test.setTimeout(20000);

  await page.goto("https://the-internet.herokuapp.com/nested_frames", {
    waitUntil: "domcontentloaded",
  });

  await page.pause();

  // Get all frames
  const allFrames = page.frames();
  console.log("Total frames: " + allFrames.length);

  for (const frame of allFrames) {
    console.log(frame.url());
  }

  // Find frame by name
  const nameLeftFrame = allFrames.find(
    (frame) => frame.name() === "frame-left"
  );

  console.log("Name of left frame:", nameLeftFrame?.name());
  console.log("URL of left frame:", nameLeftFrame?.url());

  // Using frameLocator (best for nested frames)
  const leftFrame = page
    .frameLocator('frame[name="frame-top"]')
    .frameLocator('frame[name="frame-left"]');

  // Assertion (best practice)
  await expect(leftFrame.locator("body")).toHaveText("LEFT");

  await page.pause();
});

test("verify handling of new tab", async ({ page,context }) => {
  test.setTimeout(20000);

  await page.goto("https://the-internet.herokuapp.com/windows", {
    waitUntil: "domcontentloaded"})
  const [newPage]=await Promise.all([
    context.waitForEvent('page'),
    page.click('text=Click Here')

  ])
  await newPage.waitForLoadState();
  console.log('title of new tab'+ await newPage.title());
  });

  test("verify handling of newWindow", async ({ page,context }) => {
  test.setTimeout(20000);

  await page.goto("https://demoqa.com/browser-windows", {
    waitUntil: "domcontentloaded"})
  const [newWindow]=await Promise.all([
    context.waitForEvent('page'),
    page.click('text=New Window')

  ])
  await newWindow.waitForLoadState();
  console.log('title of new Window'+ await newWindow.title());
  });
