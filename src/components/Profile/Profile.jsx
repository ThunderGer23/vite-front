import './Profile.css'
function Profile() {
    return (
        <section>
            <div className="container py-5 vh-100">
                <div className="row d-flex justify-content-center align-items-lg-center vh-100">
                    <div className="col-lx-10">
                        <div className="rounded-3 text-black">
                            <div className="row g-0">
                                <div className="col-lg-3">
                                    <div className="p-md-5 mx-md-4">
                                        <div className="card shadow p-2 rounded-5 profile-bg">
                                            <div className="car-body p-md-5 mx-md-4">
                                                <div>
                                                    <form action="" className="bt-4">
                                                        <div className="input-group mb-4">
                                                            <img className="img-fluid" src="./icons/profile.png" alt="" />
                                                        </div>

                                                    </form>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="d-grid gap-2 mt-4">
                                            <button class="btn btn-outline-secondary" type="button"><i className="fa fa-pen orange"></i> Cambiar foto</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-flex align-items-center">
                                    <div className="card p-4 rounded-4 profile-bg">
                                        <form action="" className="bt-4 p-lg-2">
                                            <div className="input-group mb-4">
                                                <span className="input-group-text" id="basic-addon1"><i className="fa-regular fa-user" style={{ color: 'white' }}></i></span>
                                                <input type="text" class="form-control" placeholder="Nombre:" aria-label="Nombre" aria-describedby="basic-addon1" />
                                            </div>
                                            <div className="input-group mb-4">
                                                <span className="input-group-text" id="basic-addon2"><i className="fa-regular fa-user" style={{ color: 'white' }}></i></span>
                                                <input type="text" class="form-control" placeholder="Apellido:" aria-label="apellido" aria-describedby="basic-addon2" />
                                            </div>
                                            <div className="input-group mb-4">
                                                <span className="input-group-text" id="basic-addon3"><i className="fa-regular fa-at" style={{ color: 'white' }}></i></span>
                                                <input type="email" class="form-control" placeholder="email:" aria-label="email" aria-describedby="basic-addon3" />
                                            </div>
                                            <div className="input-group mb-4">
                                                <span className="input-group-text" id="basic-addon4"><i className="fa-solid fa-quote-right" style={{ color: 'white' }}></i></span>
                                                <input type="text" class="form-control" placeholder="Alias:" aria-label="alias" aria-describedby="basic-addon4" />
                                            </div>
                                            <div className="input-group mb-4">
                                                <span className="input-group-text" id="basic-addon4"><i className="fa-solid fa-key" style={{ color: 'white' }}></i></span>
                                                <input type="password" class="form-control" placeholder="Contraseña:" aria-label="contrasena" aria-describedby="basic-addon4" />
                                            </div>
                                        </form>
                                    </div>

                                </div>
                                <div className="col-lg-4">
                                    <div className="db-vite">
                                        <div class="d-grid gap-2">
                                            <div style={{height:'280px'}}></div>
                                            <button class="btn btn-outline-secondary" type="button"><i className="fa-solid fa-file" style={{ color: 'white' }}></i> Cambiar Alias</button>
                                        
                                            <button class="btn btn-outline-secondary" type="button"><i className="fa-solid fa-unlock" style={{ color: 'white' }}></i> Cambiar Contraseña</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;