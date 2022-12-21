type Props = {
    onClick: any,
    text: string
}

const Button = ({ onClick, text }: Props) => {
  return (
    <button
        type="button"
        onClick={onClick}
        className='text-white text-xl border-[1px] border-white px-5 py-2 hover:bg-white hover:text-black'
    >
        {text}
    </button>
  )
}

export default Button
