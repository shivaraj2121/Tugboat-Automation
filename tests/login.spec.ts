import { test, expect} from '@playwright/test';
test('login',async({page})=>{
await page.goto("https://tbqa.powerappsportals.com/");
await page.click("//*[@id='loginheader']")
await page.fill("//input[@id='Email']",'build2720@abc.com');
await page.fill('#PasswordValue','Shiva@2211');
await page.click("//button[@title='Login']");
await page.click("//a[@id='teammanagement']");
await page.click("//img[@id='addUser']");
await page.locator("//input[@id='firstname']").fill('shivaraj')
await page.locator("//input[@id='lastname']").fill('biradar')

// function generateRandomEmail(): string {
//     const chars: string = 'abcdefghijklmnopqrstuvwxyz1234567890';
//     let email: string = '';
//     for (let i = 0; i < 10; i++) {
//         email += chars[Math.floor(Math.random() * chars.length)];
//     }
//     email += '@abc.com';
//     return email;
// }
function generateRandomEmail2(): string {
    return [...Array(10)].map(() => 'abcdefghijklmnopqrstuvwxyz1234567890'[Math.floor(Math.random() * 36)]).join('') + '@example.com';
}

console.log(generateRandomEmail2());
await page.locator("//input[@id='emailaddress1']").type(generateRandomEmail2())
await page.locator("//select[@id='tbdm_accesslevel']").selectOption('Collaborator');
await page.click("//input[@id='InsertButton']")
await page.waitForTimeout(5000);

})

