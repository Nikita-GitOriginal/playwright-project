import { test, expect } from '@playwright/test'
test('has title', async ({ page }) => {
 await page.goto("https://the-internet.herokuapp.com/horizontal_slider");
 const slider = page.locator('input[type="range"]');
 await slider.focus();
 for(let i=0;i<=5;i++){
    await page.keyboard.press("ArrowRight");
 }

})


//frames ya frame  