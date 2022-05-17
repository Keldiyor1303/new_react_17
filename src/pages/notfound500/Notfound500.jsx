import React from 'react'

export default function NotFound500() {
    return (
        <div className="content d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <div className="flex-fill">
                <div className="text-center mb-4">
                    <img src="https://demo.interface.club/limitless/demo/Template/global_assets/images/error_bg.svg" className="img-fluid mb-3" height="230" alt="" />
                    <h1 className="display-2 font-weight-bold line-height-1 mb-2">500</h1>
                    <h6 className="w-md-25 mx-md-auto">Xatolik yuz berdi.<br />
                        Serverda ichki xatolik yuz berdi va so'rovingizni bajara olmadi.
                    </h6>
                </div>
                <div className="text-center">
                    <a href="#1" className="btn btn-primary">
                        <i className="icon-home4 mr-2"></i>
                        Asosiy sahifaga qaytish
                    </a>
                </div>
            </div>
        </div>
    )
}
