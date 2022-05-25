import PropTypes from 'prop-types'

function LightboxImage ({ src, alt }) {
  return (<div className='fnd-ui-lightbox-container'>
    <img className='fnd-ui-lightbox-image' src={src} alt={alt} />
  </div>)
}

LightboxImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
}

LightboxImage.defaultProps = {
  alt: ''
}

export default LightboxImage
