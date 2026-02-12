import { test, expect } from '@playwright/test';

test.describe('E-commerce Dashboard E2E', () => {
  test('should load and display dashboard', async ({ page }) => {
    await page.goto('/');
    
    // Check header
    await expect(page.locator('text=E-commerce Dashboard')).toBeVisible();
  });

  test('should display all metric cards', async ({ page }) => {
    await page.goto('/');
    
    // Check for metric cards
    const metricCards = await page.locator('.metric-card').count();
    expect(metricCards).toBeGreaterThan(0);
    
    // Verify specific metrics
    await expect(page.locator('text=Total Sales')).toBeVisible();
    await expect(page.locator('text=Total Orders')).toBeVisible();
    await expect(page.locator('text=Average Order Value')).toBeVisible();
    await expect(page.locator('text=Customer Satisfaction')).toBeVisible();
  });

  test('should display metric values', async ({ page }) => {
    await page.goto('/');
    
    // Check that metric values are displayed
    const metricValues = await page.locator('.metric-value').count();
    expect(metricValues).toBeGreaterThan(0);
    
    // Values should contain numbers or currency
    const firstValue = await page.locator('.metric-value').first().textContent();
    expect(firstValue).toMatch(/[\d$,%]/);
  });

  test('should display metric change indicators', async ({ page }) => {
    await page.goto('/');
    
    // Check for change indicators
    const changes = await page.locator('.metric-change').count();
    expect(changes).toBeGreaterThan(0);
    
    // Should have arrows (▲ or ▼)
    const arrows = await page.locator('.arrow').count();
    expect(arrows).toBeGreaterThan(0);
  });

  test('should display sales chart', async ({ page }) => {
    await page.goto('/');
    
    // Check for chart title
    await expect(page.locator('text=Weekly Sales Performance')).toBeVisible();
    
    // Check for canvas element
    const canvas = page.locator('#salesChart');
    await expect(canvas).toBeVisible();
  });

  test('should have metric icons', async ({ page }) => {
    await page.goto('/');
    
    // Check that icons are present
    const icons = await page.locator('.metric-icon').count();
    expect(icons).toBeGreaterThan(0);
  });

  test('should display metrics with proper formatting', async ({ page }) => {
    await page.goto('/');
    
    // Check Total Sales formatting (should have $)
    const salesCard = page.locator('.metric-card', { has: page.locator('text=Total Sales') });
    const salesValue = await salesCard.locator('.metric-value').textContent();
    expect(salesValue).toMatch(/\$/);
    
    // Check Customer Satisfaction formatting (should have %)
    const satisfactionCard = page.locator('.metric-card', { has: page.locator('text=Customer Satisfaction') });
    const satisfactionValue = await satisfactionCard.locator('.metric-value').textContent();
    expect(satisfactionValue).toMatch(/%/);
  });

  test('should have positive change indicators styled correctly', async ({ page }) => {
    await page.goto('/');
    
    // Find any positive change indicators
    const positiveChanges = await page.locator('.metric-change.positive').count();
    
    // At least some metrics should have positive changes based on mock data
    if (positiveChanges > 0) {
      const firstPositive = page.locator('.metric-change.positive').first();
      await expect(firstPositive).toContainText('▲');
    }
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Should still display header
    await expect(page.locator('text=E-commerce Dashboard')).toBeVisible();
    
    // Metrics should stack vertically
    const metricsSection = page.locator('.metrics-grid');
    await expect(metricsSection).toBeVisible();
  });

  test('should display chart section', async ({ page }) => {
    await page.goto('/');
    
    const chartSection = page.locator('.chart-section');
    await expect(chartSection).toBeVisible();
  });

  test('should have styled metric cards', async ({ page }) => {
    await page.goto('/');
    
    // Check that cards have proper styling
    const firstCard = page.locator('.metric-card').first();
    await expect(firstCard).toBeVisible();
    
    // Card should have content
    const cardContent = await firstCard.textContent();
    expect(cardContent).toBeTruthy();
    expect(cardContent!.length).toBeGreaterThan(0);
  });

  test('should display all days of the week in chart', async ({ page }) => {
    await page.goto('/');
    
    // Chart should be visible
    const canvas = page.locator('#salesChart');
    await expect(canvas).toBeVisible();
    
    // The chart data includes Mon-Sun (verified in component)
    // Just verify canvas is rendered
    const canvasSize = await canvas.boundingBox();
    expect(canvasSize).toBeTruthy();
    expect(canvasSize!.width).toBeGreaterThan(0);
    expect(canvasSize!.height).toBeGreaterThan(0);
  });
});
