import React from 'react';
import Search from '../../components/search/Search.jsx';
import { shallow, mount } from 'enzyme';


describe('Search', () => {
    const props = { searchBy: ''};
    it('Make sure input exists', () => {
      const search = shallow(<Search {...props} />);
    //   console.log(search.debug())
       expect(search.find('.search')).toHaveLength(1);
    });
});

  // Search: Mock: simulate() 
describe('Seach', () => {
    it("onChange param is the same value as the input element's value property", () => {
        const mockFn = jest.fn();
        const event = {target: {value: "jessi"}};

        const search = shallow(<Search 
                                        searchBy=""
                                        getSearch={mockFn}/>);
    
        search.find('input').simulate('change', event );
        expect(mockFn).toHaveBeenCalledWith(event);
        expect(mockFn.mock.calls.length).toEqual(1);
        expect(mockFn).toBeCalled();
    });
})
