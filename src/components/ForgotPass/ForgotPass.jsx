import './ForgotPass.css'
function ForgotPass() {
    return (
        <section>
            <div className = "container py-5 vh-100">
                <div className = "row d-flex justify-content-center align-items-lg-center vh-100">
                    <div className = "col-lx-10">
                        <div className = "rounded-3 text-black">
                            <div className = "row g-0">
                                <div className = "col-lg-6 p-4">
                                    <div className = "p-md-5 mx-md-4">
                                        <div className = "card shadow p-3 mb-5 rounded-5 bg-forgotpass-form">
                                            <div className = "car-body p-md-5 mx-md-4">
                                                <div className = "text-center mb-5">
                                                    <h3><a href = "#">Correo:</a></h3>
                                                </div>
                                                <div>
                                                    <form action = "" className="bt-4">
                                                        <div className = "input-group mb-5">
                                                            <span className = "input-group-text" id="basic-addon2">
                                                                <i className="fa-regular fa-at" style={{color: 'white'}}></i>
                                                            </span>
                                                            <input type = "email" className="form-control" placeholder="email:" aria-label="Username" aria-describedby="basic-addon2"/>
                                                        </div>
                                                    </form>
                                                    <div className = "d-grid gap-2 mb-3 mt-5">
                                                        <button className = "btn btn-light" type="button"  data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                                            <i className="fa fa-right-to-bracket orange"></i>
                                                            Siguiente
                                                        </button>
                                                    </div>
                                                    {/* <div className = "text-center pt-1 mb-1">
                                                        <p><a className = "">Registrarse</a></p>
                                                    </div>
                                                    <div className = "d-flex align-items-center justify-content-center">
                                                        <a className = "">¿Olvido su contraseña?</a>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className = "col-lg-6 d-flex align-items-center">
                                    <div>
                                        <div className = "px-3 py-4 p-md-4">
                                            <div className = "text-center mb-2">
                                                Descuida!        
                                                <img className = "logo" src="./img/mq19.png" alt="" style={{ width: '7rem' }} />
                                            </div>

                                            <h3>Bienvenido</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt voluptatem, harum amet fuga aperiam rerum in aspernatur, aut reprehenderit impedit totam dicta eos officia cupiditate. Earum quaerat eum pariatur laudantium.
                                            </p>
                                            <p>
                                                <img src = "./icons/document.png" width="45" />
                                                Politicas de privacidad
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* modals */}
            </div>
        </section>
    );
}

// TODO: Implementar los defaultprops
// !Preguntar por los class -> className
export default ForgotPass;