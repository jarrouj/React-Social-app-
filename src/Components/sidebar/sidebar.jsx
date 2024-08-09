import './sidebar.css'
import { RssFeed  , Chat, PlayCircle , Group , Bookmark , HelpOutline,
  WorkOutline , Event , School
} from '@mui/icons-material';


export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarlistItem">
            <RssFeed className='sidebarIcon'/>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarlistItem">
            <Chat className='sidebarIcon'/>
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarlistItem">
            <PlayCircle className='sidebarIcon'/>
            <span className="sidebarListItemText">Videos</span>
          </li>

          <li className="sidebarlistItem">
            <Group className='sidebarIcon'/>
            <span className="sidebarListItemText">Groups</span>
          </li>

          <li className="sidebarlistItem">
            <Bookmark className='sidebarIcon'/>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>

          <li className="sidebarlistItem">
            <HelpOutline className='sidebarIcon'/>
            <span className="sidebarListItemText">Questions</span>
          </li>

          <li className="sidebarlistItem">
            <WorkOutline className='sidebarIcon'/>
            <span className="sidebarListItemText">Jobs</span>
          </li>

          <li className="sidebarlistItem">
            <Event className='sidebarIcon'/>
            <span className="sidebarListItemText">Events</span>
          </li>

          <li className="sidebarlistItem">
            <School className='sidebarIcon'/>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className='sidebarHr' />
        <ul className="sidebarFriendlist">
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="assets/person/2.jpeg" alt="" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>

          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="assets/person/2.jpeg" alt="" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>

          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="assets/person/2.jpeg" alt="" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>

          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="assets/person/2.jpeg" alt="" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>

          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="assets/person/2.jpeg" alt="" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
