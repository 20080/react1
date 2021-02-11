import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title}) => {
    const onClick = () =>{
        console.log('Clicked')
    }
    return (
        <header className='header'>
            <h1 >{title}</h1>
           <Button onClick = {onClick} color={'green'} text={'Add'} />
        </header>
    )   
}

Header.defaultProps={
    title: "Task Tracker Bitch"
}

Header.propTypes = {
    title:PropTypes.string.isRequired,
}
//CSS in JS
    // const HeadingStyle = {
    //     color:'blue', 
    //     backgroundColor: 'black'
    // }

export default Header
