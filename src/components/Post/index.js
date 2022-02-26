/**  import {MdDeleteForever} from 'react-icons/md'
import './index.css'

const Post = props => {
  const {itemDetails, onClickDeletePost} = props

  const onClickDelete = () => {
    onClickDeletePost(itemDetails)
  }

  return (
    <li className="todo-list-item">
      <div></div>
      <h1 className="">{text}</h1>
      <p className="todo-para">Full Stack Developer</p>
      <button type="button" className="todo-delete" onClick={onClickDelete}>
        <MdDeleteForever size={20} color="#4ce0d2" />
      </button>
    </li>
  )
}

export default Post
*/
