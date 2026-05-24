import {test,expect}  from "@playwright/test"

test("verify ", async({page})=>{//array se table structure 
    await page.goto('https://demoqa.com/webtables');
    const headers=page.locator("table thead th");
    for (let i=0;i<await headers.count();i++){
        const text= await headers.nth(i).textContent();//nth of a ek playw function h which we can directly apply
        console.log(text);

        //all rows
        const rows= await page.locator("table tbody tr");
        //rows.count
        for(let i=0;i<await rows.count();i++){
            // const column =rows.nth(i).locator('td');
              //let rowData=[];
            // for(let j=0;j<await column.count();j++){
            //     rowData.push(await column.nth(j).textContent());
            // }
            // console.log(rowData);
              const column =rows.nth(i).locator('td').nth(3).textContent();
              console.log(column);
         } }
        

        
});