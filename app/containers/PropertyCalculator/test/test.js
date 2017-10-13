import React from 'react';
import { renderComponent , expect } from 'chai';
import Page from '../index';
import { mount, shallow } from 'enzyme';
import TestUtils from "react-addons-test-utils"; 
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore([thunk]);
let store

store = mockStore({
    propertyData: {
        propertyData: {},
        propertyDataStatus: 'READY'
    }
});

const props = {
    propertyData: {},
    propertyDataStatus: "READY",
}

let wrapper = mount(
    <Provider store={store}>
        <Page {...props}/>
    </Provider>
);

describe('Property Calculator', () => {

    it('It exists!', () => {
        expect(Page).to.exist
    });

    it('It should render propertyCalculator container', () => {
        expect(wrapper.find('.main')).to.have.length(1);
    });
});