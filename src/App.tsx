
import './App.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import Alert from 'react-bootstrap/Alert';

function App() {


  return (
    <div className="App">

            <Alert key='info'  variant="info">
                <FontAwesomeIcon icon={faCoffee}/>Lets Start!
            </Alert>


    </div>
  )
}

export default App
