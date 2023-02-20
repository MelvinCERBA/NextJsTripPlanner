import { Page, expect } from '@playwright/test';

export async function scrollThroughWholePage(page: Page): Promise<void> {
  await page.evaluate(async () => {
    const height = document.body.scrollHeight;

    for (let i = 0; i <= height; i += 100) {
      document.documentElement.scrollTo(0, i);

      await new Promise((resolve) => {
        setTimeout(resolve, 10);
      });
    }

    document.documentElement.scrollTo(0, 0);

    await new Promise((resolve) => {
      setTimeout(resolve, 10);
    });
  });
}

export async function expectPageToHaveSreenshot(
  page: Page,
  expectUrl: string
): Promise<void> {
  await page.goto(expectUrl);

  await scrollThroughWholePage(page);

  await page.waitForLoadState('networkidle');

  await expect(page).toHaveScreenshot({
    fullPage: true,
    mask: [page.locator('video')],
  });
}