import './App.css'
import profilepic from "./assets/profilepic.jpg"

function App() {

  return (
    <div className='divcentre'>
    <h1>Portfolio</h1>
    
    <div className='imgpos'>
      <div className='divshape'><img className='imgshape' src={profilepic} alt="Profile Picture" /></div>
      </div>
    
    <h2>Haram Iqbal Nagra</h2>
    <h2>Hobbies</h2>
    <ul>
      <li>Footsall</li>
      <li>Cricket</li>
      <li>Video Gaming</li>
    </ul>
    <h2>Social Media Handles</h2>
    <ul>
      <li>Instagram : <a href="https://www.instagram.com/haram_nagra/">www.instagram.com</a></li>
      <li>Github : <a href="https://github.com/Haram-Nagra">www.github.com</a></li>
    </ul>

    <h2>Contacts</h2>
    <ul>
      <li>Personal : +92336-4399764</li>
      <li>Business : +92300-7417283</li>
    </ul>
    </div>
  )
}

export default App
