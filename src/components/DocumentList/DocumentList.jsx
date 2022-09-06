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
                                                    <table class="">
                                                        <thead>
                                                            <tr>
                                                            <th scope="col">File</th>
                                                            <th scope="col">Porcent</th>
                                                            <th scope="col">Date</th>
                                                            <th scope="col">Size</th>
                                                            <th scope="col">Share</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className='bg__table__list table__rounded'>
                                                            <tr className='pb-3 pt-3'>
                                                            <th scope="row"><img className="sizeIcons" src="./icons/document.png" alt="" /> name</th>
                                                            <th scope="row"></th>
                                                            <th scope="row">10-12-2022</th>
                                                            <th scope="row">75pasg's</th>
                                                            <th scope="row"><img className="sizeIcons me-4" src="./icons/sad.png" alt="" /><img className="sizeIcons" src="./icons/sad.png" alt="" />  </th>
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
        </section>
    );
}

export default DocumentList;