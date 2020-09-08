import React from 'react';
import { Login } from './Login'
import TestRenderer from 'react-test-renderer';

test('Login renders correctly', () => {
	const login = TestRenderer.create(<Login />).toJSON();
	expect(login).toMatchSnapshot();
})