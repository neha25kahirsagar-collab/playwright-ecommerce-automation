class ProductsPage {
  constructor(page) {
    this.page = page;
    this.pageTitle = page.locator('.title');
    this.addBackpackBtn = page.locator('#add-to-cart-sauce-labs-backpack');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async addBackpackToCart() {
    await this.addBackpackBtn.click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }
}

module.exports = { ProductsPage };
