class AuthPage {

    constructor(page) {
      this.page = page;

      this.firstnameInput = page.getByRole('textbox', { name: 'First Name*' });
      this.lastnameInput = page.getByRole('textbox', { name: 'Last Name*' });
      this.emailInput = page.getByRole('textbox', { name: 'Email*' });
      this.passwordInput = page.getByRole('textbox', { name: 'Password*', exact: true });
      this.confirmPasswordInput = page.getByRole('textbox', { name: 'Confirm Password*' });
      this.signUpButton = page.getByRole('button', { name: 'Create an Account' });

      this.signInLink = page.getByRole('link', { name: 'Sign In' });
      this.signInEmailInput = page.locator('#email'); 
      this.signInPasswordInput = page.locator('#pass'); 
      this.signInSubmit = page.getByRole('button', { name: 'Sign In' });
    }
  
    async goto() {
      await this.page.goto('https://magento.softwaretestingboard.com/customer/account/create/', {
        waitUntil: 'domcontentloaded',
        timeout: 60000,
      });
    }
  
    async signUp(firstname, lastname, email, password, confirmPassword) {
      await this.firstnameInput.fill(firstname);
      await this.lastnameInput.fill(lastname);
      await this.emailInput.fill(email);
      await this.passwordInput.fill(password);
      await this.confirmPasswordInput.fill(confirmPassword);
      await this.signUpButton.click();

    }
  
    async signIn(email, password) {
      await this.signInLink.click();
      await this.signInEmailInput.fill(email);
      await this.signInPasswordInput.fill(password);
      await this.signInSubmit.click();
    //   await this.page.pause()
    }
  }
  
  module.exports = { AuthPage };
  