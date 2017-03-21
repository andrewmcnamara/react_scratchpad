// import {connect} from 'react-redux/native'

const HelloMessage = React.createClass({
  render: function() {
    return <div>Hellodsf dsfdsfsdf {this.props.name}</div>
  }
});


ReactDOM.render(<HelloMessage name="World" />, document.getElementById('root'));