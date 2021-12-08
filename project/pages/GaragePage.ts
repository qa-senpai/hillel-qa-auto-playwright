import { Locator, Page } from "playwright-core";
import { AddCarModal } from "../modals/AddCarModal";
import { PageBase } from "./PageBase";

export class GaragePage extends PageBase{
page: Page;
private addCarButton: Locator;
public  addCarModal: AddCarModal;

constructor(page: Page){
    super(page);
    this.page = page;
    this.addCarButton = this.page.locator(`//button[text() = 'Add car']`)
    this.addCarModal = new AddCarModal(page)
    //#endregion
}

async navigateToGaragePage(){
    await this.page.goto('https://qauto.forstudy.space/panel/garage')
}

async clickAddCar(){
    await this.addCarButton.click()
}
 
}