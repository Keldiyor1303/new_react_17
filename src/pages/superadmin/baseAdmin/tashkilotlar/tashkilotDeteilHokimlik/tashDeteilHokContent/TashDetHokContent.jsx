import React from "react";
import TashDetHokNavbar from "../tashDetHokNavbar/TashDetHokNavbar";

export default function TashDetHokContent() {
    return (
        <div class="content mb-5">
            {/* <!-- Sobir Suxayl Header qismini shu shuyer dan yozasizlar --> */}
            <h3 style={{ margin: "10px 0 0 20px", fontWeight: "bold", textTransform: "upperCase" }}>Tashkilot tuzulishi</h3>
            <div class="card-body">
                <ul class="nav nav-tabs nav-tabs-solid nav-tabs-solid-custom bg-primary NavLink">
                    {/* <li class="nav-item"><a href="./deteilHokimlik.html" class="nav-link NavLinkLi ml-2" ><i class="icon-office"></i> Tashkilot tuzulishi</a></li>
                    <li class="nav-item"><a href="./adminstartor.html" class="nav-link "><i class="icon-user-tie"></i> Adminstartor</a></li>
                    <li class="nav-item"><a href="" class="nav-link "><i class="icon-stack2"></i> Modullar Sozlamasi</a></li>
                    <li class="nav-item"><a href="" class="nav-link "><i class="icon-newspaper"></i> Kiritish Ma'lumotlari</a></li> */}
                    <TashDetHokNavbar />

                </ul>

                <div class="tab-content">
                    <div class="tab-pane fade show active" id="colored-tab1">
                        {/* <!-- Table Componet  --> */}
                        <div class="card">
                            <div class="card-body" style={{ padding: "30px" }}>
                                {/* <!-- deteil hokimlik --> */}
                                <form >
                                    <div class="row mt-4">
                                        <div class="col-lg-6">
                                            <div class="form-group form-group-floating row">
                                                <div class="col-lg-12">
                                                    <div class="position-relative">
                                                        <input type="text" class="form-control form-control-outline" placeholder="Placeholder" />
                                                        <label class="label-floating">Korxona Nomi</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-group form-group-floating row">
                                                <div class="col-lg-12">
                                                    <div class="position-relative">
                                                        <input type="text" class="form-control form-control-outline" placeholder="Placeholder" />
                                                        <label class="label-floating">Qisqacha nomi</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="form-group form-group-floating row">
                                                <div class="col-lg-12">
                                                    <select data-placeholder="Viloyat" class="form-control select-search  form-control-outline select" >
                                                        <option></option>
                                                        <optgroup label="Viloyat">
                                                            <option value="AZ">Buxoro</option>
                                                            <option value="CO">Navoiy</option>
                                                            <option value="ID">Samarqand</option>
                                                        </optgroup>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="form-group form-group-floating row">
                                                <div class="col-lg-12">
                                                    <select data-placeholder="Tuman(Shahar)" class="form-control select-search  form-control-outlin select" >
                                                        <option></option>
                                                        <optgroup label="Tuman(Shahar)">
                                                            <option value="AZ">Buxor Shahar</option>
                                                            <option value="CO">Buxoro Tuman</option>
                                                            <option value="ID">Jondor Tuman</option>
                                                        </optgroup>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="form-group form-group-floating row">
                                                <div class="col-lg-12">
                                                    <div class="position-relative">
                                                        <input type="text" class="form-control form-control-outline" placeholder="Placeholder" />
                                                        <label class="label-floating">Manzil</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="form-group form-group-floating row">
                                                <div class="col-lg-12">
                                                    <div class="position-relative">
                                                        <input type="text" data-mask="999-999-999" class="form-control InputCard form-control-outline" maxlength="9" placeholder="Placeholder" />
                                                        <label class="label-floating">Stir</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-8">
                                            <div class="form-group form-group-floating row InputCard">
                                                <div class="col-lg-12">
                                                    <div class="position-relative">
                                                        <input type="text" class="form-control form-control-outline" placeholder="placeholder" />
                                                        <label class="label-floating">F.I.O</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="form-group form-group-floating  row">
                                                <div class="col-lg-12">
                                                    <div class="position-relative">
                                                        <input type="text" data-mask="+998(99) 999-99-99" class="form-control form-control-outline InputCard" placeholder="Placeholder" />
                                                        <label class="label-floating">Telefon </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="form-group form-group-floating row">
                                                <div class="col-lg-12">
                                                    <div class="position-relative">
                                                        <input type="email" class="form-control form-control-outline" placeholder="Placeholder" />
                                                        <label class="label-floating">Email</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="form-group form-group-floating  row">
                                                <div class="col-lg-12">
                                                    <div class="position-relative">
                                                        <input type="email" class="form-control form-control-outline" placeholder="Placeholder" />
                                                        <label class="label-floating">E-xat</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="form-group form-group-floating row">
                                                <div class="col-lg-12">
                                                    <select data-placeholder="Status" class="form-control select-search  form-control-outlin select" >
                                                        <option></option>
                                                        <optgroup label="Status">
                                                            <option value="AZ">Test Rejim</option>
                                                            <option value="CO">Navoiy</option>
                                                            <option value="ID">Samarqand</option>
                                                        </optgroup>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="form-group form-group-floating  row">
                                                <div class="col-lg-12">
                                                    <div class="position-relative">
                                                        <input type="url" class="form-control form-control-outline" placeholder="Placeholder" />
                                                        <label class="label-floating">URL</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="form-group form-group-floating row">
                                                <div class="col-lg-12">
                                                    <label class="custom-file" >
                                                        <input type="file" class="custom-file-input" />
                                                        <span class="custom-file-label" style={{ height: "54px", padding: "14px 18px" }}>Logotip</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="form-group form-group-floating row">
                                                <div class="col-lg-12">
                                                    <div class="position-relative">
                                                        <select data-placeholder="Yo'nalish" class="form-control select-search  form-control-outline select" >
                                                            <option></option>
                                                            <optgroup label="Yo'nalish">
                                                                <option value="AZ">Buxoro</option>
                                                                <option value="CO">Navoiy</option>
                                                                <option value="ID">Toshkent</option>
                                                                <option value="WY">Andijon</option>
                                                            </optgroup>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="form-group form-group-floating row">
                                                <div class="col-lg-12">
                                                    <div class="position-relative">
                                                        <select data-placeholder="Bosh tashkilot 1" class="form-control select-search  form-control-outlin select" >
                                                            <option></option>
                                                            <optgroup label="Bosh tashkilot">
                                                                <option value="AZ">Buxoro</option>
                                                                <option value="CO">Navoiy</option>
                                                                <option value="ID">Toshkent</option>
                                                                <option value="WY">Andijon</option>
                                                            </optgroup>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="form-group form-group-floating row">
                                                <div class="col-lg-12">
                                                    <div class="position-relative">
                                                        <select data-placeholder="Bosh tashkilot 2" class="form-control select-search  form-control-outlin select" >
                                                            <option></option>
                                                            <optgroup label="Bosh tashkilot">
                                                                <option value="AZ">Buxoro</option>
                                                                <option value="CO">Navoiy</option>
                                                                <option value="ID">Toshkent</option>
                                                                <option value="WY">Andijon</option>
                                                            </optgroup>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="row">
                                        <div class="col-lg-2">
                                            <button type="submit" class="btn btn-primary"><i class="icon-floppy-disk"></i> Saqlash</button>
                                        </div>
                                    </div>
                                </form>
                                {/* <!-- end deteil --> */}
                            </div>
                        </div>
                        {/* <!-- end Table Components --> */}
                    </div>
                </div>
            </div>
        </div>
    )
}