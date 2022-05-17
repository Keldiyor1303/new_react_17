import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { axiosInstance } from '../../../config';
import { AuthContext } from '../../../context/AuthContext';
import './homeContent.css';

export default function HomeContent({ stompClient }) {
    const { user: currentUser } = useContext(AuthContext);
    const [count, setCount] = useState({});
    const [tab, setTab] = useState(1);

    useEffect(() => {
        try {
            const getData = async () => {
                const res = await axiosInstance.get("/mainPage/taskCount/" + Number(localStorage.getItem('ids')), {
                    headers: {
                        Authorization: "Bearer " + currentUser
                    }
                })
                // console.log(res.data);
                setCount(res.data);
            }
            getData();
        } catch (error) {
            console.log(error.response);
        }
    }, []);

    // const send1 = () => {
    //     if (stompClient) {
    //         stompClient.send("/app/chat", {}, JSON.stringify({ name: "Hikmat", age: 27 }));
    //     } else {
    //         console.log("false");
    //     }
    // }

    return (
        <div className="content mb-5">
            <div className="row" style={{ margin: "15px 5px" }}>
                <div className="col-lg-3">
                    <div className="card cardHome">
                        <div className="card-header header-elements-inline bg-primary">
                            <h4 className="card-title text-white text-center fw-bold w-100 text-uppercase">Mening
                                Vazifalarim</h4>
                        </div>

                        {/* <button type='button' onClick={send1}>Send1</button> */}

                        <div className="card-body">
                            <table className="table table-bordered table-striped table-hover table-responsive">
                                <tbody className='border-0'>
                                    <tr>
                                        <th className="TableLink" style={{ width: "98%" }}>
                                            <Link to="/vazifalar_barchasi">
                                                Barchasi
                                            </Link>
                                            {/* <a href="#1">Barchasi</a> */}
                                        </th>
                                        <th className="TableLink"
                                            style={{ width: "2%", textAlign: "center", fontSize: "15px" }}>
                                            {count?.allMyTask}
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="TableLink" style={{ width: "98%" }}>
                                            <Link to="/vazifalar_yangi">
                                                Yangi
                                            </Link>
                                        </th>
                                        <th className="TableLink"
                                            style={{ width: "2%", textAlign: "center", fontSize: "15px" }}>
                                            {count?.newTaskCount}
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="TableLink" style={{ width: "98%" }}>
                                            <Link to="/vazifalar_jarayonda">
                                                Jarayonda
                                            </Link>
                                        </th>
                                        <th className="TableLink"
                                            style={{ width: "2%", textAlign: "center", fontSize: "15px" }}>
                                            {count?.inProcessTaskCount}
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="TableLink" style={{ width: "98%" }}>
                                            <Link to="/vazifalar_nazoratda">
                                                Nazoratda
                                            </Link>
                                        </th>
                                        <th className="TableLink"
                                            style={{ width: "2%", textAlign: "center", fontSize: "15px" }}>
                                            {count?.inControlTaskCount}
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="card cardHome">
                        <div className="card-header header-elements-inline bg-primary">
                            <h4 className="card-title text-white text-center fw-bold w-100 text-uppercase">
                                Yaqinlashmoqda</h4>
                        </div>

                        <div className="card-body">
                            <table className="table table-bordered table-striped table-hover Tab">
                                <tbody className='border-0'>
                                    <tr>
                                        <th className="TableLink" style={{ width: "98%" }}>
                                            <Link to="/yaqinlashmoqda_barchasi">
                                                Barchasi
                                            </Link>
                                        </th>
                                        <th className="TableLink"
                                            style={{ width: "2%", textAlign: "center", fontSize: "15px" }}>
                                            {count?.allNear}
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="TableLink" style={{ width: "98%" }}>
                                            <Link to="/yaqinlashmoqda_1kun-qoldi">
                                                1 kun qoldi
                                            </Link>
                                        </th>
                                        <th className="TableLink"
                                            style={{ width: "2%", textAlign: "center", fontSize: "15px" }}>
                                            {count?.remainOneDayTask}
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="TableLink" style={{ width: "98%" }}>
                                            <Link to="/yaqinlashmoqda_2-3kun-qoldi">
                                                2-3 kun qoldi
                                            </Link>
                                        </th>
                                        <th className="TableLink"
                                            style={{ width: "2%", textAlign: "center", fontSize: "15px" }}>
                                            {count?.remainTwoThreeDayTask}
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="TableLink" style={{ width: "98%" }}>
                                            <Link to="/yaqinlashmoqda_4~kun-qoldi">
                                                4 (~) kun qoldi
                                            </Link>
                                        </th>
                                        <th className="TableLink"
                                            style={{ width: "2%", textAlign: "center", fontSize: "15px" }}>
                                            {count?.remainMoreThanFourTask}
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="card cardHome">
                        <div className="card-header header-elements-inline bg-primary">
                            <h4 className="card-title text-white text-center fw-bold w-100 text-uppercase">
                                Bajarilmagan</h4>
                        </div>

                        <div className="card-body">
                            <table className="table table-bordered table-striped table-hover Tab">
                                <tbody className='border-0'>
                                    <tr>
                                        <th className="TableLink" style={{ width: "98%" }}>
                                            <Link to="/bajarilmagan_barchasi">
                                                Barchasi
                                            </Link>
                                        </th>
                                        <th className="TableLink" style={{ width: "2%", textAlign: "center", fontSize: "15px" }}>
                                            {count?.allLate}
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="TableLink" style={{ width: "98%" }}>
                                            <Link to="/bajarilmagan_1kun-kechikkan">
                                                1 kun kechikkan
                                            </Link>
                                        </th>
                                        <th className="TableLink" style={{ width: "2%", textAlign: "center", fontSize: "15px" }}>
                                            {count?.lateOneDayTask}
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="TableLink" style={{ width: "98%" }}>
                                            <Link to="/bajarilmagan_2-3kun-kechikkan">
                                                2-3 kun kechikkan
                                            </Link>
                                        </th>
                                        <th className="TableLink" style={{ width: "2%", textAlign: "center", fontSize: "15px" }}>
                                            {count?.lateTwoThreeDayTask}
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="TableLink" style={{ width: "98%" }}>
                                            <Link to="/bajarilmagan_4~kun-kechikkan">
                                                4 (~) kun kechikkan
                                            </Link>
                                        </th>
                                        <th className="TableLink" style={{ width: "2%", textAlign: "center", fontSize: "15px" }}>
                                            {count?.lateMoreThanFourDayTask}
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card cardHome">
                        <div className="card-header header-elements-inline bg-primary">
                            <h4 className="card-title text-white text-center fw-bold w-100 text-uppercase">
                                Bajarilgan</h4>
                        </div>

                        <div className="card-body">
                            <table className="table table-bordered table-striped table-hover Tab">
                                <tbody className='border-0'>
                                    <tr>
                                        <th className="TableLink" style={{ width: "98%" }}>
                                            <Link to="/bajarilgan_barchasi">
                                                Barchasi
                                            </Link>
                                        </th>
                                        <th className="TableLink" style={{ width: "2%", textAlign: "center", fontSize: "15px" }}>
                                            {count?.allDone}
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="TableLink" style={{ width: "98%" }}>
                                            <Link to="/bajarilgan_bajarilganlar">
                                                Bajarilgan
                                            </Link>
                                        </th>
                                        <th className="TableLink" style={{ width: "2%", textAlign: "center", fontSize: "15px" }}>
                                            {count?.doneCount}
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="TableLink" style={{ width: "98%" }}>
                                            <Link to="/bajarilgan_kechiktirib-berilgan">
                                                Kechiktirib berilgan
                                            </Link>
                                        </th>
                                        <th className="TableLink" style={{ width: "2%", textAlign: "center", fontSize: "15px" }}>
                                            {count?.defferedDone}
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="TableLink">&nbsp;</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-12">
                <div className="card-body">
                    <ul className="d-flex justify-content-between nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink" style={{ textAlign: 'right' }}>
                        <span className={'text-light customTabLink d-flex align-items-center nav-link'}>Ish oqimimi sintaktikasi</span>
                        <div className={'d-flex'}>
                            <li className="nav-item" style={{ marginLeft: "30px" }}>
                                <div
                                    onClick={() => setTab(1)}
                                    className={`${tab === 1 && 'customTabLinkBg'} customTabLink d-flex align-items-center nav-link cursor-pointer`}>
                                    1A kartochkasi
                                </div>
                            </li>
                            <li className="nav-item">
                                <div
                                    onClick={() => setTab(2)}
                                    className={`${tab === 2 && 'customTabLinkBg'} customTabLink d-flex align-items-center nav-link cursor-pointer`}>
                                    2A kartochkasi
                                </div>
                            </li>
                            <li className="nav-item">
                                <div
                                    onClick={() => setTab(3)}
                                    className={`${tab === 3 && 'customTabLinkBg'} customTabLink d-flex align-items-center nav-link cursor-pointer`}>
                                    3A kartochkasi
                                </div>
                            </li>
                            <li className="nav-item">
                                <div
                                    onClick={() => setTab(4)}
                                    className={`${tab === 4 && 'customTabLinkBg'} customTabLink d-flex align-items-center nav-link`}>
                                    Standard Kartochkasi
                                </div>
                            </li>
                        </div>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="colored-tab1">
                            <div className="card">

                                <div className="card-body">
                                    {tab === 1 ? (
                                        <table className="table table-bordered table-hover">
                                            <thead className={"bg-dark text-light w-full"}>
                                                <tr>
                                                    <th style={{ width: '38%', wordWrap: 'break-word' }} scope="col" >1A Nazoratc kartochkasi</th>
                                                    <th style={{ width: '12%' }} scope="col">Jami</th>
                                                    <th style={{ width: '12%' }} scope="col">Bajarilmagan</th>
                                                    <th style={{ width: '12%' }} scope="col">Muddati bor</th>
                                                    <th style={{ width: '12%' }} scope="col">Jarayonda</th>
                                                    <th style={{ width: '12%' }} scope="col">Bajarilgan</th>
                                                </tr>
                                            </thead>
                                            <tbody className={'noBorder'}>
                                                <tr className={'table-info'}>
                                                    <th>O'zbekiston respublikasidan kelgan xujjatlar</th>
                                                    <th>376</th>
                                                    <th>{Math.floor(Math.random() * 100)}</th>
                                                    <th>{Math.floor(Math.random() * 100)}</th>
                                                    <th>{Math.floor(Math.random() * 100)}</th>
                                                    <th>{Math.floor(Math.random() * 100)}</th>
                                                </tr>
                                                <tr>
                                                    <td>O'zbekiston prizidenti famrmoni</td>
                                                    <td>{Math.floor(Math.random() * 80)}</td>
                                                    <td>{Math.floor(Math.random() * 80)}</td>
                                                    <td>{Math.floor(Math.random() * 80)}</td>
                                                    <td>{Math.floor(Math.random() * 80)}</td>
                                                    <td>{Math.floor(Math.random() * 80)}</td>
                                                </tr>
                                                <tr>
                                                    <td>O'zbekiston prizidenti qarorlari</td>
                                                    <td>{Math.floor(Math.random() * 80)}</td>
                                                    <td>{Math.floor(Math.random() * 80)}</td>
                                                    <td>{Math.floor(Math.random() * 80)}</td>
                                                    <td>{Math.floor(Math.random() * 80)}</td>
                                                    <td>{Math.floor(Math.random() * 80)}</td>
                                                </tr>
                                                <tr>
                                                    <td>O'zbekiston prizidenti farmoishlari</td>
                                                    <td>{Math.floor(Math.random() * 80)}</td>
                                                    <td>{Math.floor(Math.random() * 80)}</td>
                                                    <td>{Math.floor(Math.random() * 80)}</td>
                                                    <td>{Math.floor(Math.random() * 80)}</td>
                                                    <td>{Math.floor(Math.random() * 80)}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    ) : tab === 2 ? (
                                        <table className="table table-bordered table-hover">
                                            <thead className={"bg-dark text-light w-full"}>
                                                <tr>
                                                    <th style={{ width: '38%', wordWrap: "break-word" }} scope="col">2A Nazoratc kartochkasi</th>
                                                    <th style={{ width: '12%' }} scope="col">Jami</th>
                                                    <th style={{ width: '12%' }} scope="col">Bajarilmagan</th>
                                                    <th style={{ width: '12%' }} scope="col">Muddati bor</th>
                                                    <th style={{ width: '12%' }} scope="col">Jarayonda</th>
                                                    <th style={{ width: '12%' }} scope="col">Bajarilgan</th>
                                                </tr>
                                            </thead>
                                            <tbody className={'noBorder'}>
                                                <tr className={'table-info'}>
                                                    <th>O'zbekiston respublikasidan kelgan xujjatlar</th>
                                                    <th>376</th>
                                                    <th>89</th>
                                                    <th>15</th>
                                                    <th>48</th>
                                                    <th>97</th>
                                                </tr>
                                                <tr>
                                                    <td>O'zbekiston prizidenti famrmoni</td>
                                                    <td>13</td>
                                                    <td>48</td>
                                                    <td>56</td>
                                                    <td>24</td>
                                                    <td>68</td>
                                                </tr>
                                                <tr>
                                                    <td>O'zbekiston prizidenti qarorlari</td>
                                                    <td>13</td>
                                                    <td>48</td>
                                                    <td>56</td>
                                                    <td>24</td>
                                                    <td>68</td>
                                                </tr>
                                                <tr>
                                                    <td>O'zbekiston prizidenti farmoishlari</td>
                                                    <td>13</td>
                                                    <td>48</td>
                                                    <td>56</td>
                                                    <td>24</td>
                                                    <td>68</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    ) : tab === 3 ? (
                                        <table className="table table-bordered table-hover">
                                            <thead className={"bg-dark text-light w-full"}>
                                                <tr>
                                                    <th style={{ width: '38%', wordWrap: "break-word" }} scope="col">3A Nazoratc kartochkasi</th>
                                                    <th style={{ width: '12%' }} scope="col">Jami</th>
                                                    <th style={{ width: '12%' }} scope="col">Bajarilmagan</th>
                                                    <th style={{ width: '12%' }} scope="col">Muddati bor</th>
                                                    <th style={{ width: '12%' }} scope="col">Jarayonda</th>
                                                    <th style={{ width: '12%' }} scope="col">Bajarilgan</th>
                                                </tr>
                                            </thead>
                                            <tbody className={'noBorder'}>
                                                <tr className={'table-info'}>
                                                    <th>O'zbekiston respublikasidan kelgan xujjatlar</th>
                                                    <th>376</th>
                                                    <th>89</th>
                                                    <th>15</th>
                                                    <th>48</th>
                                                    <th>97</th>
                                                </tr>
                                                <tr>
                                                    <td>O'zbekiston prizidenti famrmoni</td>
                                                    <td>13</td>
                                                    <td>48</td>
                                                    <td>56</td>
                                                    <td>24</td>
                                                    <td>68</td>
                                                </tr>
                                                <tr>
                                                    <td>O'zbekiston prizidenti qarorlari</td>
                                                    <td>13</td>
                                                    <td>48</td>
                                                    <td>56</td>
                                                    <td>24</td>
                                                    <td>68</td>
                                                </tr>
                                                <tr>
                                                    <td>O'zbekiston prizidenti farmoishlari</td>
                                                    <td>13</td>
                                                    <td>48</td>
                                                    <td>56</td>
                                                    <td>24</td>
                                                    <td>68</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    ) : (
                                        <table className="table table-bordered table-hover">
                                            <thead className={"bg-dark text-light w-full"}>
                                                <tr>
                                                    <th style={{ width: '38%', wordWrap: "break-word"  }} scope="col">4A Nazoratc kartochkasi</th>
                                                    <th style={{ width: '12%' }} scope="col">Jami</th>
                                                    <th style={{ width: '12%' }} scope="col">Bajarilmagan</th>
                                                    <th style={{ width: '12%' }} scope="col">Muddati bor</th>
                                                    <th style={{ width: '12%' }} scope="col">Jarayonda</th>
                                                    <th style={{ width: '12%' }} scope="col">Bajarilgan</th>
                                                </tr>
                                            </thead>
                                            <tbody className={'noBorder'}>
                                                <tr className={'table-info'}>
                                                    <th>O'zbekiston respublikasidan kelgan xujjatlar</th>
                                                    <th>376</th>
                                                    <th>89</th>
                                                    <th>15</th>
                                                    <th>48</th>
                                                    <th>97</th>
                                                </tr>
                                                <tr>
                                                    <td>O'zbekiston prizidenti famrmoni</td>
                                                    <td>13</td>
                                                    <td>48</td>
                                                    <td>56</td>
                                                    <td>24</td>
                                                    <td>68</td>
                                                </tr>
                                                <tr>
                                                    <td>O'zbekiston prizidenti qarorlari</td>
                                                    <td>13</td>
                                                    <td>48</td>
                                                    <td>56</td>
                                                    <td>24</td>
                                                    <td>68</td>
                                                </tr>
                                                <tr>
                                                    <td>O'zbekiston prizidenti farmoishlari</td>
                                                    <td>13</td>
                                                    <td>48</td>
                                                    <td>56</td>
                                                    <td>24</td>
                                                    <td>68</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}