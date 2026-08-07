import {test , expect } from '@playwright/test'
import {InventoryPage} from './inventory';
import {LoginPage} from './LoginPage';

test.describe('Validating Inventory page',()=>{

    test('Validate inventory',async({page})=>{

        
        const loginPage = new LoginPage(page);
        
        await loginPage.goto();
        await loginPage.login('standard_user','tta_secret');
        //await expect(page).toHaveTitle("TTACart - Login");      
        const inventoryPage = new InventoryPage(page);  
        //await inventoryPage.goto();
        //await inventoryPage.addToCartTestAllthethings.click();
        //await expect(page).toHaveTitle("TTACart");
        
    });


});