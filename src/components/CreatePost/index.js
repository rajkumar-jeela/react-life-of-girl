import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class CreatePost extends Component {
  state = {
    text: '',
    imageUrl: Cookies.get('imageUrl'),
  }

  submitProfile = async event => {
    event.preventDefault()

    const {text, imageUrl} = this.state
    const token = Cookies.get('token')
    console.log(token)
    const userDetails = {text, imageUrl}
    console.log(userDetails)
    const url = 'https://logathon-posts.herokuapp.com/createPost'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        token: `${token}`,
      },
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    console.log(response)
    const {history} = this.props
    history.replace('/editPost')
  }

  onChangeText = event => {
    this.setState({text: event.target.value})
  }

  render() {
    const {text, imageUrl} = this.state

    return (
      <>
        <div className="head-container">
          <h1 className="form-heading">TEAM NAME</h1>
          <div>
            <button type="button" className="button-outline opacity">
              WALLET
            </button>
            <button type="button" className="button-outline">
              SIGN UP
            </button>
          </div>
        </div>
        <div className="bg-container">
          <div className="card">
            <h1 className="heading">Create Post</h1>
            <form className="create-container" onSubmit={this.submitProfile}>
              <input type="text" value={text} onChange={this.onChangeText} />

              <textarea rows="4" cols="50" defaultValue={imageUrl} />

              <button type="submit" className="sb-button">
                Create
              </button>
            </form>
          </div>
        </div>
      </>
    )
  }
}

export default CreatePost
