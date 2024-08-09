import './tobBar.css';
import { Search , Person , Chat , Notifications } from '@mui/icons-material';

export default function TopBar() {
  return (
    <div className='topbarContainer'>
        <div className="topbarleft">
          <span className="logo">LamaSocial</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
              <Search className='searchIcon'/>
              <input placeholder='Search for friends, post or video' className="searchInput" />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Home</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconsItem">
              <Person />
              <span className="topbarIconBadge">1</span>
            </div>

            <div className="topbarIconsItem">
              <Chat />
              <span className="topbarIconBadge">2</span>
            </div>

            <div className="topbarIconsItem">
              <Notifications />
              <span className="topbarIconBadge">1</span>
            </div>
          
          </div>
          <img src="assets/person/1.jpeg" alt="" className="topbarImg" />
        </div>
    </div>
  )
}
