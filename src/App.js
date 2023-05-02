import Backdrop from 'C:/Users/sundi/Documents/Coding/JS/cult/src/Site Objects/Back drop2.png'
import ult from 'C:/Users/sundi/Documents/Coding/JS/cult/src/Site Objects/ult2.png'
import initiation from 'C:/Users/sundi/Documents/Coding/JS/cult/src/Site Objects/Initiation2.png'
import initiation2 from 'C:/Users/sundi/Documents/Coding/JS/cult/src/Site Objects/inisheashon.png'
import Backdrop2 from 'C:/Users/sundi/Documents/Coding/JS/cult/src/Site Objects/Back drop side2.png'
import './App.css'

const App = () => {
    return(
        <div>
            <div className={'parent'}>
                <img className={'backdrop'} src={Backdrop}/>
                <img className={'backdropSide'} src={Backdrop2}/>
                <img className={'initiation'} src={initiation}/>
                {/* <img className={'initiation2'} src={initiation2}/> */}
                <img className={'ult'} src={ult}/>
            </div>
        </div>
    )
}

export default App