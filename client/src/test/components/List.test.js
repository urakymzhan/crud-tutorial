import React from 'react';
import Lists from '../../components/list/List.jsx';
import { mount, shallow } from "enzyme";


describe('List', () => {

    it('test if all headers are in place', () => {
        const list = mount(<Lists employees = { [] } />);
        expect(list.name()).toBe('List');
        // console.log(list.debug())
        const headers = ["ID", "Name", "Last Name", "Email", "City", "State", "Delete"];
        // console.log(list.find('.cell').at(0).props().children);
        // console.log(list.find('.cell').at(1).props().children);
        // console.log(list.find('.cell').at(2).props().children);
        // console.log(list.find('.cell').at(3).props().children);
        // console.log(list.find('.cell').at(4).props().children);
        // console.log(list.find('.cell').at(5).props().children);
        // console.log(list.find('.cell').at(6).props().children);

        headers.forEach((header, ind) => {
            expect(list.find('.cell').at(ind).props().children).toEqual(header);
        })
       

    })
})

