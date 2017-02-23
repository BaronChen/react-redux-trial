import { connect } from 'react-redux';
import { showAlert } from './test-component.action';
import { testComponent } from './test-component';

const mapStateToProps = (state, ownProps) => {
  return {
    text: state.text
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(showAlert(ownProps.text))
    }
  }
}

const TestComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(testComponent)

export default TestComponentContainer