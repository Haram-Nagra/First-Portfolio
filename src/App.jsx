import './App.css'
import Firstdiv from './components/Firstdiv'
import Fourthdiv from './components/Fourthdiv'
import Secondiv from './components/Seconddiv'
import Thirddiv from './components/Thirddiv'

function App() {

  return (
    <div className='bgcolor'>
    {/* //First div */}
    <Firstdiv />
    {/* //second div */}
    <Secondiv />
    {/* //third div */}
    <Thirddiv />
    {/* fourth div */}
    <Fourthdiv/>
    </div>
  )
}

export default App
