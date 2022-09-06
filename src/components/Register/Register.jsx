import './Register.css'
function Register() {
    return ( 
        <section>
            <div className                                                    = "container py-5 vh-100">
                <div className                                                = "row d-flex justify-content-center align-items-lg-center vh-100">
                    <div className                                            = "col-lx-10">
                        <div className                                        = "rounded-3 text-black">
                            <div className                                    = "row g-0">
                                <div className                                = "col-lg-6">
                                    <div className                            = "p-md-5 mx-md-4">
                                        <div className                        = "card shadow p-3 mb-5 rounded-5 bg-register-form">
                                            <div className                    = "car-body p-md-5 mx-md-4">
                                                <div>
                                                    <form action              = "" className="bt-4">
                                                    <div className            = "input-group mb-4">
                                                        <span className       = "input-group-text" id="basic-addon1"><i className="fa-regular fa-user" style={{color:'white'}}></i></span>
                                                        <input type           = "text" class="form-control" placeholder="Nombre:" aria-label="Nombre" aria-describedby="basic-addon1" />
                                                    </div>
                                                    <div className            = "input-group mb-4">
                                                        <span className       = "input-group-text" id="basic-addon2"><i className="fa-solid fa-pen" style={{color:'white'}}></i></span>
                                                        <input type           = "text" class="form-control" placeholder="Boleta:" aria-label="Boleta" aria-describedby="basic-addon2" />
                                                    </div> 
                                                    <div className            = "input-group mb-4">
                                                        <span className       = "input-group-text" id="basic-addon3"><i className="fa-solid fa-quote-right" style={{color:'white'}}></i></span>
                                                        <input type           = "text" class="form-control" placeholder="username:" aria-label="username" aria-describedby="basic-addon3" />
                                                    </div> 
                                                    <div className            = "input-group mb-4">
                                                        <span className       = "input-group-text" id="basic-addon4"><i className="fa-regular fa-at" style={{color:'white'}}></i></span>
                                                        <input type           = "email" class="form-control" placeholder="email:" aria-label="email" aria-describedby="basic-addon3" />
                                                    </div> 
                                                    </form>
                                                    <div class                = "d-grid gap-2">
                                                        <button class         = "btn btn-light" type="button"><i className="fa fa-right-to-bracket orange"></i> Siguiente</button>
                                                    </div>
                                                    {/* <div className        ="text-center pt-1 mb-1">
                                                        <p><a className       = "">Registrarse</a></p>
                                                    </div>
                                                    <div className            = "d-flex align-items-center justify-content-center">
                                                        <a className          = "">¿Olvido su contraseña?</a>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>    
                                </div>
                                <div className                                = "col-lg-6 d-flex align-items-center">
                                    <div>

                                        <div className                        = "px-3 py-4 p-md-4">
                                        <div className                        = "text-center mb-2">
                                            Descuida!        <img className   = "logo" src="./img/mq19.png" alt="" style={{width:'7rem'}} />
                                        </div>
                                            
                                        <h3>Bienvenido a Athenea</h3>
                                        <p>
                                           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt voluptatem, harum amet fuga aperiam rerum in aspernatur, aut reprehenderit impedit totam dicta eos officia cupiditate. Earum quaerat eum pariatur laudantium.
                                        </p>
                                         <p>
                                            <img src                          = "./icons/document.png" width="45" /> Politicas de privacidad
                                         </p>      
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

export default Register;