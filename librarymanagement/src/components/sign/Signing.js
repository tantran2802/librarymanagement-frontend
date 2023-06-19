import { Link } from "react-router-dom"
export default function Sign(){
    return(
        <div>
            <form className="form" id="login">
            <h1 className="form__title">Login</h1>
            <div className="form__message form__message--error"></div>
            <div className="form__input-group">
                <input type="text" className="form__input" id="usrname" autoFocus placeholder="Username or email"></input>
                <div className="form__input-error-message"></div>
            </div>
            <div className="form__input-group">
                <input type="password" className="form__input" id="password" autoFocus placeholder="Password"></input>
                <div className="form__input-error-message"></div>
            </div>
            <button className="form__button" type="submit">Continue</button>
            <p className="form__text">
                <Link to="#" className="form__link">Forgot your password?</Link>
            </p>
            <p className="form__text">
                <Link className="form__link" id="linkCreateAccount">Don't have an account? Create account</Link>
            </p>
        </form>
        </div>
    )
}