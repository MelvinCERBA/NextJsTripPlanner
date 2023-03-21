/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react';
import {NavBar} from './NavBar' ;

describe('NavBar', () => {
	const {
		container, 
		getByText,
		debug
	} = render(<NavBar/>);
	// render(<NavBar/>);
	const title 		= getByText('Trip Tise');
	const btn_login 	= getByText('Se connecter');
	const btn_signin 	= getByText('S\'enregistrer');

    it('All elements displayed', () => {
        expect(title).toBeInTheDocument();
        expect(btn_login).toBeInTheDocument();
        expect(btn_signin).toBeInTheDocument();
    });
	it.skip('Buttons call appropriate functions', () => {
		jest.spyOn(actualNavBar, 'login');
		fireEvent.click(btn_login);
		expect(actualNavBar.func_login).toHaveBeenCalledTimes(1);
    });
});