import { expect, test } from '@playwright/test';

test.skip('about page has expected h1', async ({ page }) => {
	await page.goto('/about');
	await expect(page.getByRole('heading', { name: 'About this app' })).toBeVisible();
});
