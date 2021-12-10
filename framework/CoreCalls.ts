import { Page } from "@playwright/test";

export class CoreCalls {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  protected async clickOnDropdownElementWithLocator(
    locator: string,
    element: string
  ) {
    let dropdownLocator = this.page.locator(locator);
    await dropdownLocator.click();
    await dropdownLocator?.selectOption([{ label: `${element}` }]);
  }

  protected async typeIntoInputFieldWithLocator(locator: string, text: string) {
    let inputFieldLocator = this.page.locator(locator);
    await inputFieldLocator.type(text);
  }

  protected async clickOnElement(locator: string) {
    let buttonLocator = this.page.locator(locator);
    await buttonLocator.click();
  }
}
