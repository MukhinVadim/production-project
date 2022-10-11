import { fireEvent, render, screen } from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal', () => {
  test('Test render', () => {
    render(
      <Modal isOpen onClose={jest.fn()}>
        Test
      </Modal>
    );
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });

  test('Clicking overlay calls the onClose callback', () => {
    const onClose = jest.fn();
    render(
      <Modal isOpen onClose={onClose}>
        Test
      </Modal>
    );
    const overlay = screen.getByTestId('overlay');

    fireEvent.click(overlay);
    expect(onClose).toHaveBeenCalled();
  });

  test('Escape keydown calls the onClose callback', () => {
    const onClose = jest.fn();
    render(
      <Modal isOpen onClose={onClose}>
        Test
      </Modal>
    );

    fireEvent.keyDown(document, {
      key: 'Escape',
      code: 'Escape',
      keyCode: 27,
      charCode: 27,
    });

    expect(onClose).toHaveBeenCalled();
  });
});
