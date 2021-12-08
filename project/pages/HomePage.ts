import { Page } from "playwright-core";
import { PageBase } from "./PageBase";

export class HomePage extends PageBase{
page: Page;

    constructor(page: Page){
        super(page);
        this.page = page;
    }

    public async navigateToHomePage   (){
        await this.page.goto(`https://qauto.forstudy.space/`);
    }

    public async clickLogin()
    {
        await this.page.locator(`//button[text() = 'Sign In']`).click();
    }
}