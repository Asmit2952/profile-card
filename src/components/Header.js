import profile from "../images/profile.jpg"

export default function Header() {
    return (
        <div>
            <div className="img-area">
                <img src={profile} alt="profile-pic"/>
            </div>
            <div className="name-area">
                <h2>Asmit Malakannawar</h2>
                <h4>Open Source Contributor</h4>
                <h5><a href="https://asmit2952.github.io" rel="noopener noreferrer" target="_blank">asmit2952.github.io</a></h5>
            </div>
        </div>
    )
}