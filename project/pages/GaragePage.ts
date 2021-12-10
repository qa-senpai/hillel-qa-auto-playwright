import { Page } from "@playwright/test";
import { AddCarModal } from "../modals/AddCarModal";
import { PageBase } from "./PageBase";

export class GaragePage extends PageBase {
  page: Page;
  public addCarModal: AddCarModal;

  constructor(page: Page) {
    super(page);
    this.addCarModal = new AddCarModal(this.page);
  }

  async navigateToGaragePage() {
    await this.page.goto("https://qauto.forstudy.space/panel/garage");
  }

  async clickAddCar() {
    await this.clickOnElement(`//button[text() = 'Add car']`);
  }
}
