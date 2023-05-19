import { BookingPage } from "../../support/byls/newbooking.po";

describe("Booking Page", () => {
  beforeEach(() => {
    cy.fixture('login').then((loginData) => {
      const { baseUrl, email, password } = loginData;
      cy.visit(baseUrl + '/login');
      BookingPage.getEmail().type(email);
      BookingPage.getPassword().type(password);
      BookingPage.loginButton().click();
    });
  });

  it('should create a new booking and verify cost and all details', () => {
    BookingPage.newLocationPage().click();
    BookingPage.bookingLocationPage();
    BookingPage.addNewLocation().click();
    BookingPage.streetAddress().type('Kathmandu');
    cy.wait(2000);
    BookingPage.getValue().should('be.visible').first().click();
    cy.wait(1500);
    BookingPage.locationType().click();
    cy.wait(1500);
    BookingPage.selectLocationType().click({ force: true });
    cy.wait(2000);
    BookingPage.getParking().click();
    cy.wait(2000);
    BookingPage.getParkingValue().should('be.visible').click();
    cy.wait(1500);
    BookingPage.getStairs().click();
    cy.wait(2000);
    BookingPage.getStairsValue().should('be.visible').click();
    cy.wait(1500);
    BookingPage.getPets().click();
    cy.wait(1000);
    BookingPage.getPetsValue().should('be.visible').click();
    cy.wait(1000);
    BookingPage.saveButton().click();
    cy.wait(1000);
    BookingPage.continueToanotherPage().click();
    BookingPage.sessionType().click();
    cy.wait(1000);
    BookingPage.getSessionValue().should('be.visible').click();

    BookingPage.duration().click();
    BookingPage.durationValue().first().click();
    cy.wait(1000);
    BookingPage.treatmentType().click();
    BookingPage.treatmentValue().should('be.visible').click();
    cy.wait(1000);
    BookingPage.gender().click();
    BookingPage.genderValue().should('be.visible').click();
    BookingPage.continueToanotherPage().click();

    cy.fixture('login').then((loginData) => {
      const { baseUrl } = loginData;
      cy.fixture('urls').then((urlData) => {
        const { newBooking } = urlData;
        cy.url().should('eq', baseUrl + newBooking);
      });
    });

    cy.contains('Subtotal').should('be.visible');
    cy.contains('Peak hour').should('be.visible');
    cy.contains('Staging processing fee').should('be.visible');
    cy.contains('Total due').should('be.visible');

    cy.wait(30000);
    BookingPage.conformBooking().click();
    cy.wrap();
  });
  it('shows the detais and verify',()=>{

    cy.visit('app-staging.getblys.com.au/bookings')
    cy.contains('New Swedish Massage').click()
    cy.contains('Subtotal').should('be.visible')
    cy.contains('Peak hour').should('be.visible')
    cy.contains('Staging processing fee').should('be.visible')
    cy.contains('Total due').should('be.visible')
    cy.contains('Summary').should('be.visible')


  })
});
