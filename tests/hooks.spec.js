import {test,expect} from "@playwright/test";

//this is grouping
test.describe('Group of annotation cases',()=>{
   
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

test('test 1',async()=>{
  console.log('this my test 1')
});

test('test skipped',async()=>{
    console.log('this my skipped test');
});

test('test 2',async()=>{
  console.log('this my test 2')
});



//after Each
test.afterEach(async()=>{

    console.log("After every test");
})

//after all

test.afterAll(async()=>{

    console.log("After All test");
});
});
