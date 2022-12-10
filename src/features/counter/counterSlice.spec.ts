import sortReducer, {
  SortState,
  setArray,
} from '../sort-slice';

describe('counter reducer', () => {
  const initialState: SortState = {
    size: 100,
    array: [],
    timer: 0,
  };
  it('should handle initial state', () => {
    expect(sortReducer(undefined, { type: 'unknown' })).toEqual({
      size: 100,
      array: [],
      timer: 0,
    });
  });

  it('should handle array generation with size param', () => {
    const actual = sortReducer(initialState, setArray(initialState.size));
    expect(actual.array.length).toEqual(initialState.size);
  });

//   it('should handle decrement', () => {
//     const actual = counterReducer(initialState, decrement());
//     expect(actual.value).toEqual(2);
//   });

//   it('should handle incrementByAmount', () => {
//     const actual = counterReducer(initialState, incrementByAmount(2));
//     expect(actual.value).toEqual(5);
//   });
});
