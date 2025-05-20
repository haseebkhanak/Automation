
class HomePage {

    constructor(page) {
      this.page = page;

      this.whatsNew = page.getByRole('menuitem', { name: "What's New" });
      this.women = page.getByRole('menuitem', { name: ' Women' });
      this.men = page.getByRole('menuitem', { name: ' Men' });
      this.gear = page.getByRole('menuitem', { name: ' Gear' });
      this.training = page.getByRole('menuitem', { name: ' Training' });
      this.sale = page.getByRole('menuitem', { name: 'Sale' });

      this.hoodies = page.getByRole('link', { name: 'Hoodies & Sweatshirts' }).first();
      this.jackets = page.getByRole('link', { name: 'Jackets' }).first();
      this.tees = page.getByRole('link', { name: 'Tees' }).first();
      this.brasTanks = page.getByRole('link', { name: 'Bras & Tanks' });
      this.pants = page.getByRole('link', { name: 'Pants' }).first();
      this.shorts = page.getByRole('link', { name: 'Shorts' }).first();
    }
  
    async gotoHome() {
      await this.page.goto('https://magento.softwaretestingboard.com/', { waitUntil: 'domcontentloaded' });
    }
  
    async navigateMainMenu() {
      await this.whatsNew.click();
      await this.women.click();
      await this.men.click();
      await this.gear.click();
      await this.training.click();
      await this.sale.click();
    }
  
    async navigateWhatsNewLinks() {
      await this.whatsNew.click();
      await this.hoodies.click();
      await this.whatsNew.click();
      await this.jackets.click();
      await this.whatsNew.click();
      await this.tees.click();
      await this.whatsNew.click();
      await this.brasTanks.click();
      await this.whatsNew.click();
      await this.pants.click();
      await this.whatsNew.click();
      await this.shorts.click();
    }
  }
  
  module.exports = { HomePage };
  