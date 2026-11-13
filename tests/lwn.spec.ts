import { test, expect } from '@playwright/test';

test('LWN.net homepage loads', async ({ page }) => {
  const response = await page.goto('https://lwn.net/');

  expect(response).not.toBeNull();
  expect(response!.status()).toBe(200);
  await expect(page).toHaveTitle(/LWN\.net|Linux Weekly News/i);
  await expect(page.locator('body')).toContainText(/LWN\.net/i);
});

test('lwn search link', async ({ page }) => {
  await page.goto('https://lwn.net/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Search' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Search the LWN content archive' })).toBeVisible();
});