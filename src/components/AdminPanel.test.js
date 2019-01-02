import React from 'react';
import ReactDOM from 'react-dom';
import AdminPanel from './AdminPanel'

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter : new Adapter()})

describe('App test',() => {

it('App render without problem',() => {
    const div = document.createElement('div');
    ReactDOM.render(<AdminPanel/>,div);
    ReactDOM.unmountComponentAtNode(div);

})
    it('AdminPanel renders' , () => {
        const wrapper = shallow(<AdminPanel/>)

        //console.log(wrapper.debug())

        expect(wrapper.find('h2').text()).toBe('AdminPanel')
        expect(wrapper).toMatchSnapshot();
    })

})