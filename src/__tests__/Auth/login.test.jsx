import Login from "../../components/Auth";
import React from "react";
import { render, screen } from "@testing-library/react";

describe('Login', () => {
    it('should render the login component', () => {
        render(<Login />);
        expect(screen).toBeDefined();
    });

    // should render the login form
    it('should render the login form', () => {
        render(<Login />);
        expect(screen.getByText('Name:')).toBeInTheDocument();
        expect(screen.getByText('Password:')).toBeInTheDocument();
        expect(screen.getByText('Submit')).toBeInTheDocument();
    });

});