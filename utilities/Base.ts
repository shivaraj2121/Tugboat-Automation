import { Browser, chromium } from "@playwright/test";
export default new class Base{

async Launch() {
    // Launch the browser'
    const browser: Browser = await chromium.launch();
    
  
        // Create a new browser context
        const context = await browser.newContext();

        // Open a new page (representing the first tab)
        const page = await context.newPage();
        return page;
        
        
}

}