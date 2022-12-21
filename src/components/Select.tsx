import { OptionProps, SelectProps } from "../models/select"

const Select = ({ name, onChange, options }: SelectProps) => {
  return (
    <select
        name={name}
        className='text-white bg-gray-800 text-xl border-[1px] border-white px-8 py-4 hover:bg-white hover:text-black'
        onChange={onChange}
    >
        {options.map((option: OptionProps) => (
            <option value={option.value}>{option.text}</option>
        ))}
    </select>
  )
}

export default Select
