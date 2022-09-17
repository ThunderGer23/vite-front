import './DocumentList.css'
function DocumentList() {
    return (  
        <section>
            <div className="container py-5 vh-100">
                <div className="row d-flex justify-content-center align-items-lg-center vh-100">
                    <div className="col-lx-10">
                        <div className="rounded-3 text-black">
                            <div className="row g-0">
                                <div className="col-lg-12">
                                    <div className="p-md-5 mx-md-4">
                                       
                                                <div className="p-md-5 mx-md-4">
                                                    <div class="table-responsive">
                                                        <table class="table bg-light">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">File</th>
                                                                    <th scope="col">Porcent</th>
                                                                    <th scope="col">Date</th>
                                                                    <th scope="col">Size</th>
                                                                    <th scope="col">Share</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                    <tr class="">
                                                                        <td scope="row"><i className='fa fa-file'></i> Name</td>
                                                                        <td></td>
                                                                        <td>10-12-2020</td>
                                                                        <td>75pag's</td>
                                                                        <td><button type="submit">
                                                                            <i className='fa-solid fa-envelope'></i>
                                                                            <lord-icon src="https://cdn.lordicon.com/eeisssxp.json"
                                                                                trigger="hover"
                                                                                colors="primary:#121331,secondary:#1c94e0"
                                                                                style="width:250px;height:250px">
                                                                            </lord-icon>
                                                                            </button> 
                                                                            <button className='fa-solid fa-trash'></button>            
                                                                        </td>
                                                                    </tr>
                                                                    <tr class="">
                                                                        <td scope="row"><i className='fa fa-file'></i> Name</td>
                                                                        <td></td>
                                                                        <td>10-12-2020</td>
                                                                        <td>75pag's</td>
                                                                        <td><button type="submit">
                                                                            <i className='fa-solid fa-envelope'></i></button> 
                                                                            <button className='fa-solid fa-trash'></button>            
                                                                        </td>
                                                                    </tr>
                                                                    <tr class="">
                                                                        <td scope="row"><i className='fa fa-file'></i> Name</td>
                                                                        <td></td>
                                                                        <td>10-12-2020</td>
                                                                        <td>75pag's</td>
                                                                        <td><button type="submit">
                                                                            <i className='fa-solid fa-envelope'></i></button> 
                                                                            <button className='fa-solid fa-trash'></button>            
                                                                        </td>
                                                                    </tr>
                                                                    <tr class="">
                                                                        <td scope="row"><i className='fa fa-file'></i> Name</td>
                                                                        <td></td>
                                                                        <td>10-12-2020</td>
                                                                        <td>75pag's</td>
                                                                        <td><button type="submit">
                                                                            <i className='fa-solid fa-envelope'></i></button> 
                                                                            <button className='fa-solid fa-trash'></button>            
                                                                        </td>
                                                                    </tr>
                                                                    <tr class="">
                                                                        <td scope="row"><i className='fa fa-file'></i> Name</td>
                                                                        <td></td>
                                                                        <td>10-12-2020</td>
                                                                        <td>75pag's</td>
                                                                        <td><button type="submit">
                                                                            <i className='fa-solid fa-envelope'></i></button> 
                                                                            <button className='fa-solid fa-trash'></button>            
                                                                        </td>
                                                                    </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    
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

export default DocumentList;