import { Page } from "@playwright/test";

export class PageBase {
    page: Page;

    constructor(page: Page){
        this.page = page;
    }
}