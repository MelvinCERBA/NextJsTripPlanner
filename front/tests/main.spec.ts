import { test, expect } from '@playwright/test';

function testRoute(route: string) {
  return "http://localhost:3000" + route
}

test.describe.skip('Main tests', () => {
  
  test.skip('Navigate beetwin pages via header', async ({ page, isMobile }) => {
    test.skip(true)
    await page.goto(testRoute('/'));
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("Home");
    
    // create a locator
    let getStarted = page.getByRole('link', { name: 'Crypto Stats' });
  
    // Expect an attribute "to be strictly equal" to the value.
    await expect(getStarted).toHaveAttribute('href', '/crypto-stats');
  
    // Click the get started link.
    await getStarted.click();
  
    // Expects the URL to contain intro.
    await expect(page).toHaveURL(testRoute("/crypto-stats"));
  
    // create a locator
    getStarted = page.getByRole('link', { name: 'Trading News' });
  
    // Expect an attribute "to be strictly equal" to the value.
    await expect(getStarted).toHaveAttribute('href', '/trading-news');
  
    // Click the get started link.
    await getStarted.click();
  
    // Expects the URL to contain intro.
    await expect(page).toHaveURL(testRoute("/trading-news"));
  
    // create a locator
    getStarted = page.getByRole('link', { name: 'Sign In' });
  
    // Expect an attribute "to be strictly equal" to the value.
    await expect(getStarted).toHaveAttribute('href', '/sign-in');
  
    // Click the get started link.
    await getStarted.click();
  
    // Expects the URL to contain intro.
    await expect(page).toHaveURL(testRoute("/sign-in"));
  
    // create a locator
    getStarted = page.getByRole('link', { name: 'Sign Up' });
  
    // Expect an attribute "to be strictly equal" to the value.
    await expect(getStarted).toHaveAttribute('href', '/sign-up');
  
    // Click the get started link.
    await getStarted.click();
  
    // Expects the URL to contain intro.
    await expect(page).toHaveURL(testRoute("/sign-up"));
  });
  
  test('Fill sign up form', async ({ page, isMobile }) => {
    test.skip(true)
    await page.goto(testRoute('/'));

    await page.locator('button:has-text("Join us")').click()
    
    await expect(page).toHaveURL(testRoute("/sign-up"));

    await expect(page.locator("text=Error: unknown")).not.toBeVisible()

    await page.locator("text=Username >> .. >> input").type("test123");
    await page.locator("text=Email >> .. >> input").type("test@example.com");
    await page.locator("text=Password >> .. >> input").type("1234567890");
    await page.locator("text=Confirmation >> .. >> input").type("1234567890");

    await page.locator('button:has-text("Let\'s start to earn more")').click();

    await expect(page.locator("text=Error: unknown")).toBeVisible()

  });
})

