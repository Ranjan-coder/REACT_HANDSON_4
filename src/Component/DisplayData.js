import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom'
import Home from './Home'
import Student from './StudentDetails'
import ContactUs from './ContactUs'
import './Style.css'


function RouteCompo(){
    return(
        <>
        <BrowserRouter>
        <div className='nvlink'>
        <NavLink style={({isActive})=>({color: isActive ? "blue" : "red"})} to='/'>Home</NavLink>
        <NavLink style={({isActive})=>({color: isActive ? "blue" : "red"})} to='/Student'>StudentDetails</NavLink>
        <NavLink style={({isActive})=>({color: isActive ? "blue" : "red"})} to='/Contact'>ContactUs</NavLink>
        </div>

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Student' element={<Student />} />
            <Route path='/Contact' element={<ContactUs />} />
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default RouteCompo