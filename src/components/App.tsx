import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { bubbleSort, generateArray } from "../helpers/helpers";
import { SortDisplay, SortType } from "../models/sort";
import Button from "./Button";
import Select from "./Select";

export const App = () => {
  const size = useAppSelector(state => state.sort.size)
  const min = useAppSelector(state => state.sort.min)
  const max = useAppSelector(state => state.sort.max)
  const [array, setArray] = useState(generateArray(size, min, max))
  const [sort, setSort] = useState<SortType>(SortType.Bubble)
  const [time, setTime] = useState<{ sec: number, mili: number }>({ sec: 0, mili: 0 })
  const [startTimer, setStatTimer] = useState(false)
  // const 
  const dispatch = useAppDispatch()

  const handleSortSelection = (e: any) => {
    setTime((current) => { return { ...current, sec: 0, mili: 0 }})
    setSort(e.target.value as SortType)
  }

  const handleNewArray = (): void => {
    setTime((current) => { return { ...current, sec: 0, mili: 0 }})
    setStatTimer(false)
    setArray(generateArray(size, min, max))
  }

  const handleStartStopTimer = (): void => {
    // if (startTimer) return setStatTimer(false)
    return setStatTimer((current) => !current)
  }

  const handleSort = async () => {
    // console.log(sort, SortType.Bubble.toString())
    // const date = Date.now() / 1000
    setStatTimer(true)
    if (sort === SortType.Bubble) {
      await setArray(await bubbleSort(array))
      // console.log((Date.now() / 1000) - date)
    }
    setStatTimer(false)
  }

  useEffect(() => {
    if (startTimer) {
      const timer = setInterval(() => {
        if (time.mili > 98)
          setTime((current) => { return { ...current, sec: current.sec++, mili: 0 }})
        else
          setTime((current) => { return { ...current, mili: current.mili++ }})
      }, 1)
      return () => clearInterval(timer)
    }
    return;
  })

  const sortOptions = [
    { value: SortType.Bubble, text: "Bubble Sort" },
    { value: SortType.Merge, text: "Merge Sort" },
    { value: SortType.Quick, text: "Quick Sort" },
    { value: SortType.Heap, text: "Heap Sort" },
  ]

  const displayOptions = [
    { value: SortDisplay.Castle, text: "Castle" },
    { value: SortDisplay.Falling, text: "Falling" },
    { value: SortDisplay.Growing, text: "Growing" },
    { value: SortDisplay.Sound, text: "Sound" },
  ]

  return (
    <div className="relative bg-gray-800 h-screen">
      <div className="flex shadow-xl h-14 w-full  mx-auto">
        <Button onClick={handleNewArray} text="new Array" />
        <Button onClick={handleStartStopTimer} text="Start/Stop Timer" />
        <Select name="sort-algorithme" onChange={handleSortSelection} options={sortOptions} />
        <Select name="display-mode" onChange={() => {}} options={displayOptions} />
        <Button onClick={handleSort} text="Sort" />
        <p className="text-white ml-auto mr-5 my-auto text-xl">{time.sec}:{time.mili < 10 && 0}{time.mili}</p>
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
