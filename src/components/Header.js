import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'
const Header = ({ title, onAdd, showAdd }) => {
    const Location = useLocation()
    return (
        <header className='header'>
            <h1 >{title}</h1>
            { Location.pathname === '/' &&
                <Button onClick={onAdd}
                    color={showAdd ? 'red' : 'green'}
                    text={showAdd ? 'Close' : 'Add'} />
            }
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
//CSS in JS
// const HeadingStyle = {
//     color:'blue', 
//     backgroundColor: 'black'
// }

export default Header
