class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.checkoutBtn = page.locator('#checkout');
    this.firstNameInput = page.locator('#first-name');
    this.lastNameInput = page.locator('#last-name');
    this.postalCodeInput = page.locator('#postal-code');
    this.continueBtn = page.locator('#continue');
    this.finishBtn = page.locator('#finish');
    this.confirmationHeader = page.locator('.complete-header');
  }

  async completeCheckout(firstName, lastName, zipCode) {
    await this.checkoutBtn.click();
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(zipCode);
    await this.continueBtn.click();
    await this.finishBtn.click();
  }
}

module.exports = { CheckoutPage };
