import { test, chromium,} from '@playwright/test';
import ActionHelper from '../utilities/ActionHelper';
import LoginPage from './LoginPage';
import employeesurvey from '../Pages/Employeesurvey';

test('login',async({})=>{
  
 
const browser=await chromium.launch()
const context = await browser.newContext() 
const page=await context.newPage()
let user = "shivarajb525@gm.com"
let pass = 'Shiva@2121'
await page.goto("https://tbqa.powerappsportals.com/")
await LoginPage.login(page,user,pass)
await page.click("//button[@id='employeesurvey']")
const pagePromise = context.waitForEvent('page')
await page.click("//a[@id='englishLink']")
const newpage = await pagePromise;
await ActionHelper.switchToTab(page,2)
await newpage.click("//button[text()='Start']")
await newpage.waitForTimeout(5000)
await employeesurvey.fillEmployee(newpage,'Male')
await page.waitForTimeout(5000)
})






