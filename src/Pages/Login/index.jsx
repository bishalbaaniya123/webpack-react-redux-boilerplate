import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { testAction } from '../../redux-stuffs/actions/test_action';

class TestComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.testAction('Hello');
  }

  render() {
    return (
      <div>
        <h1>This is a Login component</h1>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      testAction,
    },
    dispatch,
  );
const mapStateToProps = state => {
  console.log('this is state from mapStateToProps', state);
  return {};
};

const smartTestComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TestComponent);
export default smartTestComponent;
