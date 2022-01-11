import React from 'react';
import PropTypes from 'prop-types';

class LoginInput extends React.Component {
  render() {
    const { testId, type, placeholder, id, value, handleChange } =this.props;
    return (
    <div className="md:w-2/3">
      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2
        px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white
        focus:border-purple-500"
        data-testid={ testId }
        id={ id }
        type={ type }
        placeholder={ placeholder }
        value={ value }
        onChange={ (event) => handleChange(event) }
      />
    </div>
    );
  }
}

LoginInput.propTypes = {
  testId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default LoginInput;
