//fixture creation
import {test as base } from '@playwright/test';

export const test=base.extend({
    myFixture:
    async ({},use)=>{
        const setvalue ="hello This is my custom fixture";
        await use(setvalue);
     }
});

//use it in test real one
test("using custom fixture",async({myFixture})=>{

    console.log(myFixture);
})