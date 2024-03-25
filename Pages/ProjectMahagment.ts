import { Page } from "@playwright/test";
import ActionHelper from "../utilities/ActionHelper";

const projrctManagmentButton ="//button[text()='Project Management']"
const AddNewProject ="//button[text()='Add New Project']"
const projectID ="//input[@name='values.projectId']"
const projectName ="//input[@name='values.name']"

export default class AddProject{

static async clickOnProjectManagment(page)
{

    await ActionHelper.click(page,projrctManagmentButton)
}
static async clickOnAddProject(page)
{

    await ActionHelper.click(page,AddNewProject)
}
static async addProjectDetails(page: Page,projectid,projectname)
{
await page.waitForTimeout(5000)

   await page.locator(projectID)
   await page.fill(projectID,projectid)
    await page.fill(projectName,projectname)
    
}

}
