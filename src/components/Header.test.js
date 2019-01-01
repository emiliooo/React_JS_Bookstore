import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter : new Adapter()})

describe('App test',() => {

it('App render without problem',() => {
    const div = document.createElement('div');
    ReactDOM.render(<Header/>,div);
    ReactDOM.unmountComponentAtNode(div);

})
    it('Header renders' , () => {
        const wrapper = shallow(<Header/>)

        //console.log(wrapper.debug())

        expect(wrapper.find('h2').text()).toBe('Black books')
    })

})