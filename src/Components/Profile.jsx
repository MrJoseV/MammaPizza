

const Profile = (token) => {
    {
        if (token=false) {
            return <>
            <li class="nav-item">
                <a class="nav-link" href="#">🔓 Profile</a>
            </li>      
            <li class="nav-item">
                <a class="nav-link" href="#"> 🔒 Logout</a>
            </li>
            </>
         
        }
        return<>
        <li class="nav-item">
            <a class="nav-link" href="#">🔐 Login</a>   
        </li>      
        <li class="nav-item">
            <a class="nav-link" href="#">🔐 Register</a>
        </li>
        </> 
        
      }
      
}

export default Profile
