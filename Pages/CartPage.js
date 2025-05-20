class CartPage {

    constructor(page) {
      this.page = page;

      this.whatsNew = page.getByRole('menuitem', { name: "What's New" });
      this.pantsCategory = page.getByRole('link', { name: 'Pants' }).first();
      this.productLink = page.getByRole('link', { name: 'Portia Capri' }).first();
      this.sizeOption = page.getByRole('option', { name: '28' });
      this.altSizeOption = page.getByRole('option', { name: '29' });
      this.colorOption = page.getByRole('option', { name: 'Green' });
      this.altColorOption = page.getByRole('option', { name: 'Orange' });
      this.qtyInput = page.getByRole('spinbutton', { name: 'Qty' });
      this.addToCartButton = page.getByRole('button', { name: 'Add to Cart' });
      this.myCart = page.getByRole('link', { name: /My Cart/i });
      this.viewAndEditCart = page.getByRole('link', { name: 'View and Edit Cart' });
      this.updateCartButton = page.getByRole('button', { name: 'Update Shopping Cart' });
      this.editItem = page.getByRole('link', { name: ' Edit' });
      this.updateItemButton = page.getByRole('button', { name: 'Update Cart' });
      this.removeItem = page.getByRole('link', { name: ' Remove item' });
      this.clearCartLink = page.getByRole('link', { name: 'here' });
    }
  
    async addToCartAndDelete() {
      await this.whatsNew.click();
      await this.pantsCategory.click();
      await this.productLink.click();
  
      await this.addToCartButton.click();
      await this.sizeOption.click();
      await this.colorOption.click();
      await this.qtyInput.click();
      await this.qtyInput.fill('2');
      await this.addToCartButton.click();
  
      await this.myCart.click();
      await this.viewAndEditCart.click();
      await this.updateCartButton.click();
  
      await this.editItem.click();
      await this.altSizeOption.click();
      await this.altColorOption.click();
      await this.updateItemButton.click();
  
      await this.qtyInput.click();
      await this.qtyInput.fill('20');
      await this.updateCartButton.click();
  
      await this.removeItem.click();
      await this.clearCartLink.click();
  
      await this.page.pause();
    }
  }
  
  module.exports = { CartPage };
  