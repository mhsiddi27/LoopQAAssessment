const { test, expect } = require('@playwright/test');

// Before hook to handle shared setup logic

test.describe('Login Test for Demo App', () => {
  
  test.beforeEach(async ({ page }) => {
    // Common login and navigation steps for all tests
    await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
    await page.fill('#username', 'admin');
    await page.fill('#password', 'password123');
    await page.click('button:text("Sign in")');
  });

  test('Test Case 1/2: should successfully log in and verify To Do task and tags', async ({ page }) => {
    const todoDiv = page.locator('div.flex.flex-col.w-80.bg-gray-50.rounded-lg.p-4').first();
    const implementUserAuth = todoDiv.locator('h3:has-text("Implement user authentication")');
    await expect(implementUserAuth).toBeVisible();

    const featureTag = todoDiv.locator('span:has-text("Feature")');
    await expect(featureTag).toBeVisible();

    const highPriorityTag = todoDiv.locator('span:has-text("High Priority")');
    await expect(highPriorityTag).toBeVisible();

    const bugH3 = todoDiv.locator('h3:has-text("Fix navigation bug")');
    await expect(bugH3).toBeVisible();

    const bugTag = todoDiv.locator('span:has-text("Bug")');
    await expect(bugTag).toBeVisible();
  });

  test('Test Case 3: should successfully log in and verify In Progress task and tags', async ({ page }) => {
    const inProgress = page.locator('div.flex.flex-col.w-80.bg-gray-50.rounded-lg.p-4').nth(1);
    await expect(inProgress).toBeVisible();

    const designH3 = inProgress.locator('h3:has-text("Design system updates")');
    await expect(designH3).toBeVisible();

    const designTag = inProgress.locator('span:has-text("Design")');
    await expect(designTag).toBeVisible();
  });

  test('Test Case 4/5: should successfully log in and verify To Do tasks for Mobile Application', async ({ page }) => {
    await page.click('h2:has-text("Mobile Application")');
    const todoDiv = page.locator('div.flex.flex-col.w-80.bg-gray-50.rounded-lg.p-4').first();
    const implementUserAuth = todoDiv.locator('h3:has-text("Push notification system")');
    await expect(implementUserAuth).toBeVisible();

    const featureTag = todoDiv.locator('span:has-text("Feature")');
    await expect(featureTag).toBeVisible();
  });

  test('Test Case 5: should successfully log in and verify In Progress tasks for Mobile Application', async ({ page }) => {
    await page.click('h2:has-text("Mobile Application")');
    const inProgress = page.locator('div.flex.flex-col.w-80.bg-gray-50.rounded-lg.p-4').nth(1);
    const offlineModeHeader = inProgress.locator('h3:has-text("Offline mode")');
    await expect(offlineModeHeader).toBeVisible();

    const offlineModeFeature = inProgress.locator('span:has-text("Feature")');
    await expect(offlineModeFeature).toBeVisible();

    const highPriority = inProgress.locator('span:has-text("High Priority")');
    await expect(highPriority).toBeVisible();
  });

  test('Test Case 6: should successfully log in and verify Done tasks for Mobile Application', async ({ page }) => {
    await page.click('h2:has-text("Mobile Application")');
    const inProgress = page.locator('div.flex.flex-col.w-80.bg-gray-50.rounded-lg.p-4').nth(3);
    const appIconDesign = inProgress.locator('h3:has-text("App icon design")');
    await expect(appIconDesign).toBeVisible();

    const designTag = inProgress.locator('span:has-text("Design")');
    await expect(designTag).toBeVisible();
  });
  
});

