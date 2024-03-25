import { Browser, Page, chromium } from "@playwright/test";
import ActionHelper from "../utilities/ActionHelper";


const loginWithMicrosoft = "//button[text()='Sign In With Microsoft']"
const loginaAccount ="//div[text()='Sachin Shapur']"
const URl = 'https://blue-river-06b921b1e.3.azurestaticapps.net/project/268/costing/643/costingdetails/general'
const email = "//input[@type='email']"
const nextButton ="//input[@type='submit']"
const password = "//input[@type='password']"
const signinButton="//input[@type='submit']"
const okbutton ="//input[@type='submit']"
export default new class LoginPage{
page:Page

public async goToHansenWebsite(page)
{
    await page.goto(URl)
}
async clickonMicrosofttLoginbutton(page)
{

await page.click(loginWithMicrosoft);
}
async loginIntoApplication(page,username,pasword)
{
    
await page.fill(email,username)
await page.click(nextButton)
await page.fill(password,pasword)
await page.click(signinButton)
await page.click(okbutton)

}

}