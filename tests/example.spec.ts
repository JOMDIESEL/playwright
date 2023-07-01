import { test, expect ,chromium} from '@playwright/test';

test('has title', async ({ page }) => {
  await chromium.launch({ headless: false, slowMo: 100 });
  await page.goto('https://playwright.dev/',{timeout: 10000});

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/',{timeout: 10000});

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
