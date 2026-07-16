import { test, expect, type Page, type TestInfo } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";

async function captureEvidence(page: Page, testInfo: TestInfo, name: string): Promise<void> {
    const safeName = `${testInfo.title.replace(/[^a-z0-9]+/gi, "_").toLowerCase()}_${name}`;
    const screenshotPath = path.join("tta-report", "screenshots", `${safeName}.png`);
    fs.mkdirSync(path.dirname(screenshotPath), { recursive: true });

    await page.screenshot({ path: screenshotPath, fullPage: false });
    await testInfo.attach(name, { path: screenshotPath, contentType: "image/png" });
}

// Load saved session — already logged in
test.use({
    storageState: "./user-session.json"
});

test.describe("VWO dashboard access", () => {
    test("go directly to dashboard — no login", { tag: ["@smoke", "@P0"] }, async ({ page }, testInfo) => {
        await test.step("Open dashboard", async () => {
            await page.goto("https://app.wingify.com/#/dashboard/get-started?accountId=1227004", { waitUntil: "domcontentloaded" });
            await captureEvidence(page, testInfo, "dashboard_loaded");
        });

        await test.step("Verify dashboard URL", async () => {
            await expect(page).toHaveURL(/dashboard/);
        });

        console.log("Dashboard loaded — no login needed ✅");
        await page.waitForTimeout(3000);
    });

    test("go directly to settings — no login", { tag: ["@smoke", "@P1"] }, async ({ page }, testInfo) => {
        await test.step("Open settings page", async () => {
            await page.goto("https://app.wingify.com/#/settings/accounts/general?accountId=1227007", { waitUntil: "domcontentloaded" });
            await captureEvidence(page, testInfo, "settings_loaded");
        });

        await test.step("Verify settings URL", async () => {
            await expect(page).toHaveURL(/settings/);
        });

        console.log("Settings loaded — still logged in ✅");
        await page.waitForTimeout(3000);
    });
});