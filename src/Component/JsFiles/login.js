import React, { useState } from "react";
import '../CssFiles/Login.css'
import {FaGithub, FaFacebook, FaGoogle, FaLinkedin} from 'react-icons/fa'



const Login = (props) => {
    const SignUpTrigger = props.ChangeSignUpTrigger


    return (
        <center>
            <div id="MainLoginContainer">
                <div className="Sub_MainContainer_Login">

                    <div className="Login_Form">
                        <div className="Sub_Login_Form">
                            <div className="Login_Form_Text">
                                Sign in
                            </div>
                            <div className="Login_Form_Icons">
                                <div className="Login_Form_Icon">
                                    <div className="Sub_Login_Form_Icons">
                                    <div className="Signup_Google"><a href="#" ><FaGoogle className="Icons_Signup"  /> </a> </div>
                                        <div className="Signup_Facebook"><a href="#" ><FaFacebook className="Icons_Signup"  /> </a> </div>
                                        <div className="Signup_GitHub"><a href="#" ><FaGithub className="Icons_Signup"  /> </a> </div>
                                        <div className="Signup_Linkdin"><a href="#" ><FaLinkedin className="Icons_Signup"  /> </a> </div>
                                     </div>
                                </div>

                                <form className="Login_Form_form">
                                <label>or use your email & Password</label>
                                <input type="email" placeholder="Email"/>
                                <input type="password" placeholder="Password" />
                                <label className="Form_Lebal">Forget Your Password!</label>
                                <div className="Form_Login_Button">Login</div>
                                </form>

                            </div>
                        </div>
                    </div>


                    <div className="Login_Button_Content">
                        <div className="Sub_Login_Button_Content">
                            <h1>Hello, Friend!</h1>
                            <p>Excepteur magna laborum cillum nostrud ullamco laboris pariatur ipsum velit magna labore.</p>
                            <div className="SignUp_Button" onClick={SignUpTrigger}>
                                Sign Up
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </center>
    )
}

export default Login