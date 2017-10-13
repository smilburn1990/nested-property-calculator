import React from 'react';
import { renderComponent , expect } from 'chai';
import Page from '../index';
import { mount, shallow } from 'enzyme';
import TestUtils from "react-addons-test-utils"; 
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore([thunk]);
let store;

store = mockStore({
    uiactions: {},
    content: {
        content: {},
        contentStatus: 'READY'
    }
});

const props = {
    testcontent: {
        howtohomeswap: {}
    },
    contentStatus: "READY",
}

let wrapper = mount(
    <Provider store={store}>
        <Page {...props}/>
    </Provider>
);

describe('How it works page containers', () => {

    it('It exists!', () => {
        expect(Page).to.exist
    });

    it('It should render HowToHomeSwap container', () => {
        expect(wrapper.find('.how-to-home-swap--container')).to.have.length(1);
    });

    it('It should render MoreThanOneWay container', () => {
        expect(wrapper.find('.more-than-one-way--container')).to.have.length(1);
    });

    it('It should render SafeAsHouses container', () => {
        expect(wrapper.find('.safe-as-houses--container')).to.have.length(1);
    });

    it('It should render EverythingElse container', () => {
        expect(wrapper.find('.everything-else--container')).to.have.length(1);
    });

    it('It should render AnyQuestions container', () => {
        expect(wrapper.find('.any-questions--container')).to.have.length(1);
    });
});