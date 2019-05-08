import { ReverseStr } from './reversestr.pipe';

describe('ReverseStr', () => {
  it('create an instance', () => {
    const pipe = new ReverseStr();
    expect(pipe).toBeTruthy();
  });
});
