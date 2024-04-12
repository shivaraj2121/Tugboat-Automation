import{test,expect, chromium} from '@playwright/test'
import HansenLogin from '../Pages/HansenLogin'
import ActionHelper from '../utilities/ActionHelper'
import ProjectMahagment from '../Pages/ProjectMahagment'
const userName='sachin.shapur@rutgerlutherintimetec.onmicrosoft.com'
const password='Hre-Test-Password'

test('Login Into Application',async ({})=>{
   
const browser=await chromium.launch()
const context = await browser.newContext() 
const page=await context.newPage()
await HansenLogin.goToHansenWebsite(page)
const pagePromise = context.waitForEvent('page')
await HansenLogin.clickonMicrosofttLoginbutton(page)
const newpage = await pagePromise;
await ActionHelper.switchToTab(page,2)
await HansenLogin.loginIntoApplication(newpage,userName,password)
await newpage.close()
await ProjectMahagment.clickOnProjectManagment(page)
await ProjectMahagment.clickOnAddProject(page)
await ProjectMahagment.addProjectDetails(page,22,'shiva')
    



})