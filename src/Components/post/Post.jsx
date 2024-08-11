import './post.css';
import {MoreVert} from '@mui/icons-material';
import {Users} from "../../dummyData";


export default function Post({post}) {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                <img src={Users.filter(u=>u.id === post.userId)[0].profilePicture} className='postProfileImg' alt="" />
                <span className='postUsername'>{Users.filter(u=>u.id === post.userId)[0].username}</span>
                <span className='postDate'>{post.date}</span>
                </div>
                <div className="postTopRight">
                <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.photo} alt="" className='postImg' />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="assets/like.png" alt="" />
                    <img className='likeIcon' src="assets/heart.png" alt="" />
                    <spam className="postLikeCounter">{post.like} people liked this post</spam>
                </div>
                <div className="postBottomRight">
                    <span className="postCommnetText">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
