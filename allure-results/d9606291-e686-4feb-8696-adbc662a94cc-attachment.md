# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 20_Page_Object_Model\POM_Inventory.spec.ts >> Validating Inventory page >> Validate inventory
- Location: tests\20_Page_Object_Model\POM_Inventory.spec.ts:6:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByTestId('add-to-cart-test-allthethings-tshirt-red').or(getByRole('button', { name: 'Add to cart' })).or(getByText('Add to cart'))

```

# Test source

```ts
  1  | import {test , expect } from '@playwright/test'
  2  | import {InventoryPage} from './inventory';
  3  | 
  4  | test.describe('Validating Inventory page',()=>{
  5  | 
  6  |     test('Validate inventory',async({page})=>{
  7  | 
  8  |         const inventoryPage = new InventoryPage(page);
  9  |         await page.pause();
  10 |         await inventoryPage.goto();
> 11 |         await inventoryPage.addToCartTestAllthethings.click();
     |                                                       ^ Error: locator.click: Target page, context or browser has been closed
  12 |         await expect(page).toHaveTitle("TTACart");
  13 |         await page.pause();
  14 |     });
  15 | 
  16 | 
  17 | });
```