const Button = ({text,onClick,color}) => {
  return (
    <button style={{backgroundColor: color}} className='btn' onClick={onClick}>{text}</button>
  )
}

export default Button