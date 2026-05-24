import {test,expect} from '@playwright/test'

test.only('test only ',async({page,expect})=>{
    await page.goto("https://the-internet.herokuapp.com/login");
});
test.skip('test skip only ',async({page,expect})=>{
    await page.goto("https://the-internet.herokuapp.com/login");
});
test.fail('test fails intentionally ',async({page,expect})=>{
    await page.goto("https://the-internet.herokuapp.com/login");
    expect(1).toBe(2);
});
test.slow('test runs slow only ',async({page,expect})=>{
    await page.goto("https://the-internet.herokuapp.com/login");
    await page.waitForTimeout(1000);
    console.log("my change");
});
test.fixme('test not ready ',async({page,expect})=>{
  //no ready yet 
});