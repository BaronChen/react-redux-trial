import React, { PropTypes } from 'react'

const testComponent = ({ text, onClick }) => {

    let input;

    return (
        <div>
              <a href="#"
                onClick={e => {
                    e.preventDefault()
                    onClick(input.value)
                }}>
                Click to alert
                </a>
                <input ref={node => {
                    input = node
                    }} />
        </div>
      
    )
}

testComponent.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default testComponent