import { useContext } from 'react'
import SearchBar from '../../components/searchBar/SearchBar'
import './homePage.scss'
import { AuthContext } from '../../context/AuthContext'

const HomePage = () => {

    const {currentUser} = useContext(AuthContext)

    

  return (
    <div className='homePage'>
        <div className="textContainer">
            <div className="wrapper">
                <h1 className='title'>Find your Perfect home away from HOME near your Second Home</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illum ab consequatur repudiandae repellendus consequuntur nulla, odit facilis eligendi quas.</p>
                <SearchBar />

                <div className='boxes'>
                    <div className='box'>
                        <h1>5</h1>
                        <h2>Girls only</h2>
                    </div>
                    <div className='box'>
                        <h1>5</h1>
                        <h2>Boys only</h2>
                    </div>
                    <div className='box'>
                        <h1>10</h1>
                        <h2>Boarding Houses</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="imgContainer">
            <img src="bg.png" alt="background image" />
        </div>
    </div>
  )
}

export default HomePage