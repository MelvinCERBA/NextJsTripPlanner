/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react';
import {ActivityMd} from '../ActivityMd' ;
import { formatCurrency } from "../../../commands/utils";
import {MyErrorBoundary} from "../../../commands/utils";


describe('ActivityMd', () => {
	// const {
	// 	container, 
	// 	getByText,
	// 	debug
	// } = render(
    //     <ActivityMd 
    //         price={15} 
    //         label={"label"} 
    //         adress={"adress"} 
    //         desc={"desc"} 
    //         link={"link"}
    //         />);

    it.each([
        [15, "activité 1", "32 rue du Pont", "Activité très sympa qui consiste en une série de choses fort agréables.", "google.com"],
        [1562.16523, "activité 2", "xvx", "cxvw", "cxvw"],
        [651, "activité 3", "32 rue du Ponfghdfgfd", "4561.", "google.com"]
    ])('Correct information result in appropriate display.', (price, label, adress, desc, link) => {
        try {
            const {
                container,
                getByText
            } 
            = render(<ActivityMd price={price} label={label} adress={adress} desc={desc} link={link}/>);
            expect(getByText(/-/i)).toBeInTheDocument();
            expect(getByText(adress)).toBeInTheDocument();
            expect(getByText(desc)).toBeInTheDocument();
        } catch(e) {
            errorMsg = e.message;
        }
        // const labelPrice = (price > 0 ? label + " - "+ formatCurrency(price) : label);
        // const re = new RegExp(labelPrice, "i");
        
    });
    it.each([
        ["ceci n'est pas un prix", "activité 1", "32 rue du Pont", "Activité très sympa qui consiste en une série de choses fort agréables.", "google.com"],
        [15, 156, "bdv", "dfqsfq", "sdfqf"],
        [15, "qdf", 50, "sfdq", "dfqsf"],
        [15, "sdfqsdf", "qdsff", 60, "qsdff"],
        [15, "qsdff", "qsdfq", "qdsf", 10],
    ])('Incorrect parameter type results in error.', (price, label, adress, desc, link) => {
        let errorMsg;
        try {
            render(
                <ActivityMd price={price} label={label} adress={adress} desc={desc} link={link}/>
            );
        } catch(e) {
          errorMsg = e.message;
        }
        expect(errorMsg).toEqual('Incorrect parameter type.');
    });
    it.each([
        [null, "qsfd", "sqdf", "dsqf", "sdf"],
        [15, null, "fdsqfqsdf", "sqfdsqq", "fdsfsq"],
        [15, "fdqs", null, "qsfdqfd", "qsdfqf"],
        [15, "fdsq", "sqdf", null, "qdfsq"],
        [15, "qdsfq", "dsqfq", "qdsfqsd", null],
    ])('Missing parameter results in error.', (price, label, adress, desc, link) => {
        let errorMsg;
        try {
            render(
                <ActivityMd price={price} label={label} adress={adress} desc={desc} link={link}/>
            );
        } catch(e) {
          errorMsg = e.message;
        }
        expect(errorMsg).toEqual('Missing parameter.');
    });
});