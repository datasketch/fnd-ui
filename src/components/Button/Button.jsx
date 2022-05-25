import PropTypes from 'prop-types'
import '../../index.css'

function Button ({ text, onClick }) {
  return <button type="button" onClick={onClick}>{text}</button>
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

Button.defaultProps = {
  onClick: () => {}
}

export default Button
