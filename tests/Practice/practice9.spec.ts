import {test , expect} from '@playwright/test'
import path from 'path';

test.describe('donwload file practice',()=>{

    test.beforeEach(async({page})=>{
        page.goto("https://qajobfit.com/dashboard?tab=builder");
    })
    test('donwload file practice',async ({page})=>{
        await page.pause();

        await page.getByRole('button',{name:"Continue with Google"}).click();

        await page.pause();

    });


});