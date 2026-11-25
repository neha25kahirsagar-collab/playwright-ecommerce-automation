const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test.describe('E-Commerce UI Automation Suite', () => {
  
  test('Verify end-to-end product purchase flow', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(productsPage.pageTitle).toHaveText('Products');

    await productsPage.addBackpackToCart();
    await expect(productsPage.cartBadge).toHaveText('1');
    await productsPage.goToCart();

    await checkoutPage.completeCheckout('Neharika', 'Kshirsagar', '560001');
    await expect(checkoutPage.confirmationHeader).toHaveText('Thank you for your order!');
  });

  test('Verify error message for locked out user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');

    await expect(loginPage.errorMessage).toContainText('Sorry, this user has been locked out');
  });

});
