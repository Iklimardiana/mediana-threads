/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when email and password are wrong
 *   - should display homepage when email and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173');
  });

  it('should display login page correctly', () => {
    cy.get('input[placeholder="name@example.com"]').should('be.visible');
    cy.get('input[placeholder="••••••••"]').should('be.visible');
    cy.get('button').contains(/^Sign in$/).should('be.visible');
  });

  it('should display alert when email is empty', () => {
    cy.get('button').contains(/^Sign in$/).click();

    cy.on('window.alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    cy.get('input[placeholder="name@example.com"]').type('testusername');

    cy.get('button').contains(/^Sign in$/).click();

    cy.on('window.alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when email and password are wrong', () => {
    cy.get('input[placeholder="name@example.com"]').type('emailtest');

    cy.get('input[placeholder="••••••••"]').type('wrong_passwordtest');

    cy.get('button').contains(/^Sign in$/).click();

    cy.on('window.alert', (str) => {
      expect(str).to.equal('email or password is wrong');
    });
  });

  it('should display homepage when email and password are correct', () => {
    cy.get('input[placeholder="name@example.com"]').type('mediana@gmail.com');

    cy.get('input[placeholder="••••••••"]').type('12345678');

    cy.get('button').contains(/^Sign in$/).click();

    cy.get('p').contains(/^Me-Threads$/).should('be.visible');

    cy.get('img').click();

    cy.get('span').contains('Logout').should('be.visible');
  });
});
