
import './Login.css';


function Login() {
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="card">
                            <div className="card-header text-center">
                                <h2>Login</h2>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="form-label"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="exampleInputPassword1"
                                            className="form-label"
                                        >
                                            Senha
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                        />
                                    </div>
                                    <div className="d-grid gap-2">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Login
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
   
