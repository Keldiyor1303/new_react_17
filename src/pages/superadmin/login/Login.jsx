import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosInstance } from "../../../config";
import { AuthContext } from "../../../context/AuthContext";
import './login.css';
import jwtDecode from "jwt-decode";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPasword] = useState("");
    const history = useHistory();
    const { dispatch, user: currentUser } = useContext(AuthContext);

    useEffect(() => {
        // token ichidan rolni ajratib olish
        let role = "";
        if (currentUser) {
            const token = jwtDecode(currentUser);
            // console.log(JSON.parse(token?.supperAdmin));
            role = JSON.parse(token?.supperAdmin).userRoles[0].systemName;
            console.log(role);
            if (role === "base_admin") {
                // history.push("/super_base_admin");
                history.push("/super_base_admin_tashkilot-qushish");
            }
        }
    }, [currentUser]);

    const submitHandler = async () => {
        if (username !== "" && password !== "") {
            dispatch({ type: "LOGIN_START" });

            axiosInstance.post("auth/login", {
                username: username,
                password: password
            })
                // .then(response => response.json())
                .then(res => {
                    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
                    // window.location.replace("/super_base_admin");
                    console.log("salom");
                    history.push("/super_base_admin");
                })
                .catch(err => {
                    console.log(err.response);
                    if (err.response.status === 400) {
                        dispatch({ type: 'LOGIN_FAILURE', payload: "Username (email) yoki parol xato kiritilgan" });
                        document.querySelector('.error').textContent = "Username (email) yoki parol xato kiritilgan";
                        setTimeout(() => {
                            document.querySelector('.error').textContent = "";
                        }, 2000);
                    }
                })
        } else {
            document.querySelector('.error').textContent = "Maydonlar to'ldirilishi shart";
            setTimeout(() => {
                document.querySelector('.error').textContent = "";
            }, 2000);
        }
    }

    const keyDown = (e) => {
        // console.log(e);
        if (e.code === "Enter") {
            submitHandler();
        }
    }

    return (
        <div className="login12">
            <div className="screen">
                <div className="screen__content">
                    <form className="login">
                        <div className="login__field">
                            <i className="login__icon fas fa-user"></i>
                            <input
                                type="text"
                                className="login__input"
                                placeholder="User name / Email"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                onKeyDown={keyDown}
                            />
                        </div>
                        <div className="login__field mb-4">
                            <i className="login__icon fas fa-lock"></i>
                            <input
                                type="password"
                                className="login__input"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPasword(e.target.value)}
                                onKeyDown={keyDown}
                            />
                        </div>
                        <span className="error"></span>
                        <button type="button" className="button login__submit mt-0 loginBtn" onClick={submitHandler}>
                            <span className="button__text">Log In Now</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>
                    </form>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
        </div>
    )
}