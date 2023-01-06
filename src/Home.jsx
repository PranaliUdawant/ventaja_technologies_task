import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import * as yup from "yup"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { GetAllUsers, RegisterUser } from './redux/UserAction'
export default function Home() {
    const { getusers, users, register } = useSelector(state => state.allusers)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: "john",
            mobile: "8888888",
            email: "john@gmail.com"
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            mobile: yup.string().required(),
            email: yup.string().required()
        }),
        onSubmit: (values) => {
            console.log(values);
            dispatch(RegisterUser(values))
            if (register) {
                navigate("/account")
            } else {
                null
            }
        }
    })

    return <>
        {/* {JSON.stringify(users)} */}
        <div class="container mt-5">
            <div class="row">
                {
                    register ? <div class="alert alert-primary"> Register Successfully
                        <p>Goto To Account Page </p>
                    </div> : null
                }
                <div class="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Register Form</div>
                        <form onSubmit={formik.handleSubmit}>
                            <div class="card-body">
                                <div>
                                    <label for="name" class="form-label">name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name='name'
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={formik.errors.name && formik.touched.name ? "form-control is-invalid" : "form-control"}
                                        placeholder="Enter your name"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please Enter Name</div>
                                </div>
                                <div class="mt-2">
                                    <label for="email" class="form-label">Mobile No</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="email"
                                        name='mobile'
                                        value={formik.values.mobile}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={formik.errors.mobile && formik.touched.mobile ? "form-control is-invalid" : "form-control"}
                                        placeholder="Enter Your Mobile No"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please Enter Mobile No</div>
                                </div>
                                <div class="mt-2">
                                    <label for="email" class="form-label">Email</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="email"
                                        placeholder="Enter Your Email"
                                        name='email'
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={formik.errors.email && formik.touched.email ? "form-control is-invalid" : "form-control"}
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please Enter Email ID</div>
                                </div>

                                <button type="submit" class="btn btn-primary w-100 mt-3">
                                    Register
                                </button>
                                <p class="text-center mt-3">
                                    Already Have Account? <a href="#">Login</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* {
                users.map((item) => (
                    <div class="card w-25 mt-2">

                        <div class="card-body">
                            <div>
                                {item.name}
                            </div>
                            <div>
                                {item.email}
                            </div>
                            <div>
                                {item.mobile}
                            </div>
                        </div>

                    </div>
                ))
            } */}
        </div>
    </>
}
