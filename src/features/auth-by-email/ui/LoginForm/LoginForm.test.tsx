import { componentRender } from '@config/jest/componentRender';
import { screen } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  test('Test render', () => {
    componentRender(<LoginForm />);
    expect(screen.getByTestId('login-form')).toBeInTheDocument();
  });
});
