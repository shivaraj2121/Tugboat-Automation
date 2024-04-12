import{Page} from '@playwright/test'
import ActionHelper from '../utilities/ActionHelper'

const question = "//table[@id='tblData']//tr[1]//select";
const employeeSurvey = "//button[@id='employeesurvey']"
const employeeSurveyLink = "//a[@id='englishLink']"
const emplyeeSurveyStart ="//button[text()='Start']"

export default class employeesurvey extends ActionHelper
{
    
    static async fillEmployee(page,text) {
        
        await ActionHelper.selectByText(page,question,text)
    
    }

   
}

