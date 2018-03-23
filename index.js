import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class CodeSandbox extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    precheck: PropTypes.bool,
  };

  async componentDidMount() {
    const { id, precheck } = this.props;
    const url = `https://codesandbox.io/api/v1/sandboxes/${id}`;

    try {
      const response = await axios.get(url);

      console.log(response.status);
    } catch (e) {
      console.log(e);

      throw new Error('The sandbox you requested does not exist!');
    }
  }
  render() {
    const { id } = this.props;

    return (
      <iframe
        src={`https://codesandbox.io/embed/${id}`}
        style={{
          width: '100%',
          height: '500px',
          border: '0',
          borderRadius: '4px',
          overflow: 'hidden',
        }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />
    );
  }
}

export default CodeSandbox;
