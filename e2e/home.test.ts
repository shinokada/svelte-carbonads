import { expect, test } from '@playwright/test';

test('index page has expected h1, meta title', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Svelte Carbonads' })).toBeVisible();
  await expect(page).toHaveTitle('Svelte Carbonads');
});
