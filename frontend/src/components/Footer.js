import {BsLinkedin, BsGithub} from "react-icons/bs"
import { AiFillHome } from "react-icons/ai";

export default function Footer(){
    return(
        <div className="FooterContainer">
            <div>
                <BsLinkedin className="Links" onClick={() => {window.location.href = "https://www.linkedin.com/in/federicoachaval/"}}/>
                <BsGithub className="Links" onClick={() => {window.location.href = "https://github.com/Drennann"}}/>
                <AiFillHome className="Links" onClick={() => {window.location.href = "https://drennann.github.io/portfolio/"}}/>
            </div>
        </div>
    )
}