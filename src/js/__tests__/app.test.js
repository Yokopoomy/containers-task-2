import ErrorRepository from '../app';

const errorRepo = new ErrorRepository();
errorRepo.errors.set(1, 'Error text 1');
errorRepo.errors.set(2, 'Error text 2');

test('return current error', () => {
  expect(errorRepo.translate(1)).toBe('Error text 1');
  expect(errorRepo.translate(2)).toBe('Error text 2');
});

test('return Unknown error', () => {
  expect(errorRepo.translate(3)).toBe('Unknown error');
});
