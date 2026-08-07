import {  Locator,  Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly ttacart: Locator;
  readonly addToCartTestAllthethings: Locator;
  readonly linkTestAllthethingsTShirt: Locator;
  readonly title: Locator;

  constructor(page: Page) {
    this.page = page;
    this.ttacart = page.getByText("TTACart");
    this.addToCartTestAllthethings = page.getByTestId("add-to-cart-test-allthethings-tshirt-red").or(page.getByRole("button", { name: "Add to cart" })).or(page.getByText("Add to cart"));
    this.linkTestAllthethingsTShirt = page.getByRole("link", { name: "Test.allTheThings() T-Shirt (Red)" }).or(page.getByTestId("item-test-allthethings-tshirt-red-title-link")).or(page.getByText("Test.allTheThings() T-Shirt (Red)"));
    this.title = page.getByTestId("title").or(page.getByText("Products"));
  }

  async goto() {
    await this.page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
  }
  
}
