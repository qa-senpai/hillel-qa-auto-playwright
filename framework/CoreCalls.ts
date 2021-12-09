import { Locator, Page } from "@playwright/test";


export class CoreCalls {
    page: any;

    constructor(page: Page){
        this.page = page;
    }

    protected async clickOnDropdownElementWithLocator(dropdown: Locator, element: string){
        await dropdown.click();
        await dropdown?.selectOption([{ label: `${element}`}]);
    }

    protected async typeIntoInputFieldWithLocator(locator: Locator, text: string){
       await locator.type(text);
    }

    protected async clickButton(locator: Locator){
        await locator.click()
     }

}