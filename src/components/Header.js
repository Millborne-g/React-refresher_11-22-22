import Button from "./Button"

const Header = ({title,onAdd, addBtnTxt}) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        
        <Button text={
          addBtnTxt ? 'Close' : 'Add'
        } 
        color={
          addBtnTxt ? 'red' : 'green'
        }
        
        onClick={onAdd}/>
    </header>

  )
}

/*
//default lang sya na ma display, pero ma overwrite kung mag send kag pros gikan sa App.js
Header.defaultProps = {
    title: 'user',
}*/

/**
// css in JS
const Headerstyle = {
    color: 'red'
}
 
 */

export default Header