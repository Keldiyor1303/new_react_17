import { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Kiruvchi from './pages/kiruvchi/Kiruvchi';
import KengQidirish from './pages/kengQidirish/KengQidirish';
import Arxiv from './pages/arxiv/Arxiv';
import Sozlamalar from './pages/sozlamalar/Sozlamalar';
import SozlamalarAdmin from './pages/sozlamalarAdmin/sozlamalarAdmin';
import Kadrlar from './pages/kadrlar/Kadrlar';
import Shablonlar from './pages/shablonlar/Shablonlar';
import Jurnallar from './pages/jurnallar/Jurnallar';
import UmumiySozlamalar from './pages/umumiySozlamalar/UmumiySozlamalar';
import Monitoring from './pages/monitoring/Monitoring';
import Yangi from './pages/kiruvchi/yangi/Yangi';
import Resolutsiya from './pages/kiruvchi/resolutsiya/Resolutsiya';
import Bajarish from './pages/kiruvchi/bajarish/Bajarish';
import Nazorat from './pages/kiruvchi/nazorat/Nazorat';
import Kechiktirilgan from './pages/kiruvchi/kechiktirilgan/Kechiktirilgan'
import RadEtilgan from './pages/kiruvchi/radetilgan/RadEtilgan';
import Bajarilgan from './pages/kiruvchi/bajarilgan/Bajarilgan';
import NazoratdanOlish from './pages/kiruvchi/nazoratdanOlish/NazoratdanOlish';
import Korish from './pages/kiruvchi/resolutsiya/resolutionContent/korish/Korish';
import Ijro from './pages/kiruvchi/bajarish/bajarishContent/ijro/Ijro';
import YangiQushish from './pages/jurnallar/yangiQushish/YangiQushish';
import Faollar from './pages/jurnallar/faollar/Faollar';
import JurnallarArxiv from './pages/jurnallar/jurnallarArxiv/JurnallarArxiv';
import BarchasiDetail from './pages/jurnallar/jurnallarContent/barchasiDetail/BarchasiDetail';
import BarchasiTopshiriqlar from './pages/jurnallar/jurnallarContent/barchasiTopshiriqlar/BarchasiTopshiriqlar';
import ArxivDetail from './pages/jurnallar/jurnallarContent/arxivDetail/ArxivDetail';
import SozlamalarKorrespondent from './pages/sozlamalar/sozlamalarKorrespondent/SozlamalarKorrespondent';
import TaqdimFormasi from './pages/sozlamalar/taqdimFormasi/TaqdimFormasi';
import TezkorRezolut from './pages/sozlamalar/tezkorRezalut/TezkorRezolut';
import NazoratKartochkaMalumot from './pages/monitoring/nazoratKartochkaMalumot/NazoratKartochkaMalumot';
import NazoratKartochka from './pages/monitoring/nazoratKartochka/NazoratKartochka';
import Test from './pages/monitoring/test/Test';
import Svodka from './pages/monitoring/svodka/Svodka';
import A1 from './pages/monitoring/1a/1a';
import A2 from './pages/monitoring/2a/A2';
import Vm2a from './pages/monitoring/vm2a/Vm2a';
import SvodakaNew from './pages/monitoring/svodakaNew/SvodakaNew';
import MonitoringKiruvchi from './pages/monitoring/monitoringKiruvchi/MonitoringKiruvchi';
import FuqaroMurojati from './pages/fuqaroMurojati/FuqaroMurojati';
import FuqaroMurojatYangi from './pages/fuqaroMurojati/FuqaroMurojatYangi/FuqaroMurojatYangi';
import Xomaki from './pages/fuqaroMurojati/xomaki/Xomaki';
import FuqaroRezalutsiya from './pages/fuqaroMurojati/fuqaroRezalutsiya/FuqaroRezalutsiya';
import FuqaroMurojatiBajarish from './pages/fuqaroMurojati/fuqaroMurojatiBajarish/FuqaroMurojatiBajarish';
import FuqaroNazorat from './pages/fuqaroMurojati/fuqaroNazorat/FuqaroNazorat';
import FuqaroKechiktirilgan from './pages/fuqaroMurojati/fuqaroKechiktirilgan/FuqaroKechiktirilgan';
import FuqaroBajarilgan from './pages/fuqaroMurojati/fuqaroBajarilgan/FuqaroBajarilgan';
import Yuborilgan from './pages/fuqaroMurojati/yuborilgan/Yuborilgan';
import FuqaroNazoratdanOlish from './pages/fuqaroMurojati/nazoratdanOlish/NazoratdanOlish';
import FuqaroRezalutsiyaKurish from './pages/fuqaroMurojati/fuqaroRezalutsiyaKurish/FuqaroRezalutsiyaKurish';
// admin role
import Admin from './pages/superadmin/admin/Admin';
import BaseAdmin from './pages/superadmin/baseAdmin/BaseAdmin';
import TashkiliyTuzilma from './pages/umumiySozlamalar/tashkiliyTuzilma/TashkiliyTuzilma';
import ModulSozlamalari from './pages/umumiySozlamalar/modulSozlamalari/ModulSozlamalari';
import FoydalanuvchiSozlamalari from './pages/umumiySozlamalar/foydalanuvchiSozlamalari/FoydalanuvchiSozlamalari';
import BaseSozlamalar from './pages/superadmin/baseAdmin/baseSozlamalar/BaseSozlamalar';
import BaseSozKorrespandent from './pages/superadmin/baseAdmin/baseSozlamalar/baseSozKorrespandent/BaseSozKorrespandent';
import BaseSozTaqdimForma from './pages/superadmin/baseAdmin/baseSozlamalar/baseSozTaqdimForma/BaseSozTaqdimForma';
import BaseSozJurnallar from './pages/superadmin/baseAdmin/baseSozlamalar/baseSozJurnallar/BaseSozJurnallar';
import BaseSozRezalutsiya from './pages/superadmin/baseAdmin/baseSozlamalar/baseSozRezalutsiya/BaseSozRezalutsiya';
import AdminElektronKitob from './pages/superadmin/admin/adminElektronKitob/AdminElektronKitob';
import AdminBarchasi from './pages/superadmin/admin/adminElektronKitob/AdminBarchasi/AdminBarchasi';
import AdminFaollar from './pages/superadmin/admin/adminElektronKitob/adminFaollar/AdminFaollar';
import AdminArxiv from './pages/superadmin/admin/adminElektronKitob/adminArxiv/AdminArxiv';
import Rollar from './pages/superadmin/baseAdmin/rollar/Rollar';
import Hudud from './pages/superadmin/baseAdmin/hudud/Hudud';
import Murojaat from './pages/superadmin/baseAdmin/murojaat/Murojaat';
import Xabarnoma from './pages/superadmin/baseAdmin/xabarnoma/Xabarnoma';
import TashkilotQushish from './pages/superadmin/baseAdmin/tashkilotQushish/TashkilotQushish';
import Modullar from './pages/superadmin/baseAdmin/modullar/Modullar';
import XodimRollari from './pages/superadmin/baseAdmin/rollar/xodimRollari/XodimRollari';
import BoshqaRollar from './pages/superadmin/baseAdmin/rollar/boshqaRollar/BoshqaRollar';
import TashkilotKurish from './pages/superadmin/baseAdmin/tashkilotQushish/tashkilotKurish/TashkilotKurish';
import Administratsiya from './pages/superadmin/baseAdmin/tashkilotQushish/tashkilotKurish/administratsiya/Administratsiya';
import ModulSozlama from './pages/superadmin/baseAdmin/tashkilotQushish/tashkilotKurish/modulSozlama/ModulSozlama';
import Viloyatlar from './pages/superadmin/baseAdmin/hudud/viloyatlar/Viloyatlar';
import Shahartuman from './pages/superadmin/baseAdmin/hudud/shahartuman/Shahartuman';
import FuqaroSavollari from './pages/superadmin/baseAdmin/murojaat/fuqaroSavollari/FuqaroSavollari';
import FuqaroJavoblari from './pages/superadmin/baseAdmin/murojaat/fuqaroJavoblari/FuqaroJavoblari';
import DeteilXodim from './pages/kadrlar/deteilXodim/DeteilXodim';
import NazoratYuklash from './pages/kiruvchi/bajarish/bajarishContent/ijro/NazoratYuklash';
import Sozlama from './pages/kiruvchi/resolutsiya/resolutionContent/sozlama/Sozlama';
import YangiSozlama from './pages/kiruvchi/yangi/yangiContent/yangiSozlama/YangiSozlama';
import SozAdminLavozim from './pages/sozlamalarAdmin/sozAdminLavozim/SozAdminLavozim';
import SozAdminFoydalanuvchi from './pages/sozlamalarAdmin/sozAdminFoydalanuvchi/SozAdminFoydalanuvchi';
import SozAdminIshStoli from './pages/sozlamalarAdmin/sozAdminIshStoli/SozdminIshStoli';
import SozAdminFishka from './pages/sozlamalarAdmin/sozAdminFishka/SozAdminFishka';
import SozAdminBanner from './pages/sozlamalarAdmin/sozAdminBanner/SozAdminBanner';
import SozAdminQarorBanner from './pages/sozlamalarAdmin/sozAdminQarorBanner/SozAdminQarorBanner';
import AdminKurish from './pages/superadmin/admin/adminElektronKitob/adminKurish/AdminKurish';
import AdminTopshiriq from './pages/superadmin/admin/adminElektronKitob/adminTopshiriq/AdminTopshiriq';
import AdminLavozim from './pages/superadmin/admin/adminContent/adminLavozim/AdminLavozim';
import AdminFoydalanuvchi from './pages/superadmin/admin/adminContent/adminFoydalanuvchi/AdminFoydalanuvchi';
import AdminIshStoli from './pages/superadmin/admin/adminContent/adminIshStoli/AdminIshStoli';
import AdminFishka from './pages/superadmin/admin/adminContent/adminFishka/AdminFishka';
import AdminAsosiyBanner from './pages/superadmin/admin/adminContent/adminAsosiyBanner/AdminAsosiyBanner';
import AdminBuyruqBanner from './pages/superadmin/admin/adminContent/adminBuyruqBanner/AdminBuyruqBanner';
import AdminSozlamalar from './pages/superadmin/admin/adminSozlamalar/AdminSozlamalar';
import Vazifalarim from './pages/Home/homeContent/vazifalarim/Vazifalarim';
import VazifalarYangi from './pages/Home/homeContent/vazifalarim/vazifalarYangi/VazifalarYangi';
import VazifalarJarayonda from './pages/Home/homeContent/vazifalarim/vazifalarJarayonda/VazifalarJarayonda';
import VazifalarNazoratda from './pages/Home/homeContent/vazifalarim/vazifalarNazoratda/VazifalarNazoratda';
import Yaqinlashmoqda1kunQoldi from './pages/Home/homeContent/yaqinlashmoqda/yaqinlashmoqda1kunQoldi/Yaqinlashmoqda1kunQoldi';
import Yaqin23kunQoldi from './pages/Home/homeContent/yaqinlashmoqda/yaqinlashmoqda23kunQoldi/Yaqin23kunQoldi';
import Yaqin4kunQoldi from './pages/Home/homeContent/yaqinlashmoqda/yaqinlashmoqda4kunQoldi/Yaqin4kunQoldi';
import Yaqinlashmoqda from './pages/Home/homeContent/yaqinlashmoqda/Yaqinlashmoqda';
import Bajarilmagan from './pages/Home/homeContent/bajarilmagan/Bajarilmagan';
import Bajarilmagan1kunKechikkan from './pages/Home/homeContent/bajarilmagan/bajarilmagan1kunKechikkan/Bajarilmagan1kunKechikkan';
import Bajarilmagan23kunKechikkan from './pages/Home/homeContent/bajarilmagan/bajarilmagan23kunKechikkan/Bajarilmagan23kunKechikkan';
import Bajarilmagan4kunKechikkan from './pages/Home/homeContent/bajarilmagan/bajarilmagan4kunKechikkan/Bajarilmagan4kunKechikkan';
import BajarilganB from './pages/Home/homeContent/bajarilgan/Bajarilgan';
import BajBajarilgan from './pages/Home/homeContent/bajarilgan/bajBajarilgan/BajBajarilgan';
import BajarilganKechBerilgan from './pages/Home/homeContent/bajarilgan/bajarilganKechBerilgan/BajarilganKechBerilgan';
import Login from './pages/superadmin/login/Login';
import { AuthContext } from './context/AuthContext';
import jwt_decode from 'jwt-decode';
import LoginOther from './pages/LoginOther/LoginOther';
import Umumlashtiruvchi from './pages/kiruvchi/umumlashtiruvchi/Umumlashtiruvchi';
import MalumotUchun from './pages/kiruvchi/malumotUchun/MalumotUchun';
import JurnallarArxivKurish from './pages/jurnallar/jurnallarArxiv/jurnallarArxivKurish/JurnallarArxivKurish';
import YopilganJurnallar from './pages/jurnallar/jurnallarContent/yopilganJurnallar/YopilganJurnallar';
import AdminArxivKurish from './pages/superadmin/admin/adminElektronKitob/adminArxiv/adminArxivKurish/AdminArxivKurish';
import KartochkaQushish from './pages/superadmin/baseAdmin/kartochkaQushish/KartochkaQushish';
import UmumiyPaketlar from './pages/superadmin/admin/adminPaketlar/umumiyPaketlar/UmumiyPaketlar';
import MavjudPaketlar from './pages/superadmin/admin/adminPaketlar/mavjudPaketlar/MavjudPaketlar';
import { over } from 'stompjs';
import SockJS from 'sockjs-client';
import All10Content from './pages/superadmin/all10Content/All10Content';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { axiosInstance } from "./config";
import CardSozlama from "./pages/superadmin/baseAdmin/tashkilotQushish/tashkilotKurish/cardSozlama/CardSozlama";
import UmumiyTashkilotlar from "./pages/superadmin/admin/adminTashkilotlar/umumiyTashkilotlar/umumiyTashkilotlar";
import MavjudTashkilotlar from "./pages/superadmin/admin/adminTashkilotlar/mavjudTashkilotlar/mavjudTashkilotlar";
import MavjudTashkilotlarOfficeMeneger from "./pages/superadmin/officeManager/movjudDocument/mavjudTashkilotlar/mavjudTashkilotlar";
import MavjudPaketlarOfficeMeneger from "./pages/superadmin/officeManager/movjudDocument/mavjudPaketlar/mavjudPaketlar";
import SvodkaQVC from "./pages/monitoring/svodkaQVC/SvodkaQVC";
import Faq from "./pages/umumiyMalumotlar/Faq";
import { url } from "./config";
import { toast, ToastContainer } from "react-toastify";
import NotFound500 from './pages/notfound500/Notfound500';
AOS.init();

let roles = [
  "boss_1",
  "boss_2",
  "boss_3",
  "chief_of_group",
  "controller",
  "head_of_department",
  "human_resources",
  "office_manager",
  "employee",
  "security",
];

function App() {

  ; (async () => {
    await Notification.requestPermission()
  })()

  let stompClient;
  const { user: currentUser } = useContext(AuthContext);

  const connect = () => {
    let Sock = new SockJS('http://192.168.0.190:8080/ws');
    stompClient = over(Sock);
    stompClient.connect({}, (frame) => {
      stompClient.subscribe("/d-doc/private", (message) => {
        const notify = JSON.parse(message.body)

        notify.map(item => {
          if (item.workPlaceId === JSON.parse(localStorage.getItem('ids'))) {
            toast.info(<div style={{ color: '#fff' }}>{item.message}</div>, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'colored'
            });
          }
        })
      });

    // useEffect(() => {
    //     setLoaded(false)
    //
    //     if (!loaded) {
    //         // console.log(param.workPlaceId)
    //         param.forEach((item,index)=> {
    //             if (localStorage.getItem('ids') === item.workPlaceId) {
    //                 console.log(item.notifications)
    //             }
    //         })
    //
    //
    //         const result = param.filter(index => index.workPlaceId === 27)
    //         setResponse(result)
    //     }
    // }, [param])
      stompClient.subscribe('/d-doc/public', (e) => {
        const dummy = JSON.parse(e.body)
        const ids = JSON.parse(localStorage.getItem('ids'))

        for (let i = 0; i < dummy.length; i++) {
          if (ids === dummy[i].workPlaceId) {
            // console.log(dummy[i].notifications)
            dummy[i].notifications.map((item, index) => {
              toast.info(<div>
                <Link style={{ color: '#fff' }} to={index == 0 ? 'http://www.new.d-doc.uz/vazifalar_barchasi' :
                  index == 1 ? 'http://www.new.d-doc.uz/yaqinlashmoqda_barchasi' :
                    index == 2 && 'http://www.new.d-doc.uz/bajarilmagan_barchasi'}>
                  {`${item.message}: ${item.count}`}
                </Link>
              </div>, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored'
              });
            })
            break;
          }
        }
        // setParam(dummy)
      })
    });
  }
  connect();

  // token ichidan rolni ajratib olish
  let role = "", userRoles = [], visible = false, monitoringVisible = false, ranks = [], permission = [];
  if (currentUser) {
    const token = jwt_decode(currentUser);
    // console.log(JSON.parse(token?.supperAdmin)?.userRoles[0]?.systemName);
    role = JSON.parse(token?.supperAdmin)?.userRoles[0]?.systemName;
    if (token?.workPlaces?.length > 0) {
      let result = [], arr1 = [], arr2 = [];
      let arr = JSON.parse(token?.workPlaces);
      arr.forEach((d, i) => {
        if (JSON.parse(localStorage.getItem('ids')) === d.id) {
          d.permissions.forEach((h) => {
            arr2.push(h?.name);
          })
        }
        d.userRoles.forEach((f, i) => {
          result.push(f?.systemName);
          arr1.push(f?.rank);
        })
      })
      userRoles = result;
      permission = arr2;
      ranks = arr1;
      if (JSON.parse(localStorage.getItem('ids'))) {
        visible = (userRoles.includes("boss_1") || userRoles.includes("boss_2") || userRoles.includes("boss_3") || userRoles.includes("chief_of_group") || userRoles.includes("controller") || userRoles.includes("head_of_department") || userRoles.includes("human_resources") || userRoles.includes("office_manager") || userRoles.includes("employee"));
        monitoringVisible = (userRoles.includes("boss_1") || userRoles.includes("boss_2") || userRoles.includes("boss_3") || userRoles.includes("controller") || userRoles.includes("head_of_department") || userRoles.includes("office_manager"));
      }
    }
  }

  // useEffect(() => {
  //     axiosInstance.get("monitoring/cardType/" + JSON.parse(localStorage.getItem('ids')), {
  //         headers: {
  //             Authorization: "Bearer " + currentUser
  //         }
  //     })
  //         .then(res => {
  //             // console.log(res.data);
  //             setData(res.data)
  //         })
  //         .catch(err => {
  //             console.log(err.response);
  //         })
  // }, []);

  return (
    <BrowserRouter>
      <Switch>

        {/*  {!loaded && (
            <WebNotification
                title={response.message}
                timeout={9000}
                icon={"./assets/doc.png"}
            />
        )}*/}
        {/*{!loaded && console.log(response)}*/}
        {/* home */}

        <Route path="/" exact>
          {visible ? <All10Content /> : role === "admin" ? <Admin /> : <LoginOther />}
        </Route>

        {visible && (
          <Route path="/asosiy" exact>
            <Home stompClient={stompClient} />
          </Route>
        )}
        {visible && (
          <Route path="/vazifalar_barchasi" >
            <Vazifalarim />
          </Route>
        )}
        {visible && (
          <Route path="/vazifalar_yangi" >
            <VazifalarYangi />
          </Route>
        )}
        {visible && (
          <Route path="/vazifalar_jarayonda" >
            <VazifalarJarayonda />
          </Route>
        )}
        {visible && (
          <Route path="/vazifalar_nazoratda" >
            <VazifalarNazoratda />
          </Route>
        )}
        {visible && (
          <Route path="/yaqinlashmoqda_barchasi" >
            <Yaqinlashmoqda />
          </Route>
        )}
        {visible && (
          <Route path="/yaqinlashmoqda_1kun-qoldi" >
            <Yaqinlashmoqda1kunQoldi />
          </Route>
        )}
        {visible && (
          <Route path="/yaqinlashmoqda_2-3kun-qoldi" >
            <Yaqin23kunQoldi />
          </Route>
        )}
        {visible && (
          <Route path="/yaqinlashmoqda_4~kun-qoldi" >
            <Yaqin4kunQoldi />
          </Route>
        )}
        {visible && (
          <Route path="/bajarilmagan_barchasi" >
            <Bajarilmagan />
          </Route>
        )}
        {visible && (
          <Route path="/bajarilmagan_1kun-kechikkan" >
            <Bajarilmagan1kunKechikkan />
          </Route>
        )}
        {visible && (
          <Route path="/bajarilmagan_2-3kun-kechikkan" >
            <Bajarilmagan23kunKechikkan />
          </Route>
        )}
        {visible && (
          <Route path="/bajarilmagan_4~kun-kechikkan" >
            <Bajarilmagan4kunKechikkan />
          </Route>
        )}
        {visible && (
          <Route path="/bajarilgan_barchasi" >
            <BajarilganB />
          </Route>
        )}
        {visible && (
          <Route path="/bajarilgan_bajarilganlar" >
            <BajBajarilgan />
          </Route>
        )}
        {visible && (
          <Route path="/bajarilgan_kechiktirib-berilgan" >
            <BajarilganKechBerilgan />
          </Route>
        )}

        {/* kiruvchi */}
        {visible && (
          <Route path="/kiruvchi" exact>
            <Kiruvchi />
          </Route>
        )}
        {visible && (
          <Route path="/kiruvchi/yangi">
            <Yangi />
          </Route>
        )}
        {visible && (
          <Route path="/kiruvchi/y/sozlash/:id/:name/:docId" exact>
            <YangiSozlama />
          </Route>
        )}
        {visible && (
          <Route path="/kiruvchi/resolution">
            <Resolutsiya />
          </Route>
        )}
        {visible && (
          <Route path="/kiruvchi/sozlash/:id/:name" exact>
            <Sozlama />
          </Route>
        )}
        {visible && (
          <Route path="/kiruvchi/bajarish">
            <Bajarish />
          </Route>
        )}
        {visible && (
          <Route path="/kiruvchi/nazorat">
            <Nazorat />
          </Route>
        )}
        {visible && (
          <Route path="/kiruvchi/umumlashtiruvchi">
            <Umumlashtiruvchi />
          </Route>
        )}
        {visible && (
          <Route path="/kiruvchi/ma'lumot-uchun">
            <MalumotUchun />
          </Route>
        )}
        {visible && (
          <Route path="/kiruvchi/kechiktirilgan">
            <Kechiktirilgan />
          </Route>
        )}
        {visible && (
          <Route path="/kiruvchi/radetilgan">
            <RadEtilgan />
          </Route>
        )}
        {visible && (
          <Route path="/kiruvchi/bajarilgan">
            <Bajarilgan />
          </Route>
        )}
        {visible && (
          <Route path="/kiruvchi/nazoratdan-olish">
            <NazoratdanOlish />
          </Route>
        )}
        {visible && (
          <Route path="/kiruvchi_resolution_kurish/:id" >
            <Korish stompClient={stompClient} />
          </Route>
        )}
        {visible && (
          <Route path="/kiruvchi_bajarish_ijro/:id/:name" exact>
            <Ijro />
          </Route>
        )}
        {visible && (
          <Route path="/kiruvchi_bajarish_ijro_yuklash">
            <NazoratYuklash />
          </Route>
        )}


        {/* keng qidirish */}
        {visible && (
          <Route path="/qidirish">
            <KengQidirish />
          </Route>
        )}


        {/* fuqaro murojaati */}
        <Route path="/fuqaro/murojati" exact>
          <FuqaroMurojati />
        </Route>
        <Route path="/fuqaro/murojati/yangi">
          <FuqaroMurojatYangi />
        </Route>
        <Route path="/fuqaro/murojati/xomaki">
          <Xomaki />
        </Route>
        <Route path="/fuqaro/murojati/rezalutsiya" exact>
          <FuqaroRezalutsiya />
        </Route>
        <Route path="/fuqaro/murojati/bajarish">
          <FuqaroMurojatiBajarish />
        </Route>
        <Route path="/fuqaro/murojati/nazorat">
          <FuqaroNazorat />
        </Route>
        <Route path="/fuqaro/murojati/kechiktirilgan">
          <FuqaroKechiktirilgan />
        </Route>
        <Route path="/fuqaro/murojati/bajarilgan">
          <FuqaroBajarilgan />
        </Route>
        <Route path="/fuqaro/murojati/yuborilgan">
          <Yuborilgan />
        </Route>
        <Route path="/fuqaro/murojati/nazoratdan-olish">
          <FuqaroNazoratdanOlish />
        </Route>
        <Route path="/fuqaro/murojati/rezalutsiya/kurish" >
          <FuqaroRezalutsiyaKurish />
        </Route>


        {/* arxiv */}
        <Route path="/arxiv">
          <Arxiv />
        </Route>


        {/* sozlamalar */}
        {/*<Route path="/sozlamalar" exact>*/}
        {/*    <Sozlamalar/>*/}
        {/*</Route>*/}
        <Route path="/office_manager/mavjud/paketlar" exact>
          <MavjudPaketlarOfficeMeneger />
        </Route>
        <Route path="/office_manager/mavjud/tashkilotlar">
          <MavjudTashkilotlarOfficeMeneger />
        </Route>
        <Route path="/sozlamalar_korrespondent">
          <SozlamalarKorrespondent />
        </Route>
        <Route path="/sozlamalar_taqdim-formasi">
          <TaqdimFormasi />
        </Route>
        <Route path="/sozlamalar_tezkor-rezolutsiya">
          <TezkorRezolut />
        </Route>


        {/* sozlamalar error */}
        <Route path="/sozlamalarAdmin" exact>
          <SozlamalarAdmin />
        </Route>
        <Route path="/sozlamalarAdmin_lavozim">
          <SozAdminLavozim />
        </Route>
        <Route path="/sozlamalarAdmin_foydalanuvchi">
          <SozAdminFoydalanuvchi />
        </Route>
        <Route path="/sozlamalarAdmin_ish-stoli">
          <SozAdminIshStoli />
        </Route>
        <Route path="/sozlamalarAdmin_fishka">
          <SozAdminFishka />
        </Route>
        <Route path="/sozlamalarAdmin_asosiy-banner">
          <SozAdminBanner />
        </Route>
        <Route path="/sozlamalarAdmin_qaror-banner">
          <SozAdminQarorBanner />
        </Route>


        {/* kadrlar */}
        <Route path="/kadrlar">
          <Kadrlar />
        </Route>
        <Route path="/kadrlar_xodim-kurish">
          <DeteilXodim />
        </Route>


        {/* shablonlar */}
        <Route path="/shablonlar" >
          <Shablonlar />
        </Route>


        {/* umumiy malumotlar */}
        {/* <Route path="/umumiyMalumotlar">
          <UmumiyMalumotlar />
        </Route> */}


        {/* jurnallar */}
        <Route path="/jurnallar" exact>
          <Jurnallar />
        </Route>
        <Route path="/jurnallar_yangi-qo'shish">
          <YangiQushish />
        </Route>
        <Route path="/jurnallar_faollar">
          <Faollar />
        </Route>
        <Route path="/jurnallar_arxiv" exact>
          <JurnallarArxiv />
        </Route>
        <Route path="/jurnallar/arxiv/ko'rish/:id">
          <JurnallarArxivKurish />
        </Route>
        <Route path="/jurnallar_kurish/:id">
          <BarchasiDetail />
        </Route>
        <Route path="/jurnallar_topshiriqlar/:id">
          <BarchasiTopshiriqlar />
        </Route>
        <Route path="/jurnallar_arxiv_detail/:id">
          <ArxivDetail />
        </Route>
        <Route path="/jurnallar/yopilgan-jurnallar">
          <YopilganJurnallar />
        </Route>


        {/* umumiy sozlamalar -> o'chirilmasin*/}
        <Route path="/umumiySozlamalar" exact>
          <UmumiySozlamalar />
        </Route>
        <Route path="/umumiySozlamalar_tashkiliy-tuzilma">
          <TashkiliyTuzilma />
        </Route>
        <Route path="/umumiySozlamalar_modul-sozlamalari">
          <ModulSozlamalari />
        </Route>
        <Route path="/umumiySozlamalar_foydalanuvchi-sozlamalari">
          <FoydalanuvchiSozlamalari />
        </Route>

        {/* monitoring */}
        {monitoringVisible && (
          <Route path="/monitoring" exact>
            <Monitoring />
          </Route>
        )}
        {monitoringVisible && (
          <Route path="/monitoring_nazorat-kartochka-malumot/">
            <NazoratKartochkaMalumot />
          </Route>
        )}
        {monitoringVisible && (
          <Route path="/monitoring_kiruvchi">
            <MonitoringKiruvchi />
          </Route>
        )}
        {monitoringVisible && (
          <Route path="/monitoring_nazorat-kartochka">
            <NazoratKartochka />
          </Route>
        )}
        {/* {monitoringVisible && (data.map((item,index)=>{
          return(
              <Route key={index} path={`/monitoring_:${item.cardName}`}>
                <A1 />
              </Route>

          )}))} */}
        {monitoringVisible && (
          <Route path="/monitoring_test">
            <Test />
          </Route>
        )}
        {monitoringVisible && (
          <Route path="/monitoring_svodka">
            <Svodka />
          </Route>
        )}
        {monitoringVisible && (
          <Route path="/monitoring_svodka_qvc">
            <SvodkaQVC />
          </Route>
        )}
        {monitoringVisible && (
          <Route path="/monitoring_svodaka-new">
            <SvodakaNew />
          </Route>
        )}


        {/* super base admin login page */}
        <Route path="/login">
          {role === "base_admin" ? <BaseAdmin /> : <Login />}
        </Route>
        {/* super admin */}
        <Route path="/super_base_admin" exact>
          {role === "base_admin" ? <BaseAdmin /> : <Login />}
        </Route>
        <Route path="/super_base_admin_tashkilot-qushish" exact>
          {role === "base_admin" ? <TashkilotQushish /> : <Login />}
        </Route>
        <Route path="/super_base_admin_tashkilot-qushish/:stir">
          {role === "base_admin" ? <TashkilotQushish /> : <Login />}
        </Route>
        <Route path="/super_base_admin_tashkilotlar-tuzilishi/:id">
          {role === "base_admin" ? <TashkilotKurish /> : <Login />}
        </Route>
        <Route path="/super_base_admin-administratsiya/:id">
          {role === "base_admin" ? <Administratsiya /> : <Login />}
        </Route>
        <Route path="/super_base_admin_modul-sozlama/:id">
          {role === "base_admin" ? <ModulSozlama /> : <Login />}
        </Route>
        <Route path="/super_base_admin_card-sozlama/:id">
          {role === "base_admin" ? <CardSozlama /> : <Login />}
        </Route>

        {/* super admin sozlamalar */}
        <Route path="/super_base_admin_sozlamalar">
          {role === "base_admin" ? <BaseSozlamalar /> : <Login />}
        </Route>
        <Route path="/super_base_admin_sozlamalar-korrespandent">
          {role === "base_admin" ? <BaseSozKorrespandent /> : <Login />}
        </Route>
        <Route path="/super_base_admin_sozlamalar_tadqim-etish-formasi">
          {role === "base_admin" ? <BaseSozTaqdimForma /> : <Login />}
        </Route>
        <Route path="/super_base_admin_sozlamalar-rezalutsiya">
          {role === "base_admin" ? <BaseSozRezalutsiya /> : <Login />}
        </Route>
        <Route path="/super_base_admin_sozlamalar-jurnallar">
          {role === "base_admin" ? <BaseSozJurnallar /> : <Login />}
        </Route>
        <Route path="/super_base_admin-modullar">
          {role === "base_admin" ? <Modullar /> : <Login />}
        </Route>
        <Route path="/super_base_admin-kartochka">
          {role === "base_admin" ? <KartochkaQushish /> : <Login />}
        </Route>
        <Route path="/super_base_admin_rollar">
          {role === "base_admin" ? <Rollar /> : <Login />}
        </Route>
        <Route path="/super_base_admin_xodim-rollari">
          {role === "base_admin" ? <XodimRollari /> : <Login />}
        </Route>
        <Route path="/super_base_admin_boshqa-rollar">
          {role === "base_admin" ? <BoshqaRollar /> : <Login />}
        </Route>
        <Route path="/super_base_admin_hudud">
          {role === "base_admin" ? <Hudud /> : <Login />}
        </Route>
        <Route path="/super_base_admin_hudud-viloyatlar">
          {role === "base_admin" ? <Viloyatlar /> : <Login />}
        </Route>
        <Route path="/super_base_admin_hudud-shahar-tuman">
          {role === "base_admin" ? <Shahartuman /> : <Login />}
        </Route>
        <Route path="/super_base_admin_murojaat">
          {role === "base_admin" ? <Murojaat /> : <Login />}
        </Route>
        <Route path="/super_base_admin_fuqaro-savollari">
          {role === "base_admin" ? <FuqaroSavollari /> : <Login />}
        </Route>
        <Route path="/super_base_admin_fuqaro-javoblari">
          {role === "base_admin" ? <FuqaroJavoblari /> : <Login />}
        </Route>
        <Route path="/super_base_admin_xabarnoma">\
          {role === "base_admin" ? <Xabarnoma /> : <Login />}
        </Route>


        {/* admin */}
        <Route path="/super_admin" exact>
          {role === "admin" ? <Admin /> : <LoginOther />}
        </Route>
        <Route path="/super_admin_elektron-kitob" >
          {role === "admin" ? <AdminElektronKitob /> : <LoginOther />}
        </Route>
        <Route path="/super_admin_elektron-kitob-barchasi" >
          {role === "admin" ? <AdminBarchasi /> : <LoginOther />}
        </Route>
        <Route path="/super_admin_elektron-kitob-faollar" >
          {role === "admin" ? <AdminFaollar /> : <LoginOther />}
        </Route>
        <Route path="/super_admin_elektron-kitob-arxiv" >
          {role === "admin" ? <AdminArxiv /> : <LoginOther />}
        </Route>
        <Route path="/super_admin_elektron-kitob-ko'rish/:id" >
          {role === "admin" ? <AdminKurish /> : <LoginOther />}
        </Route>
        <Route path="/super_admin_elektron-kitob-arxiv-ko'rish/:id" >
          {role === "admin" ? <AdminArxivKurish /> : <LoginOther />}
        </Route>
        <Route path="/super_admin_elektron-kitob-topshiriqlar/:id" >
          {role === "admin" ? <AdminTopshiriq /> : <LoginOther />}
        </Route>
        <Route path="/super_admin_lavozim" >
          {role === "admin" ? <AdminLavozim /> : <LoginOther />}
        </Route>
        <Route path="/super_admin_foydalanuvchi" >
          {role === "admin" ? <AdminFoydalanuvchi /> : <LoginOther />}
        </Route>
        <Route path="/super_admin_ish-stoli" >
          {role === "admin" ? <AdminIshStoli /> : <LoginOther />}
        </Route>
        <Route path="/super_admin_fishka" >
          {role === "admin" ? <AdminFishka /> : <LoginOther />}
        </Route>
        <Route path="/super_admin_asosiy-banner" >
          {role === "admin" ? <AdminAsosiyBanner /> : <LoginOther />}
        </Route>
        <Route path="/super_admin_buyruq-banner" >
          {role === "admin" ? <AdminBuyruqBanner /> : <LoginOther />}
        </Route>
        <Route path="/super_admin_sozlamalar" >
          {role === "admin" ? <AdminSozlamalar /> : <LoginOther />}
        </Route>
        <Route path="/super_admin/umumiy/paketlar" >
          {role === "admin" ? <UmumiyPaketlar /> : <LoginOther />}
        </Route>
        <Route path="/super_admin/mavjud/paketlar" >
          {role === "admin" ? <MavjudPaketlar /> : <LoginOther />}
        </Route>
        <Route path="/super_admin/umumiy/tashkilotlar" >
          {role === "admin" ? <UmumiyTashkilotlar /> : <LoginOther />}
        </Route>
        <Route path="/super_admin/mavjud/tashkilotlar" >
          {role === "admin" ? <MavjudTashkilotlar /> : <LoginOther />}
        </Route>

        {/* masalan userRoles = ["boss_1", "controller"] maksimal 2 ta rol bo'lishi mumkin, buni workPlace ichidan o'qib olamiz */}
        {/* super admin va admin dan tashqari qolgan barcha rollar uchun bu component ochiladi */}
        <Route path="/sahifa/asosiy" exact>
          {userRoles?.length > 0 && (roles.includes(userRoles[0]) || roles.includes(userRoles[1]) || roles.includes(userRoles[2]) || roles.includes(userRoles[3]) ? <All10Content /> : <LoginOther />)}
        </Route>

        {/* security */}
        {/* <Route path="/super_security" >
          <Security />
        </Route> */}



        {/* FAQ */}
        <Route path="/FAQ">
          {(role === "admin" || role === "base_admin" || visible) && <Faq />}
        </Route>

        {/* NotFound500 */}
        <Route path="/page-not-found-500">
          {(role === "admin" || role === "base_admin" || visible) && <NotFound500 />}
        </Route>

      </Switch>
      <div style={{ maxWidth: 300 }}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter >
  );
}

export default App;
