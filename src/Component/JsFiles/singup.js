import React from "react";
import '../CssFiles/Signup.css'
import { Link } from "react-router-dom";
import {FaGithub, FaFacebook, FaGoogle, FaLinkedin} from 'react-icons/fa'


const Sigup = (props) => {

    const LoginTrigger = props.ChangeLoginTrigger
    return (
        <center>
            <div id="MainSigupContainer">
                <div className="Sub_MainContainer_Sigup">
                    <div className="Sigup_Button_Content">
                        <div className="Sub_Signup_Button_Content">
                            <h1>Welcome Back!</h1>
                            <p>Excepteur magna laborum cillum nostrud ullamco laboris pariatur ipsum velit magna labore.</p>
                            <div className="Login_Button" onClick={LoginTrigger}>
                                Login
                            </div>
                        </div>
                    </div>

                    
                    <div className="Sigup_Form">
                    <div className="Sub_Signup_Form">
                            <div className="Signup_Form_Text">
                                Sign Up
                            </div>
                            <div className="Signup_Form_Icons">
                                <div className="Signup_Form_Icon">
                                    <div className="Sub_Signup_Form_Icons">
                                        <div className="Signup_Google"><a href="#" ><FaGoogle className="Icons_Signup"  /> </a> </div>
                                        <div className="Signup_Facebook"><a href="#" ><FaFacebook className="Icons_Signup"  /> </a> </div>
                                        <div className="Signup_GitHub"><a href="#" ><FaGithub className="Icons_Signup"  /> </a> </div>
                                        <div className="Signup_Linkdin"><a href="#" ><FaLinkedin className="Icons_Signup"  /> </a> </div>
                                    </div>
                                </div>

                                <form className="Signup_Form_form">
                                <label>or use your email & password</label>
                                <input type="text" placeholder="Name"/>
                                <input type="email" placeholder="Email"/>
                                <input type="password" placeholder="Password" />
                                <label className="Form_Lebal">If you have already account</label>
                                <div className="Form_Signup_Button">Sing Up</div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </center>
    )
}

export default Sigup