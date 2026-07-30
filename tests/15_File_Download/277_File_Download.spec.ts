import { test , expect} from '@playwright/test';
import path from 'path';

test.describe('download file tests',()=>{

    test.beforeEach('go to URL',async ({page})=>{

        await page.goto("https://app.thetestingacademy.com/playwright/widgets/upload-download");

    });

    test('download static file',async ({page})=>{

        await page.pause();
        //if event happen we need to capture , similar to JS alert

        const [staticdownload] = await Promise.all([

            page.waitForEvent('download'),
            page.locator("#dl-static").click()
        ]);

        const filepath = path.join('output',staticdownload.suggestedFilename());
        await staticdownload.saveAs(filepath);
        await page.pause();

    });

      test('download text file',async ({page})=>{

        await page.pause();
        //if event happen we need to capture , similar to JS alert

        const [textdownload] = await Promise.all([

            page.waitForEvent('download'),
            page.getByTestId("download-text").click()
        ]);

        const filepath = path.join('output',textdownload.suggestedFilename());
        await textdownload.saveAs(filepath);
        await page.pause();

    });

});


