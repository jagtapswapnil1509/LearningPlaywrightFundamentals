import { test, expect, Locator } from '@playwright/test'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const Simplemap = "https://the-internet.herokuapp.com/upload";

test.describe('File upload', () => {

    test.beforeEach(' File upload URL', async ({ page }) => {
        await page.goto(Simplemap);
    });

    test('Shadow dom', async ({ page }) => {
        await page.pause();

        const filepath = path.join(__dirname,'testdata.txt');
        console.log("filepath:",filepath);

        await page.setInputFiles("#file-upload",filepath);
        await page.click('#file-submit');

        await expect(page.locator('h3')).toHaveText('File Uploaded!');
        await expect(page.locator('#uploaded-files')).toHaveText('testdata.txt');

        await page.pause();
    })

})