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
            <a class="nav-link" href="/login">🔐 Login</a>   
        </li>      
        <li class="nav-item">
            <a class="nav-link" href="/registro">🔐 Register</a>
        </li>
        </>        
      }     
}

export default Profile
