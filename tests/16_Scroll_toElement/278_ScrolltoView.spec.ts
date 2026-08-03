import { test, expect } from '@playwright/test'

test.describe('Test to scroll into the page', () => {

    test.beforeEach('navigate to URL', async ({ page }) => {

        await page.goto("https://app.thetestingacademy.com/playwright/widgets/scroll");
    });

    test('Scroll into page', async ({ page }) => {
        await page.pause();

        // // 1) scrollIntoViewIfNeeded — Playwright does the scroll for you
        // await page.locator("#deep-anchor").scrollIntoViewIfNeeded();
        // await page.locator("#deep-anchor").click();

        // // // 2x scrollBy 1000 px
        // // //  page.evaluate - this can execute a JS code
        // await page.evaluate(() => window.scrollBy(0, 1000));

        // // 3) jump to bottom
        // await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        // await expect(page.getByTestId('cta-button')).toBeEnabled();

        // // 4) jump back to top

        // await page.evaluate(() => window.scrollTo(0, 0));


        // 5) lazy list grows past 10 once visible

        await page.getByTestId('section-lazy').scrollIntoViewIfNeeded();

        await page.getByTestId('lazy-list').scrollIntoViewIfNeeded();


        const list = page.getByTestId('lazy-list').locator('li');
        const initialCount = await list.count();

        // scroll the LAST existing item into view — item 11 does not exist yet,
        // so nth(10) would just wait until the test times out.
        await list.last().scrollIntoViewIfNeeded();
        // poll untill the new items appened.

        await expect.poll(async() => list.count(),{
            message : 'expected items > 10',
            timeout : 10_000
        }).toBeGreaterThan(initialCount);

        const finalCount = await list.count();
        console.log(finalCount);



        await page.pause();

    });



});