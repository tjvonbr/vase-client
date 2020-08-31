import React from 'react';
import axios from 'axios';
import {Login} from './Login'
import renderer from 'react-test-renderer';

test('Login renders correctly', () => {
	const login = renderer.create(<Login />);
	let JSONlogin = login.toJSON();
	expect(JSONlogin).toMatchSnapshot();
})