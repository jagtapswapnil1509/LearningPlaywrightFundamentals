import {test ,expect} from '@playwright/test'

test('Hover',async ({page}) => {

    await page.goto("https://the-internet.herokuapp.com/drag_and_drop");
    await page.pause();
    const cola = await page.locator("#column-a");
    const colb = await page.locator("#column-b");
    await cola.dragTo(colb);
    await page.pause();

});