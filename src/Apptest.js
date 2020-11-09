// import React from "react";
// import { mount } from "enzyme";
// import App from "./App";
// import store from './store';
// import { shallow } from "enzyme";
// import { HomePage } from "./pages/Home/container";

// const setUp = (initialState={}) => {
//     const store = testStore(initialState);
//     const wrapper = shallow(<App store={store} />).childAt(0).dive();
//     return wrapper;
// };

// describe("Counter Testing", () => {

//     test("render the title of page", () => {
//         const wrapper = shallow(<HomePage store={store}/>);
//         console.log(wrapper.find('h2'));
//         console.log(wrapper.find('#enzymeTest').text());
//         console.log(wrapper.find('h4'));
//         console.log(wrapper.find('h5'));
//         console.log(wrapper.find('h6'));
//         // expect(wrapper.find('h4').text)
//     })
// //   let wrapper;
// //   beforeEach(() => {
// //     wrapper = mount(<App />);
// //   });

// //   test("render the title of counter", () => {
// //     expect(wrapper.find("h1").text()).toContain("This is counter app");
// //   });

// //   test("render a button with text of `increment`", () => {
// //     expect(wrapper.find("#increment-btn").text()).toBe("Increment");
// //   });

// //   test("render the initial value of state in a div", () => {
// //     expect(wrapper.find("#counter-value").text()).toBe("0");
// //   });

// //   test("render the click event of increment button and increment counter value", () => {
// //     wrapper.find("#increment-btn").simulate("click");
// //     expect(wrapper.find("#counter-value").text()).toBe("1");
// //   });

// //   test("render the click event of decrrment button and decrement counter value", () => {
// //     wrapper.find("#increment-btn").simulate("click");
// //     expect(wrapper.find("#counter-value").text()).toBe("1");
// //     wrapper.find("#decrement-btn").simulate("click");
// //     expect(wrapper.find("#counter-value").text()).toBe("0");
// //   });
// });