import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {  faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Header() {
    return (
        <div className="btn-container">
            <a href="mailto: asmitbm2952002@gmail.com" rel="noopener noreferrer" target="_blank"><button className='btn'><FontAwesomeIcon icon={faEnvelope} className="btn-fa" />Email</button></a>
            <a href="https://www.linkedin.com/in/asmit-malakannawar/" rel="noopener noreferrer" target="_blank"><button className='btn btn-li'><FontAwesomeIcon icon={faLinkedin} className="btn-fa" />LinkedIn</button></a>
        </div>
    )
}