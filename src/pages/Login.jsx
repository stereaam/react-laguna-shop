import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Google} from '../assets/icons/google.svg'
import {ReactComponent as HomeIcon} from '../assets/icons/home.svg'
import './Login.css'
import {connect} from 'react-redux'
import {loginUser} from '../redux/actions/user'

class Login extends React.Component {

    componentDidUpdate(prevProps){
        if( this.props.userData !== prevProps.userData){
            this.props.history.push('/')
        }
    }
    
    render(){
        const {signInWithGoogle} = this.props
        return (
            <div className="login-page">
                <Link to='/'>
                    <button className="hover-zoom btn btn-outline-light d-flex align-items-center mb-5">
                        <HomeIcon/>
                        <span className="m-3">Take me back Home</span>
                    </button>
                </Link>
                <h1>Login</h1>
                <p><em>Please choose your provider below:</em></p>
                <button className="hover-zoom btn btn-outline-light d-flex align-items-center" onClick={signInWithGoogle}>
                    <Google/>
                    <span className="text-nowrap m-3">Login with Google</span>
                </button>   
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userData : state.user.data
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        signInWithGoogle: () => dispatch(loginUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
