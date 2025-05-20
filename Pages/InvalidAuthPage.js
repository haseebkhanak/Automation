class InvalidAuthPage {
    constructor(page) {
      this.page = page;
      this.url = 'https://magento.softwaretestingboard.com/customer/account/create/';

      this.firstName = page.getByRole('textbox', { name: 'First Name*' });
      this.lastName = page.getByRole('textbox', { name: 'Last Name*' });
      this.email = page.getByRole('textbox', { name: 'Email*' });
      this.password = page.getByRole('textbox', { name: 'Password*', exact: true });
      this.confirmPassword = page.getByRole('textbox', { name: 'Confirm Password*' });
      this.createAccountButton = page.getByRole('button', { name: 'Create an Account' });

      this.signInLink = page.getByRole('link', { name: 'Sign In' });
      this.loginEmail = page.getByRole('textbox', { name: 'Email*' });
      this.loginPassword = page.getByRole('textbox', { name: 'Password* Password' });
      this.signInButton = page.getByRole('button', { name: 'Sign In' });
    }
  
    async gotoSignUp() {
      await this.page.goto(this.url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    }
  
    async signUp({ firstName, lastName, email, password, confirmPassword }) {
      await this.firstName.fill(firstName);
      await this.lastName.fill(lastName);
      await this.email.fill(email);
      await this.password.fill(password);
      await this.confirmPassword.fill(confirmPassword);
      await this.createAccountButton.click();
    }
  
    async gotoHome() {
      await this.page.goto('https://magento.softwaretestingboard.com/', { waitUntil: 'domcontentloaded', timeout: 60000 });
    }
  
    async login({ email, password }) {
      await this.signInLink.click();
      await this.loginEmail.fill(email);
      await this.loginPassword.fill(password);
      await this.signInButton.click();
    }
  }
  
  module.exports = { InvalidAuthPage };
  