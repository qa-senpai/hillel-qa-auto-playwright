import { Page } from "@playwright/test";
import { LoginModal } from "../modals/LoginModal";
import { PageBase } from "./PageBase";

export class HomePage extends PageBase {
  loginModal: LoginModal;

  constructor(page: Page) {
    super(page);
    this.loginModal = new LoginModal(page);
  }

  public async login() {
    await this.clickLogin();
    await this.loginModal.login();
  }

  public async navigateToHomePage() {
    await this.page.goto(`/`);
  }

  public async clickLogin() {
    await this.clickOnElement(`//button[text() = 'Sign In']`);
  }
}
