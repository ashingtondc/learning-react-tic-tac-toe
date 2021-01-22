import { calculateWinner } from './helpers';


test('2 + 2 should return 4', () => {
    expect(2 + 2).toBe(4); // this test fails!
  });

test('should return X as the winner if it has the top row', () => {
  // Arrange the test
  const squares = ['X', 'X', 'X', 'O', null, 'O', null, null, null];
  
  // Act
  const winner = calculateWinner(squares);

  // Assert
  expect(winner).toBe('X');
});

// Test O wins
test('should return O as the winner if it has the right column', () => {
  // Arrange the test
  const squares = ['X', 'X', 'O', 'X', 'O', 'O', null, null, 'O'];
  
  // Act
  const winner = calculateWinner(squares);

  // Assert
  expect(winner).toBe('O');
});

// Test no winner
test('should return null as the winner if neither X nor O has 3 in a row', () => {
  // Arrange the test
  const squares = ['X', null, 'X', 'O', null, 'O', null, null, null];
  
  // Act
  const winner = calculateWinner(squares);

  // Assert
  expect(winner).toBe(null);
});