import TopBar from "../../Components/TopBar/tobBar";
import Feed from "../../Components/feed/Feed";
import Rightbar from "../../Components/rightbar/Rightbar";
import Sidebar from "../../Components/sidebar/sidebar";
import './home.css'

export default function Home() {
  return (
    <>
    <TopBar />
    <div className="homeContainer">
    <Sidebar />
    <Feed />
    <Rightbar />
    </div>
    </>
  )
}
