import React from 'react';
import Footer from '../../components/footer/Footer.jsx';
import { shallow, mount } from 'enzyme';

// Footer
describe('Footer', () => {
    it('renders the Footer title', () => {
        let footer = shallow(<Footer />);
        expect(footer.find('div').at(1).text()).toEqual('Made by Seytech student. 2020')
    })
})