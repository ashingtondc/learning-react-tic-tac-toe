import { render, fireEvent } from '@testing-library/react';
import Board from "./Board"

// Task 1
test('should re-render the board on each click', () => {
    const onClick = jest.fn();
    const board = render(<Board/>);
    const buttons = board.getAllByRole('button');

    // const button1 = buttons[0]
    buttons.forEach( button => {
        fireEvent.click(button);
        expect(button.innerHTML).toBe('X');
        fireEvent.click(button);
        expect(button.innerHTML).toBe('O');
    });
});

// Task 2
test('should re-render status message with each click', () => {
    const onClick = jest.fn();
    const board = render(<Board/>);
    const buttons = board.getAllByRole('button');
    const msg = board.getByText("Next player: X");

    // const button1 = buttons[0]
    const button1 = buttons[0];
    const button2 = buttons[1];

    fireEvent.click(button1);
    expect(msg.innerHTML).toBe("Next player: O");

    fireEvent.click(button2);
    expect(msg.innerHTML).toBe("Next player: X");

});
