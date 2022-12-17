import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fitScreen, setArray, startTimer, stopTimer } from "../features/sort-slice";
import { bubbleSort, generateArray, isSorted, roundNumber, swap } from "../helpers/helpers";

const enum SortType {
  Bubble,
  Quick,
  Heap,
  Merge,
}

export const App = () => {
  // const array = useAppSelector(state => state.sort.array)
  // const array = [200, 320, 50, 80, 120, 180, 250, 90, 380]
  const size = useAppSelector(state => state.sort.size)
  const min = useAppSelector(state => state.sort.min)
  const max = useAppSelector(state => state.sort.max)
  const [array, setArray] = useState(generateArray(size, min, max))
  // const timer = useAppSelector(state => state.sort.timer)
  const [time, setTime] = useState<{ sec: number, mili: number }>({ sec: 0, mili: 0 })
  const [sort, setSort] = useState<SortType>(SortType.Bubble)
  const [startTimer, setStatTimer] = useState(false)
  const dispatch = useAppDispatch()

  const handleSort = (e: any) => {
    setTime((current) => { return { ...current, sec: 0, mili: 0 }})
    setSort(e.target.value as SortType)
  }

  useEffect(() => {
    if (startTimer) {
      const timer = setInterval(() => {
        if (time.mili > 98)
          setTime((current) => { return { ...current, sec: current.sec++, mili: 0 }})
        else
          setTime((current) => { return { ...current, mili: current.mili++ }})
      }, 10)
      return () => clearInterval(timer)
    }
    return
  }, [startTimer])

  return (
    <div className="relative bg-gray-800 h-screen">
      <div className="flex ">
        <button
          type="button"
          onClick={() => {
            setTime((current) => { return { ...current, sec: 0, mili: 0 }})
            setStatTimer(false)
            setArray(generateArray(size, min, max))
          }}
          className='text-white text-xl border-[1px] border-white px-8 py-4 hover:bg-white hover:text-black'
        >
          new Array
        </button>
        <button
          type="button"
          onClick={() => {
            setStatTimer((current) => {return !current})
          }}
          className='text-white text-xl border-[1px] border-white px-8 py-4 hover:bg-white hover:text-black'
        >
          Timer
        </button>
        <select
          // defaultValue="bubble"
          name='sot-algorithme'
          className='text-white bg-gray-800 text-xl border-[1px] border-white px-8 py-4 hover:bg-white hover:text-black'
          onChange={handleSort}
        >
          <option value={SortType.Bubble}>Bubble Sort</option>
          <option value={SortType.Merge}>Merge Sort</option>
          <option value={SortType.Quick}>Quick Sort</option>
          <option value={SortType.Heap}>Heap Sort</option>
        </select>
        <select
          // value=''
          defaultValue="bubble"
          name='sot-algorithme'
          className='text-white bg-gray-800 text-xl border-[1px] border-white px-8 py-4 hover:bg-white hover:text-black'
          onChange={(e) => console.log(e.target.value)}
        >
          <option value='castle'>Castle</option>
          <option value='falling'>Falling</option>
          <option value='growing'>Growing</option>
          <option value='sound'>Sound</option>
        </select>
        <button
          type="button"
          onClick={async () => {
            console.log(sort, SortType.Bubble.toString())
            const date = Date.now() / 1000
            if (sort === SortType.Bubble) {
              setArray(await bubbleSort(array))
              console.log((Date.now() / 1000) - date)
            }
          }}
          className='text-white text-xl border-[1px] border-white px-8 py-4 hover:bg-white hover:text-black'
        >
          Launch
        </button>
        <p className="text-white ml-auto mr-5 my-auto text-xl">{time.sec}:{time.mili < 10 && '0'}{time.mili}</p>
      </div>
      <div className="text-white ml-5">
        <p>screen width: {window.screen.width}</p>
        <p>screen height: {window.screen.height}</p>
        <p>quantity: {size}</p>
        <p>minimum: {min}</p>
        <p>maximum: {max}</p>
      </div>
      {/* <div className="h-1 w-full bg-green-700 max-w-5xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"></div> */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform rotate-90">
        <div className="flex items-center">
          {array.map((number: number, i: number) => (
            <div
              key={i}
              className='bg-lime-500 w-2 inline-block'
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
