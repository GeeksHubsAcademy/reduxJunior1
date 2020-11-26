import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <pre>
        {
          JSON.stringify(props, null, 2)
        }
      </pre>
      <button onClick={()=> props.addRandomTodo()}>
        add Todo
      </button>
    </div>
  );
}

const mapStateToProps = state => ({state: state, hola: 12})

const mapDispatchToProps = (dispatch) => ({
  addRandomTodo: () =>
  dispatch({
    type: 'ADD_TODO',
    payload: 'borra esta tarea!',
  }),
});

const connectedApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)
(App);

export default connectedApp;
