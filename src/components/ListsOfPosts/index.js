/* import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'
import Post from '../Post'

class ListsOfPosts extends Component {
  state = {
    userList: [(text: ''), (imageUrl: '')],
  }

  onClickDeletePost = postId => {
    const {userList} = this.state
    const newList = userList.filter(eachItem => eachItem !== postId)
    this.setState({userList: newList})
  }

  getProfile = async event => {
    event.preventDefault()

    const token = Cookies.get('token')

    const url = 'https://logathon-posts-list.herokuapp.com/getPost'
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        token: `${token}`,
      },
    }
    const response = await fetch(url, options)
    console.log(response)

    const data = await response.json()
    console.log(data)
  }

  render() {
    const {userList} = this.state

    return (
      <>
        <div className="head-container">
          <h1 className="form-heading">TEAM NAME</h1>
          <div>
            <button type="button" className="button-outline opacity">
              WALLET
            </button>
            <button type="button" className="button-outline">
              SIGN OUT
            </button>
          </div>
        </div>
        <ul className="">
          {this.getProfile}
          {userList.map(eachItem => (
            <Post
              itemDetails={eachItem}
              key={eachItem.postId}
              onClickDeletePost={this.onClickDeletePost}
            />
          ))}
        </ul>
      </>
    )
  }
}

export default ListsOfPosts
*/
