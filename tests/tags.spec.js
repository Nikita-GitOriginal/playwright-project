import {test,expect} from "@playwright/test";

//this is grouping
test.describe('Group of similar test cases',()=>{
   
//to run serially
    test.describe.configure({mode:'serial'});

//before all
test.beforeAll(async()=>{
    console.log("Before All test");
});

//before Each 
test.beforeEach(async()=>{
   console.log("Before every test");
});

//after Each
test.afterEach(async()=>{

    console.log("After every test");
})

//after all

test.afterAll(async()=>{

    console.log("After All test");
});
//tags SMOKE
test("login tests @smoke",async({page})=>{
    console.log('LOGIN SMOKE TEST');
});
});
