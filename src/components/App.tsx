import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fitScreen, setArray, startTimer, stopTimer } from "../features/sort-slice";
import { roundNumber } from "../helpers/helpers";


export const App = () => {
  const array = useAppSelector(state => state.sort.array)
  const size = useAppSelector(state => state.sort.size)
  const min = useAppSelector(state => state.sort.min)
  const max = useAppSelector(state => state.sort.max)
  const timer = useAppSelector(state => state.sort.timer)
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(fitScreen({ width: window.screen.width, height: window.screen.height }))
    dispatch(setArray())
    dispatch(startTimer())
    setTimeout(() => dispatch(stopTimer()), 5500)
  }, [])

  return (
    <div className="relative bg-gray-800 h-screen">
      <div className="flex ">
        <button
          type="button"
          onClick={() => dispatch(setArray())}
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
      </div>
      <div className="text-white ml-5">
        <p>screen width: {window.screen.width}</p>
        <p>screen height: {window.screen.height}</p>
        <p>quantity: {size}</p>
        <p>minimum: {min}</p>
        <p>maximum: {max}</p>
      </div>
      {/* <div className="h-1 w-full bg-green-700 max-w-5xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"></div> */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex gap-[.5px] items-center">
          {array.map((number: number, i: number) => (
            <div
              key={i}
              className='bg-lime-500 w-[1.5px] inline-block'
              style={{ height: `${number}px` }}
            >
              {/* {number} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
