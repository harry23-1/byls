export class BookingPage{

    static getEmail =()=> cy.get('[type="email"]')
    static getPassword =()=> cy.get('[type="password"]')
    static loginButton =()=> cy.get('[type="submit"]')

    static newLocationPage =()=> cy.contains('New booking')
    static bookingLocationPage =()=> cy.visit('https://app-staging.getblys.com.au/new-booking/saved-locations')
    static addNewLocation=()=> cy.contains('Add new location')
    static streetAddress =()=> cy.get('[placeholder="Street address"]')
    static getValue =()=> cy.contains('Kathmandu, Nepal')
    static locationType =() => cy.get('.jss60 > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root')
    static selectLocationType =() => cy.contains('Office')


    static getParking=()=> cy.get('.jss56 > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root')
    static getParkingValue=()=> cy.contains('Visitor parking(free)')
    static getStairs=()=> cy.get('.jss62 > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root')
    static getStairsValue=()=>cy.contains('No stairs')
    static getPets=()=>cy.get('.jss68 > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root')
    static getPetsValue=()=> cy.contains('No pets')

    static saveButton = ()=> cy.contains('Save')
    static continueToanotherPage = () => cy.contains('Continue')

    static serviceType =()=> cy.get('.jss60 > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root')
    static getServiceValue =()=> cy.contains('Massage')

    static sessionType =()=>cy.get('.jss271 > [style="width: 100%; cursor: pointer;"] > .MuiBox-root > .MuiTypography-root')
    static getSessionValye =()=> cy.contains('Massage')

    static duration =()=>cy.get('.jss278 > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root')
    static durationValue =()=> cy.contains('60 mins')
    static treatmentType =()=> cy.get('.jss286 > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root')
    static treatmentValue =()=>cy.contains('')
    static gender =()=>cy.get('.jss343 > .MuiButtonBase-root > .MuiBox-root > .MuiTypography-root')
    static genderValue =()=>cy.contains('Male')


      







}