import { Page } from "@playwright/test";
import { CoreCalls } from "../../framework/coreCalls";

export class ModalBase extends CoreCalls {
  page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  private dropdownLocator = (field: string) =>
    `//form//label[text() = '${field}']/parent::div/select`;
  private textFieldLocator = (field: string) =>
    `//form//label[text() = '${field}']/parent::div//input`;
  private modalButtonLocator = (button: string) =>
    `//div[@class = 'modal-content']//button[text() = '${button}']`;

  protected async clickDropdownElement(field: string, element: string) {
    await this.clickOnDropdownElementWithLocator(
      this.dropdownLocator(field),
      element
    );
  }

  protected async typeIntoInputField(field: string, text: string) {
    await this.typeIntoInputFieldWithLocator(
      this.textFieldLocator(field),
      text
    );
  }

  protected async clickModalButton(button: string) {
    await this.clickOnElement(this.modalButtonLocator(button));
  }
}
