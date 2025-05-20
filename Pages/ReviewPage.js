class ReviewPage {
    constructor(page) {
      this.page = page;
      this.whatsNewMenuItem = page.getByRole('menuitem', { name: "What's New" });
      this.jacketsLink = page.getByRole('link', { name: 'Jackets' }).first();
      this.neveStudioJacketLink = page.getByRole('link', { name: 'Neve Studio Dance Jacket' }).first();
      this.addYourReviewLink = page.getByRole('link', { name: 'Add Your Review' });
      this.submitReviewButton = page.getByRole('button', { name: 'Submit Review' });
    }
  
    async addYourReview() {
      await this.whatsNewMenuItem.click();
      await this.jacketsLink.click();
      await this.neveStudioJacketLink.click();
      await this.addYourReviewLink.click();
      await this.submitReviewButton.click();
    }
  }
  
  module.exports = { ReviewPage };
  