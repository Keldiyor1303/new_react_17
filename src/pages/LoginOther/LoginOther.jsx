import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { axiosInstance } from "../../config";
import jwtDecode from "jwt-decode";
import { AuthContext } from "../../context/AuthContext";
import './loginOther.css';
import axios from 'axios';
import { Alert } from '../../component/alert/Alert';
import "aos/dist/aos.css";
import Partcl from "../../component/particlas/Particlas";

export default function LoginOther() {
    const { dispatch } = useContext(AuthContext);
    const [workPlace, setWorkPlace] = useState([]);
    const [userRoles, setUserRoles] = useState([]);
    const history = useHistory();
    const [alert1, setAlert] = useState({ open: false, text: "", color: "" });
    const [token, setToken] = useState([]);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        let code = params.get('code');

        if (code) {
            axiosInstance.post("auth/loginOneId", {
                code: code
            })
                .then(res => {
                    setToken(res.data);
                    const token1 = jwtDecode(res.data);
                    let access_token = token1.access_token;
                    let roleBool = JSON.parse(token1?.supperAdmin)?.userRoles?.length;
                    if (roleBool === 0 && JSON.parse(token1.workPlaces)?.length === 0) {
                        Alert(setAlert, "warning", "Sizda hozircha hech qanday rol mavjud emas")
                        axios.post(`https://sso.egov.uz/sso/oauth/Authorization.do/?grant_type=one_log_out&client_id=new_d-doc_uz&client_secret=CPi8Y3SatfyeGwpT5AL7bc9q&access_token=${encodeURIComponent(access_token)}&scope=new_d-doc_uz`)
                            .then(res => {
                                // console.log(res.data);
                            })
                            .catch(err => {
                                console.log(err.response);
                            })
                        history.push("/");
                    } else {
                        let d = JSON.parse(token1?.supperAdmin).userRoles;
                        history.push('/');
                        if (JSON.parse(token1.workPlaces).length > 0 || d.length > 0) {
                            setUserRoles(JSON.parse(token1?.supperAdmin).userRoles);
                            setWorkPlace(JSON.parse(token1.workPlaces));
                        } else {
                            Alert(setAlert, 'warning', "Sizda hozircha hech qanday ish stoli mavjud emas");
                            axios.post(`https://sso.egov.uz/sso/oauth/Authorization.do/?grant_type=one_log_out&client_id=new_d-doc_uz&client_secret=CPi8Y3SatfyeGwpT5AL7bc9q&access_token=${encodeURIComponent(access_token)}&scope=new_d-doc_uz`)
                                .then(res => {
                                    // console.log(res.data);
                                })
                                .catch(err => {
                                    console.log(err.response);
                                })
                        }
                    }
                })
                .catch(err => {
                    const token = jwtDecode(err.response?.data);
                    let access_token = token.access_token;
                    Alert(setAlert, 'warning', "Hech qanday foydalanuvchi topilmadi");
                    axios.post(`https://sso.egov.uz/sso/oauth/Authorization.do/?grant_type=one_log_out&client_id=new_d-doc_uz&client_secret=CPi8Y3SatfyeGwpT5AL7bc9q&access_token=${encodeURIComponent(access_token)}&scope=new_d-doc_uz`)
                        .then(res => {
                            // console.log(res.data);
                        })
                        .catch(err => {
                            // console.log(err.response);
                        })
                    history.push("/");
                })
        }
    }, [history])

    const ishStoliKirish = (dat) => {
        if (dat?.userRoles?.length > 0) {
            dispatch({ type: "LOGIN_SUCCESS", payload: token });
            localStorage.setItem("ids", JSON.stringify(dat.id))
            history.push("/sahifa/asosiy");
        }
    }

    const UserRolesKirish = (dat) => {
        if (dat?.systemName === "admin") {
            dispatch({ type: "LOGIN_SUCCESS", payload: token });
            history.push("/super_admin_elektron-kitob");
        }
    }

    // qushimcha
    const EnterPage = async (e) => {
        e.preventDefault();
        let seria = document.querySelector('.seria').value.toUpperCase();

        try {
            const res = await axiosInstance.get(`auth/login/withOutOneId/${seria}`);
            setToken(res.data);
            const token1 = jwtDecode(res.data);
            setUserRoles(JSON.parse(token1?.supperAdmin).userRoles);
            setWorkPlace(JSON.parse(token1.workPlaces));
        } catch (error) {
            console.log(error.response);
        }
    }

    const othername = () => {
        var input = document.getElementById("userInput").value;
    }

    return (
        <>
            {workPlace.length > 0 || userRoles.length > 0 ? (
                <>
                    <div className="bg-image1">
                        <img src="/img/original.png" alt="" />
                    </div>
                    <div className="bg-text">
                        <div className="links">
                            <ul>
                                {workPlace?.length > 0 && workPlace?.map((dat, index) => (
                                    <li key={index} onClick={() => ishStoliKirish(dat)} data-aos="fade-up"
                                        data-aos-duration='4000' data-aos-delay="2000">Ish Stoli#{dat?.id}</li>
                                ))}
                            </ul>
                            <ul>
                                {userRoles?.length > 0 && userRoles?.map((dat, index) => (
                                    <li key={index} onClick={() => UserRolesKirish(dat)} data-aos="fade-up"
                                        data-aos-duration='4000' data-aos-delay="2000">{dat?.systemName}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </>
            ) : (
                <div id={"particles-js"}>
                    <Partcl />
                    <div className="animated bounceInDown">
                        <div className="contaidner">
                            <span className="error animated" id="msg" />
                            <form id="form" onSubmit={EnterPage} className="box">
                                <h4>
                                    <img src="./assets/gerb.png" width="100" alt={"GERB UZBEKISTAN"} />
                                </h4>
                                <span>Xush kelibsiz</span>
                                <h3>Idoralararo ijro intizomi <br/> axborot tizimi</h3>
                                <a href="https://sso.egov.uz/sso/oauth/Authorization.do?response_type=one_code&client_id=new_d-doc_uz&redirect_uri=http://www.new.d-doc.uz&scope=new_d-doc_uz&state=testState">
                                    <button type={'button'} className={'btn1'}>Kirish</button>
                                </a>
                                <div className="form-footer">
                                    <input
                                        type="text"
                                        className={'seria'}
                                        placeholder="Pasport seriyani kiriting"
                                        id="userInput"
                                    />
                                    <button className="btn2" onClick={othername}>One id siz kirish</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="message-icon">
                        <i className="fa-solid fa-comment-dots" />
                    </div>

                    <div className="footer">
                        Версия 2.0 © Dariko LTD. 2021-2022
                    </div>
                    {alert1.open && (
                        <div className={`alert alert-${alert1.color} alertNotice alert-styled-left alert-dismissible`}>
                            <span className="font-weight-semibold">{alert1.text}</span>
                        </div>
                    )}
                </div>
            )}
        </>
    )
}