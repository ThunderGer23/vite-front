function NoPage() {
    return ( 
        <section>
            <div className="container py-5 vh-100">
                <div className="row d-flex justify-content-center align-items-lg-center vh-100">
                    <div className="col-lx-10">
                        <div className="rounded-3 text-black">
                            <div className="row g-0">
                                <div className="col-lg-12 d-flex justify-content-center align-items-center">
                                    <div>
                                        <img className="mb-4" style={{width:'9rem'}} src="./icons/sad.png" alt="" /> 
                                        <h2 className="text-center text-uppercase">error 404!!</h2>                                       
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

export default NoPage;