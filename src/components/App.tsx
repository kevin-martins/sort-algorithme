import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setArray, startTimer, stopTimer } from "../features/sort-slice";
import { roundNumber } from "../helpers/helpers";

export const App = () => {
  const array = useAppSelector(state => state.sort.array)
  const size = useAppSelector(state => state.sort.size)
  const timer = useAppSelector(state => state.sort.timer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setArray(size))
    dispatch(startTimer())
    setTimeout(() => dispatch(stopTimer()), 5500)
  }, [])

  return (
    <div className="relative bg-gray-800 h-screen">
      <div className="flex ">
        <button
          type="button"
          onClick={() => dispatch(setArray(size))}
          className='text-white text-xl border-[1px] border-white px-8 py-4 hover:bg-white hover:text-black'
        >
          new Array
        </button>
        <select
          value='Sort Algotirhme'
          name='sot-algorithme'
          className='text-white bg-gray-800 text-xl border-[1px] border-white px-8 py-4 hover:bg-white hover:text-black'
          // onChange={() => console.log(value)}
        >
          <option value='merge'>Merge Sort</option>
          <option value='quick'>Quick Sort</option>
          <option value='heap'>Heap Sort</option>
          <option value='bubble'>Bubble Sort</option>
        </select>
        <p className="text-white ml-auto my-auto mr-5 text-xl">{roundNumber(6.550549)}</p>
      </div>
      {/* <div className="h-1 w-full bg-green-700 max-w-5xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"></div> */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center">
          {array.map((number: number, i: number) => (
            <div
              key={i}
              className='mx-1 bg-lime-500 w-[2px] inline-block'
              style={{ height: `${number}px` }}
            >
              {/* {number} */}
            </div>
          ))}
        </div>
        {/* <p className="text-center text-white text-2xl">{size}</p> */}
      </div>
    </div>
  );
}

export default App;
