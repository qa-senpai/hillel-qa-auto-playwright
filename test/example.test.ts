import { APIRequestContext, expect, test } from "@playwright/test";
import { GaragePage } from "../project/pages/GaragePage";
import { HomePage } from "../project/pages/HomePage";

let apiContext: APIRequestContext;
let garagePage: GaragePage;
let homePage: HomePage;

test.describe("feature for create car", () => {
  test.beforeEach(async ({ playwright, page }) => {
    apiContext = await playwright.request.newContext();
    await apiContext.post(`https://qauto.forstudy.space/api/auth/signin`, {
      data: {
        email: "", //put your email here
        password: "", //put your password here
        remember: false,
      },
    });
    garagePage = new GaragePage(page);
    homePage = new HomePage(page);
  });

  test("Add car to garage", async () => {
    await homePage.navigateToHomePage();
    await homePage.login();
    await garagePage.clickAddCar();
    const carId = await garagePage.addCarModal.createCar("BMW", "X5", "100");
    expect(carId).not.toBe(undefined);
    const response = await apiContext.delete(
      `https://qauto.forstudy.space/api/cars/${carId}`
    );
    expect(response.ok()).toBeTruthy();
  });

  test.afterEach(async ({}) => {
    await apiContext.dispose();
  });
});
