/**
 * skenario testing register component
 *
 * - RegisterInput component
 *   - return should handle username typing correctly
 *   - return should handle email typing correctly
 *   - return should handle password typing correctly
 *   - return should call register function when signup button is clicked
 */

import React from 'react';
import {
  describe, it, expect, afterEach, vi,
} from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import RegisterInput from './RegisterInput';

expect.extend(matchers);
describe('RegisterInput component', () => {
  afterEach(() => {
    cleanup();
  });
  it('should handle username typing correctly', async () => {
    // Arrange
    render(<RegisterInput onRegister={() => {}} />);
    const usernameInput = await screen.getByPlaceholderText('Your Name');

    // Action
    await userEvent.type(usernameInput, 'usernametest');

    // Assert
    expect(usernameInput).toHaveValue('usernametest');
  });

  it('should return should handle username typing correctly', async () => {
    // arrange
    render(<RegisterInput onRegister={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('name@example.com');

    // Action
    await userEvent.type(emailInput, 'emailtest');

    // Assert
    expect(emailInput).toHaveValue('emailtest');
  });

  it('should handle password typing correctly', async () => {
    render(<RegisterInput onRegister={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('••••••••');

    // Action
    await userEvent.type(passwordInput, 'passwordtest');

    // Assert
    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('should call register function when signup button is clicked', async () => {
    // Arrange
    const mockRegister = vi.fn();
    render(<RegisterInput onRegister={mockRegister} />);

    const usernameInput = await screen.getByPlaceholderText('Your Name');

    await userEvent.type(usernameInput, 'usernametest');

    const emailInput = await screen.getByPlaceholderText('name@example.com');

    await userEvent.type(emailInput, 'emailtest');

    const passwordInput = await screen.getByPlaceholderText('••••••••');

    await userEvent.type(passwordInput, 'passwordtest');

    const registerButton = await screen.getByRole('button', { name: 'Sign up' });

    // Action
    await userEvent.click(registerButton);

    // Assert
    expect(mockRegister).toBeCalledWith({
      name: 'usernametest',
      email: 'emailtest',
      password: 'passwordtest',
    });
  });
});
