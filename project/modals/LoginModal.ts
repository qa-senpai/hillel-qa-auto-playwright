import { ModalBase } from "./ModalBase";

export class LoginModal extends ModalBase {
  private async setEmail(email: string) {
    await this.typeIntoInputField("Email", email);
  }

  private async setPassword(password: string) {
    await this.typeIntoInputField("Password", password);
  }

  private async clickLogin() {
    await this.clickModalButton("Login");
  }

  public async login() {
    await this.setEmail(""); //Put here your email
    await this.setPassword(""); //Put here your email
    await this.clickLogin();
  }
}
