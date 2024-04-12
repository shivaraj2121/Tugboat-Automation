import {test,Page} from '@playwright/test'
import employeesurvey from "../Pages/Employeesurvey";
import LoginPage from './LoginPage';
import ActionHelper from '../utilities/ActionHelper';

test('empoyeesurvey',async({page})=>{
    LoginPage.openURL(page,'https://tbqa.powerappsportals.com/')
    LoginPage.login(page,'shivarajb525@gmail.com','Shiva@2121')




})
