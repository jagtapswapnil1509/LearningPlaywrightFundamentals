import {test ,expect} from '@playwright/test'

test('How to handle webtabel',async ({page}) => {
    
    // First of all, go to the link of the web table, 
    // find the correct Helen banquet, 
    // and then use a for loop to find the following simple 
    await page.goto("https://awesomeqa.com/webtable.html");
    //xpath = //table[@id='customers']/tbody/tr[5]/td[2]
    const firstpart = "//table[@id='customers']/tbody/tr[";
    const secondpart ="]/td[";
    const thirdpart = "]";
    const row = await page.locator("//table[@id='customers']/tbody/tr").count();
    const colm = await page.locator("//table[@id='customers']/tbody/tr[5]/td").count();
    console.log("Row = ",row);
    console.log("Column = ",colm);

    for (let i=2;i <= row; i++){
        for(let j=1;j<=colm;j++){
            const dynamicpath = `${firstpart}${i}${secondpart}${j}${thirdpart}`;
            console.log(dynamicpath);
            const data = await page.locator(dynamicpath).innerText();
            console.log(data);
            if(data.includes("Helen Bennett")){
                const countrypath = `${dynamicpath}/following-sibling::td`;
                const countrytext = await page.locator(countrypath).innerText();
                console.log(`Helen Bennett is in - ${countrytext}`);
                const companypath = `${dynamicpath}//preceding-sibling::td`;
                const companytext = await page.locator(companypath).innerText();
                console.log(`Helen Bennett is in company - ${companytext}`);
            }
            

        }
    }
    


});