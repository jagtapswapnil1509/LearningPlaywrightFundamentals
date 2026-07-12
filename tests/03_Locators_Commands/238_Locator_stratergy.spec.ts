import {test ,expect} from '@playwright/test'

test('verify first TC',async ({page}) => {

    await page.goto("https://app.thetestingacademy.com/student/my-process");

});