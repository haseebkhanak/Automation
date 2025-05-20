const { test } = require('@playwright/test');
const { AuthPage } = require('../../pages/ValidAuthPage');
const { HomePage } = require('../../pages/HomePage');
const { SearchPage } = require('../../pages/SearchPage');
const { CartPage } = require('../../pages/CartPage');
const { ReviewPage } = require('../../pages/ReviewPage');
const { InvalidAuthPage } = require('../../pages/InvalidAuthPage');

test.beforeEach(async ({ page },testInfo) => {
    if (!testInfo.title.toLowerCase().includes('invalid')) {
    const authPage = new AuthPage(page);
  
    await authPage.goto();
  
    await authPage.signUp(
      'Haseeb',
      'Khan',
      'hsk274118@gmail.com',
      'Pakistan123#',
      'Pakistan123#'
    );
  
    await authPage.signIn(
      'hsk274118@gmail.com', 
      'Pakistan123#'
  );
}
  });

test.only('Home', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.gotoHome();
  await homePage.navigateMainMenu();
  await homePage.navigateWhatsNewLinks();

  await page.pause(); 
});

test('Search', async ({ page }) => {
    const searchPage = new SearchPage(page);
  
    await searchPage.navigate();
  
    await searchPage.search('mens', searchPage.mensSuggestion);
    await searchPage.search('wom', searchPage.womensSuggestion);
    await searchPage.search('men', searchPage.menSuggestion);
  
    await searchPage.selectProductAndAddToCart();
  
    await page.pause();
  });

  test('AddToCart & DeleteFromCart', async ({ page }) => {
    const cartPage = new CartPage(page);
    await cartPage.addToCartAndDelete();
    await page.pause()
  });

  test('AddYourReview', async ({ page }) => {
    const reviewPage = new ReviewPage(page);
    await reviewPage.addYourReview();
    await page.pause();
  });

  test('InvalidSignUpWithEmptyName', async ({ page }) => {
    const auth = new InvalidAuthPage(page);
    await auth.gotoSignUp();
    await auth.signUp({ firstName: '', lastName: '', email: 'hsk274118@gmail.com', password: 'Pakistan123#', confirmPassword: 'Pakistan123#' });
    await page.pause();
  });
  
  test('InvalidSignUpWithInvalidEmail', async ({ page }) => {
    const auth = new InvalidAuthPage(page);
    await auth.gotoSignUp();
    await auth.signUp({ firstName: 'Haseeb', lastName: 'Khan', email: 'hsk274118gmail.com', password: 'Pakistan123#', confirmPassword: 'Pakistan123#' });
    await page.pause();
  });
  
  test('InvalidSignUpWithInvalidConfirmPasword', async ({ page }) => {
    const auth = new InvalidAuthPage(page);
    await auth.gotoSignUp();
    await auth.signUp({ firstName: 'Haseeb', lastName: 'Khan', email: 'hsk274118@gmail.com', password: 'Pakistan123#', confirmPassword: 'Pakistan123' });
    await page.pause();
  });
  
  test('InvalidLoginWithInvalidCredentials', async ({ page }) => {
    const auth = new InvalidAuthPage(page);
    await auth.gotoHome();
    await auth.login({ email: 'hsk27118@gmail.com', password: 'Pakistan123' });
    await page.pause();
  });


