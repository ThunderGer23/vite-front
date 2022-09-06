import {Link} from 'react-router-dom'
function NavBar() {
    return ( 
        <>
        <ul className='nav nav-tabs' id="navId" role="tablist">
                <li className='nav-item'><Link className='nav-link' to="/">Login</Link> </li>
                <li className='nav-item'><Link className='nav-link' to="/fotgotpass"> Fotgot password</Link></li>
                <li className='nav-item'><Link className='nav-link' to="/register">Register</Link> </li>
                <li className='nav-item'><Link className='nav-link' to="/profile">Profile</Link> </li>
                <li className='nav-item'><Link className='nav-link' to="/documentlist">Document List</Link> </li>
                <li className='nav-item'><Link className='nav-link' to="/documentdetails">Document Details</Link> </li>
                <li className='nav-item'><Link className='nav-link' to="/about">About Us</Link> </li>
        </ul>
                
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="tab1Id" role="tabpanel"></div>
            <div class="tab-pane fade" id="tab2Id" role="tabpanel"></div>
            <div class="tab-pane fade" id="tab3Id" role="tabpanel"></div>
            <div class="tab-pane fade" id="tab4Id" role="tabpanel"></div>
            <div class="tab-pane fade" id="tab5Id" role="tabpanel"></div>
        </div>
        
        <script>
            var triggerEl = document.querySelector('#navId a')
            bootstrap.Tab.getInstance(triggerEl).show() // Select tab by name
        </script>
        </>
        
     );
}

export default NavBar;