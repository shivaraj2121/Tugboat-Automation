
import ActionHelper from "../utilities/ActionHelper";
const loginLink = "//a[@id='loginheader']";
const UserName = "//input[@id='Email']";
const passwordField='#PasswordValue';
const loginButton="//button[@title='Login']"

export default  class LoginPage extends ActionHelper
{
    static async openURL(page,url)
    {
        await ActionHelper.openApplication(page,url)
    }
   
 static async login(page,username,password)
{
 await ActionHelper.click(page,loginLink);
 await  ActionHelper.type(page,UserName,username);
 await ActionHelper.type(page,passwordField,password);
 await ActionHelper.click(page,loginButton);

}
}
