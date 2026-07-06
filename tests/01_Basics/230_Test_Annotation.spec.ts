import {test , expect} from '@playwright/test'

test('verify the title',async ({ page })=>{  // page is called and fixture , 
// fixture mean by injected by playwright

    await page.goto("https://app.vwo.com");
    await expect(page).toHaveTitle("Login - Wingify");

})

// skip test
test.skip('Skipped test',async({page}) => {
    // this test is skipped
});

// only run this test
test.only('focused test',async({page})=>{
    //only this test will run
})

//mark as failing
test.fail('expectd to fail',async ({page})=>{
    //test is expected to fail
})

//slow test case(3x timeout)
test('slow test',async ({page}) => {
    test.slow; //  triples the timeout
    //has extended timeout
});

// conditional skip
test('conditional',async ({page , browserName})=>{
    test.skip(browserName === 'firefox','Not supported in firefox');

})