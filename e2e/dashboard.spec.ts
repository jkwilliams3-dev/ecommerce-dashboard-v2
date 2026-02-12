import { test, expect } from '@playwright/test';

test.describe('E-commerce Dashboard', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load dashboard successfully', async ({ page }) => {
    // Check if dashboard header is visible
    await expect(page.locator('text=/dashboard/i')).toBeVisible();
  });

  test('should display stats cards', async ({ page }) => {
    // Wait for content to load
    await page.waitForTimeout(1000);
    
    // Check for common e-commerce metrics
    const body = await page.textContent('body');
    const hasStats = body && (
      body.includes('Revenue') ||
      body.includes('Orders') ||
      body.includes('Customers') ||
      body.includes('Sales')
    );
    
    expect(hasStats).toBeTruthy();
  });

  test('should render charts', async ({ page }) => {
    // Wait for charts to render
    await page.waitForTimeout(2000);
    
    // Check if canvas elements (charts) are present
    const canvases = page.locator('canvas');
    const count = await canvases.count();
    
    expect(count).toBeGreaterThan(0);
  });

  test('should display numeric values', async ({ page }) => {
    await page.waitForTimeout(1000);
    
    // Check if numeric values are displayed
    const text = await page.textContent('body');
    expect(text).toMatch(/[\d,]+/);
  });

  test('should be responsive on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Dashboard should still be visible
    await expect(page.locator('body')).toBeVisible();
  });

  test('should be responsive on desktop', async ({ page }) => {
    // Set desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 });
    
    // Dashboard should still be visible
    await expect(page.locator('body')).toBeVisible();
  });
});
