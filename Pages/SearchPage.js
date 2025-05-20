class SearchPage {
    
    constructor(page) {
      this.page = page;
      this.searchInput = page.getByRole('combobox', { name: ' Search' });
      this.mensSuggestion = page.getByText('mens t-shirt', { exact: true });
      this.womensSuggestion = page.getByText("women's top");
      this.menSuggestion = page.getByText('men t shirt', { exact: true });
  
      this.productLink = page.getByRole('link', { name: 'Gobi HeatTec® Tee' }).first();
      this.sizeOption = page.getByRole('option', { name: 'M' });
      this.colorOption = page.getByRole('option', { name: 'Red' });
      this.addToCartBtn = page.getByRole('button', { name: 'Add to Cart' });
      this.shoppingCartLink = page.getByRole('link', { name: 'shopping cart' });
    }
  
    async navigate() {
      await this.page.goto('https://magento.softwaretestingboard.com/', {
        waitUntil: 'domcontentloaded'
      });
    }
  
    async search(term, suggestionLocator) {
      await this.searchInput.click();
      await this.searchInput.fill(term);
      await suggestionLocator.click();
    }
  
    async selectProductAndAddToCart() {
      await this.productLink.click();
      await this.sizeOption.click();
      await this.colorOption.click();
      await this.addToCartBtn.click();
      await this.shoppingCartLink.click();
    }
  }
  
  module.exports = { SearchPage };
  