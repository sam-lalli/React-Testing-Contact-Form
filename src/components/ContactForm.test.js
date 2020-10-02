import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";


describe('ContactForm Tests', () => {
    test("renders App without crashing", () => {
        render(<ContactForm />);
    });

    test('can fill out and submit form', () => {
        //Act
        render(<ContactForm />)
        //Arrange
            //query inputs
        const firstNameInput = screen.getByLabelText(/first Name/i);
        const lastNameInput = screen.getByLabelText(/last Name/i);
        const emailNameInput = screen.getByLabelText(/email/i);
        const messageInput = screen.getByLabelText(/message/i);
        const submit = screen.getByRole('button', /submit/i);
            //errors
        // const firstNameError = screen.getByText(/Looks like there was an error: required/i);
        // const firstNameLengthError = screen.getByText(/Looks like there was an error: maxLength/i);
        // const lastNameError = screen.getByText(/Looks like there was an error: required/i);
        // const emailError = screen.getByText(/Looks like there was an error: required/i);
        //     //error tests
        // expect(firstNameError).not.toBeTruthy();
        // expect(firstNameLengthError).not.toBeTruthy();
        // expect(lastNameError).not.toBeTruthy();
        // expect(emailError).not.toBeTruthy();

            // fill out form
        fireEvent.change(firstNameInput, {target:{name:'firstName', value:'Sam'}});
        fireEvent.change(lastNameInput, {target:{name:'lastName', value:'Lalli'}});
        fireEvent.change(emailNameInput, {target:{name:'email', value:'me@me.com'}});
        fireEvent.change(messageInput, {target:{name:'message', value:'Lambda student'}});

        fireEvent.click(submit)

        //Assert
        const newForm = screen.findByText(/firstName: Sam, lastName: Lalli, email: me@me.com, message: Lambda student/i)


    })
    
})

