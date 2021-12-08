import { Locator, Page } from "playwright-core";

export class ModalBase{
page: Page
textInput: Locator

constructor(page: Page){
    this.page = page;
}

protected async typeIntoTextField(field: string, text: string){
    await this.page.locator(`//form//label[text() = '${field}']/parent::div//input`).type(text);
}
protected async clickModalButton(button: string){
    await this.page.locator(`//div[@class = 'modal-content']//button[text() = '${button}']`).click()
}

protected async clickOnDropdownElement(field: string, element: string){
    const dropdown = await this.page.$(`//form//label[text() = '${field}']/parent::div/select`);
    await dropdown.click();
    dropdown?.selectOption([{ label: `${element}`}]);
}
}