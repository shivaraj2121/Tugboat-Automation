import{test,expect} from '@playwright/test'
test('update details', async ({page})=>{

    await page.goto("https://tbqa.powerappsportals.com/");
    await page.click("//*[@id='loginheader']")
    await page.fill("//input[@id='Email']",'build2720@abc.com');
    await page.fill('#PasswordValue','Shiva@2211');
    await page.click("//button[@title='Login']");
    await page.click("//span[@class='username']");
    await page.click("//a[@title='Profile']")
    await page.locator("//input[@id='firstname']").clear
    await page.locator("//input[@id='firstname']").fill('deepali')
    await page.locator("//input[@id='lastname']").clear
    await page.locator("//input[@id='lastname']").fill('sindagi')
    await page.waitForTimeout(5000);
    await page.click("//input[@value='Update']");


})
