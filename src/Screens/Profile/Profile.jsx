import "./profile.css";
import TopBar from "../../Components/TopBar/tobBar";
import Feed from "../../Components/feed/Feed";
import Rightbar from "../../Components/rightbar/Rightbar";
import Sidebar from "../../Components/sidebar/sidebar";

export default function Profile() {
    return (
        <>
            <TopBar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                        <img className="profileCoverImg" src="assets/post/3.jpeg" alt="" />
                        <img className="profileUserImg" src="assets/person/7.jpeg" alt="" />
                        </div>
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Jorj J</h4>
                        <span className="profileInfoDesc">Hello my friends!</span>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    )
}
