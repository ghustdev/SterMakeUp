import { test, expect } from './setup'

test('homepage loads correctly', async ({ page }) => {
  await page.goto('/')
  
  // Check if the main heading is visible
  await expect(page.getByRole('heading', { name: /beleza que inspira confiança/i })).toBeVisible()
  
  // Check if navigation is working
  await expect(page.getByRole('link', { name: /sobre/i })).toBeVisible()
  await expect(page.getByRole('link', { name: /serviços/i })).toBeVisible()
  await expect(page.getByRole('link', { name: /portfólio/i })).toBeVisible()
  await expect(page.getByRole('link', { name: /contato/i })).toBeVisible()
})

test('contact form works', async ({ page }) => {
  await page.goto('/#contact')
  
  // Fill out the contact form
  await page.fill('input[name="name"]', 'Test User')
  await page.fill('input[name="email"]', 'test@example.com')
  await page.fill('input[name="phone"]', '(11) 99999-9999')
  await page.selectOption('select[name="service"]', 'Maquiagem para Noivas')
  await page.fill('textarea[name="message"]', 'This is a test message')
  
  // Submit the form
  await page.click('button[type="submit"]')
  
  // Check if success message appears
  await expect(page.getByText(/mensagem enviada/i)).toBeVisible()
})

test('mobile navigation works', async ({ page }) => {
  // Set mobile viewport
  await page.setViewportSize({ width: 375, height: 667 })
  
  await page.goto('/')
  
  // Check if mobile menu button is visible
  await expect(page.getByRole('button', { name: /menu/i })).toBeVisible()
  
  // Click mobile menu button
  await page.click('button[aria-label="Menu"]')
  
  // Check if mobile menu items are visible
  await expect(page.getByRole('link', { name: /sobre/i })).toBeVisible()
  await expect(page.getByRole('link', { name: /serviços/i })).toBeVisible()
  await expect(page.getByRole('link', { name: /portfólio/i })).toBeVisible()
  await expect(page.getByRole('link', { name: /contato/i })).toBeVisible()
})


