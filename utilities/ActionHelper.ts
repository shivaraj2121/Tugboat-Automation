import {BrowserContext, ElementHandle, Page, chromium} from '@playwright/test'


export default class ActionHelper{
    
    static async openApplication(page,url)
    {

        await page.goto(url)
    }

    static async selectByText(page, selector, text) {
        await page.locator(selector).selectOption(text)
       
    }
    static async click(page, selector) {
     await page.click(selector);
   
    }

    static async type(page: Page, selector: string, text) {
        await page.fill(selector,text);
        
    }

    static async waitForNavigation(page: Page) {
        await page.waitForNavigation();
    }

    static async hover(page: Page, selector) {
        const element = page.locator(selector);
        await element.hover();
    }

    static async getElements(page: Page, selector): Promise<ElementHandle[]> {
        return page.$$(selector);
    }
    static async newPage()
    {

       const browser=await chromium.launch()
       const context = await browser.newContext() 
       const page=await context.newPage()
       const pagePromise = context.waitForEvent('page')
       const newpage = await pagePromise;
    
       
    }

    static async openNewTab(): Promise<Page> {
        const browser=await chromium.launch()
        const context: BrowserContext = await browser.newContext();
        const pagePromise = context.waitForEvent('page')
        const newpage = await pagePromise;
         return await newpage;
       
    }
    static async switchToTab(page: Page, tabIndex: number): Promise<void> {
        const pages = page.context().pages();
        
        if (tabIndex < pages.length) {
            await pages[tabIndex].bringToFront();
            

        } 
    
    }
        
      
    }