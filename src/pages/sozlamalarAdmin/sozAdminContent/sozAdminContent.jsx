import React, { useEffect, useState } from 'react';
import SozlamalarNavbarAdmin from '../sozlamalarNavbarAdmin/SozlamalarNavbarAdmin';
import Select from 'react-select'

export default function SozAdminContent() {
    const [data, setData] = useState([
        {
            id: 1,
            nomlanishi: "Buxoro",
            kategoriya: "Buxoro",
            tarjimalar: "Buxoro",
            xodim: 2,
            tashkilot: "Buxoro Viloyat Hokimligi"
        }
    ]);

    // click checkbox
    useEffect(() => {
        document.querySelector('#bulimFunc').addEventListener('click', () => {
            if (document.querySelector('#bulimFunc').checked) {
                document.querySelector('#bulim').style.display = "block";
            } else {
                document.querySelector('#bulim').style.display = "none";
            }
        })
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
    }

    const Uchirish = (ind) => {
        let arr = data.filter((d, i) => {
            return i !== ind;
        })
        setData(arr);
        document.querySelector('.bekorQilish').click();
    }

    const UzgartirishlarniSaqlash = (ind) => {
        let tarjima = document.querySelector('.tarjima').value;
        let arr = data.map((d, i) => {
            if (i === ind) {
                d.tarjimalar = tarjima;
            }
            return d;
        });
        setData(arr);
        document.querySelector('.close2').click();
    }

    return (
        <div className="content mb-5">
            {/* <!-- Sobir Suxayl Header qismini shu shuyer dan yozasizlar --> */}
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Sozlamalar</h3>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink">
                    <SozlamalarNavbarAdmin />
                </ul>

                <div className="tab-content">
                    <div className="tab-pane fade show active" id="colored-tab1">
                        <div className="card">
                            <div className="card-body" style={{ padding: "30px" }}>
                                <form>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <input type="text"
                                                            className="form-control form-control-outline"
                                                            placeholder="Placeholder" />
                                                        <label className="label-floating">Nomlanishi</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <input type="text"
                                                            className="form-control form-control-outline"
                                                            placeholder="Placeholder" />
                                                        <label className="label-floating">Ruscha nomi</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group form-group-floating row">
                                                <div className="col-lg-12">
                                                    <div className="position-relative">
                                                        <input type="text"
                                                            className="form-control form-control-outline"
                                                            placeholder="Placeholder" />
                                                        <label className="label-floating">Tavsif</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <button type="submit" className="btn btn-primary w-100" style={{ height: "56px" }}>
                                                <i className="fas fa-save" style={{ fontSize: "18px" }}></i> Saqlash
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="mb-2 d-flex align-items-center">
                                                <input type="checkbox" className='mr-1 cursor-pointer' id="bulimFunc" style={{ width: "20px", height: "20px" }} />
                                                Asosiy bo'limni tanlash
                                                {/* <label className="custom-control-label" htmlFor="bolimFunc">Asosiy bo'limni tanlash</label> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12" id="bulim" style={{ display: "none" }}>
                                            <div className="form-group mb-0">
                                                <Select
                                                    // defaultValue={options[1]}
                                                    options={[
                                                        { value: "Buxoro", label: "Buxoro", isDisabled: true },
                                                        { value: "Kiruvchi", label: "Kiruvchi" },
                                                        { value: "Chiquvchi", label: "Chiquvchi" },
                                                        { value: "Buyruqlar", label: "Buyruqlar" },
                                                        { value: "Fuaqaro Murojatlari", label: "Fuaqaro Murojatlari" },
                                                    ]}
                                                    // onChange={logChange12}
                                                    placeholder="Buxoro"
                                                />
                                                {/* <select data-placeholder="Buxoro" className="form-control select-search  form-control-outlin select" data-fouc>
                                                    <option></option>
                                                    <optgroup label="Viloyatlar">
                                                        <option value="AZ">Kiruvchi</option>
                                                        <option value="CO">Chiquvchi</option>
                                                        <option value="ID">Buyruqlar</option>
                                                        <option value="WY">Fuaqaro Murojatlari</option>
                                                    </optgroup>
                                                </select> */}
                                            </div>
                                        </div>
                                    </div>
                                </form>

                                <table className="table mt-2 table-bordered table-striped table-hover Tab">
                                    <thead>
                                        <tr className="bg-dark text-white NavLink text-center">
                                            <th>№</th>
                                            <th>Nomlanishi</th>
                                            <th>Asosiy Kategoriya</th>
                                            <th>Tarjimalar</th>
                                            <th>Xodimlar</th>
                                            <th>Tashkilot Nomi</th>
                                            <th>Harakatlar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((dat, index) => (
                                            <tr className="text-center">
                                                <td>{dat.id}</td>
                                                <td>{dat.nomlanishi}</td>
                                                <td>{dat.kategoriya}</td>
                                                <td>{dat.tarjimalar}</td>
                                                <td>{dat.xodim}</td>
                                                <td>{dat.tashkilot}</td>
                                                <td className='d-flex justify-content-center'>
                                                    <span className="infoBtn bg-dark cursor-pointer" data-toggle="modal" data-target="#modal_theme_primary" data-bs-toggle="tooltip" data-popup="tooltip" data-bs-placement="top" title="O'zgartirish"><i className="icon-pencil5" ></i> </span>
                                                    <span className="infoBtn bg-dark cursor-pointer" data-toggle="modal" data-target="#modal_theme_primaryDelete" data-bs-toggle="tooltip" data-popup="tooltip" data-bs-placement="top" title="O'chirish"><i className="icon-trash" ></i> </span>
                                                    {/* <!-- Primary modal --> */}
                                                    <div id="modal_theme_primary" className="modal fade" tabIndex="-1">
                                                        <div className="modal-dialog modal-xl">
                                                            <div className="modal-content">
                                                                <div className="modal-header bg-primary text-white">
                                                                    <h6 className="modal-title">Bo'lim qo'shish
                                                                    </h6>
                                                                    <button type="button" className="close close2" data-dismiss="modal">&times;</button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <form className="ml-1" onSubmit={submitHandler}>
                                                                        <div className="row">
                                                                            <div className="col-lg-12">
                                                                                <div className="form-group form-group-floating row">
                                                                                    <div className="col-lg-12">
                                                                                        <div className="position-relative">
                                                                                            <input type="text"
                                                                                                className="form-control form-control-outline"
                                                                                                placeholder="Placeholder" />
                                                                                            <label
                                                                                                className="label-floating">Nomlanishi</label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-12">
                                                                                <div
                                                                                    className="form-group form-group-floating row">
                                                                                    <div className="col-lg-12">
                                                                                        <div
                                                                                            className="position-relative">
                                                                                            <input type="text"
                                                                                                className="form-control form-control-outline tarjima"
                                                                                                placeholder="Placeholder"
                                                                                                defaultValue={dat.tarjimalar}
                                                                                            />
                                                                                            <label className="label-floating">Tarjimalar (ruscha)</label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-12">
                                                                                <div
                                                                                    className="form-group form-group-floating row">
                                                                                    <div className="col-lg-12">
                                                                                        <div
                                                                                            className="position-relative">
                                                                                            <input type="text"
                                                                                                className="form-control form-control-outline"
                                                                                                placeholder="Placeholder" />
                                                                                            <label
                                                                                                className="label-floating">Tavsif</label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-12">
                                                                                <div className="form-group text-left">
                                                                                    <Select
                                                                                        // defaultValue={options[1]}
                                                                                        options={[
                                                                                            { value: "Bosh bo'lim", label: "Bosh bo'lim", isDisabled: true },
                                                                                            { value: "Buxoro", label: "Buxoro" },
                                                                                            { value: "Chiquvchi", label: "Chiquvchi" },
                                                                                            { value: "Buyruqlar", label: "Buyruqlar" },
                                                                                            { value: "Fuaqaro Murojatlari", label: "Fuaqaro Murojatlari" },
                                                                                        ]}
                                                                                        // onChange={logChange12}
                                                                                        placeholder="Bosh bo'lim"
                                                                                    />
                                                                                    {/* <select
                                                                                        data-placeholder="Bosh bo'lim"
                                                                                        className="form-control select-search  form-control-outlin select">
                                                                                        <option></option>
                                                                                        <optgroup
                                                                                            label="Bosh bo'lim">
                                                                                            <option value="AZ">
                                                                                                Buxoro</option>
                                                                                            <option value="CO">
                                                                                                Chiquvchi</option>
                                                                                            <option value="ID">
                                                                                                Buyruqlar</option>
                                                                                            <option value="WY">
                                                                                                Fuaqaro Murojatlari
                                                                                            </option>
                                                                                        </optgroup>
                                                                                    </select> */}
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-12">
                                                                                <div className="form-group text-left">
                                                                                    <Select
                                                                                        // defaultValue={options[1]}
                                                                                        options={[
                                                                                            { value: "Tanlash", label: "Tanlash", isDisabled: true },
                                                                                            { value: "Buxoro", label: "Buxoro" },
                                                                                            { value: "Chiquvchi", label: "Chiquvchi" },
                                                                                            { value: "Buyruqlar", label: "Buyruqlar" },
                                                                                            { value: "Fuaqaro Murojatlari", label: "Fuaqaro Murojatlari" },
                                                                                        ]}
                                                                                        // onChange={logChange12}
                                                                                        placeholder="Tanlash"
                                                                                    />
                                                                                    {/* <select
                                                                                        data-placeholder="Tanlash"
                                                                                        className="form-control select-search  form-control-outlin select">
                                                                                        <option></option>
                                                                                        <optgroup label="Tanlash">
                                                                                            <option value="AZ">
                                                                                                Buxoro</option>
                                                                                            <option value="CO">
                                                                                                Chiquvchi</option>
                                                                                            <option value="ID">
                                                                                                Buyruqlar</option>
                                                                                            <option value="WY">
                                                                                                Fuaqaro Murojatlari
                                                                                            </option>
                                                                                        </optgroup>
                                                                                    </select> */}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-lg-12">
                                                                                <div className="form-group form-group-floating row mb-0">
                                                                                    <div className="col-lg-12">
                                                                                        <div className="position-relative">
                                                                                            <button type="button" onClick={() => UzgartirishlarniSaqlash(index)} className="btn btn-primary" style={{ width: "100%", height: "40px" }}>
                                                                                                <i className="fas fa-save" style={{ fontSize: "18px" }}></i> Saqlash
                                                                                            </button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-link"
                                                                    data-dismiss="modal">Yopish</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* delete */}
                                                    <div id="modal_theme_primaryDelete" className="modal fade show" tabIndex="-1" style={{ display: "none" }} aria-modal="true" role="dialog">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                <div className="modal-header bg-primary text-white">
                                                                    <h6 className="modal-title">O'chirish oynasi</h6>
                                                                    <button type="button" className="close" data-dismiss="modal">×</button>
                                                                </div>
                                                                <div className="modal-body ">
                                                                    <h3 style={{ textTransform: "upperCase", fontWeight: "bold" }} className="text-danger">Ogoh bo'ling!</h3>
                                                                    <h5>Ushbu ma'lumotni o'chirmoqchimisiz?</h5>
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-link bekorQilish" data-dismiss="modal">Bekor qilish</button>
                                                                    <button type="button" className="btn btn-primary" onClick={() => Uchirish(index)}>O'chirish</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
