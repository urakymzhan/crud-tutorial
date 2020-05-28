import React from 'react';
import App from '../../App';
import Search from '../../components/search/Search.jsx';
import { shallow, mount } from 'enzyme';


// App: h2
// describe('App', () => {
//     it('renders the App title', () => {
//         let app = shallow(<App />);
//         expect(app.find('h2').text()).toEqual('Employee Title')
//     })
// })

// App: props
// const props = { texts: { title: "Employee Title"}};

// describe('App', () => {
//     it('renders the App title', () => {
//         let app = shallow(<App {...props}/>);
//         expect(app.find('h2').text()).toEqual(props.texts.title)
//     })
// })

// App: option: first: props
describe('App', () => {
    it('Options first child should be Select', () => {
        let app = mount(<App />);
        // console.log(app.debug());
        expect(app.find('option').first().props().children).toBe('Select')
    })
})

// App: option: last: text
describe('App', () => {
    it('Options last child should be State', () => {
        let app = mount(<App />);
        expect(app.find('option').last().props().children).toBe('State')
        expect(app.find('option').last().text()).toBe('State')
    })
})

// App: Search: exists()
describe('App', () => {
    it('App should have input with className search-bar', () => {
        let app = mount(<App />);
        expect(app.find('.search-bar').exists()).toEqual(true);   
    })
})

// App: Search: dive()
// describe('Search', () => {
//   it('button click should hide component', () => {
//     const app = shallow(<App />);
//     // console.log(app.find(Search).debug())
//      expect(app.find(Search).dive().find('.search')).toHaveLength(1);

//   });
// });

