import React from 'react';
import ReactDOM from 'react-dom';
import Inventory from './Inventory'

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter : new Adapter()})

describe('App test',() => {

it('App render without problem',() => {
    const div = document.createElement('div');
    ReactDOM.render(<Inventory/>,div);
    ReactDOM.unmountComponentAtNode(div);

})
    it('Inventory renders' , () => {
        const wrapper = shallow(<Inventory/>)

        //console.log(wrapper.debug())

        expect(wrapper.find('h2').text()).toBe('Inventory')
    })

})