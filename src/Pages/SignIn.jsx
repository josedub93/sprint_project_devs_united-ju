import {loginWithGoogle, auth, logout} from "../firebase";
import { AppContext } from "../AppContext/AppContext";

function SignIn(){
return(
    <div>
          {user ? (
                <>
                    <div className='user-profile'>
                        <img className='user-profile-pic' src={user.photoURL} alt="photo" />
                        <p>Hola {user.displayName}</p>
                        <button onClick={logout}> Log Out</button>
                    </div>
                </>
            ) : (
                <button className='login-btn' onClick={loginWithGoogle}>Login con google</button>
            )}
    </div>
)
}
export default SignIn;