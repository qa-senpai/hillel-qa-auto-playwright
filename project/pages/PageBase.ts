import { Page } from "@playwright/test";
import { CoreCalls } from "../../framework/coreCalls";

export class PageBase extends CoreCalls {
  page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }
}
