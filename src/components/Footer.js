import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {  faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import {  faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import {  faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'


export default function Header() {
    return (
        <div className="footer-container">
            <a href="https://github.com/Asmit2952" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithubSquare} className="icon" /></a>
            <a href="https://twitter.com/Asmit_2952" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faTwitterSquare} className="icon" /></a>
            <a href="https://www.linkedin.com/in/asmit-malakannawar/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="icon" /></a>
            <a href="https://asmit.bio.link/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faSquareArrowUpRight} className="icon" /></a>
        </div>
    )
}

