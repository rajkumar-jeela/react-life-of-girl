import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class EditPost extends Component {
  state = {
    text: '',
    imageUrl: '',
  }

  submitProfile = async event => {
    event.preventDefault()
    const {text, imageUrl} = this.state
    const token = Cookies.get('token')

    const userDetails = {text, imageUrl}
    const url = 'https://logathon-posts.herokuapp.com/editPost'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    console.log(response)

    const data = await response.json()
    console.log(data)
  }

  onChangeText = event => {
    this.setState({text: event.target.value})
    console.log(event.target.value)
  }

  render() {
    const {text, imageUrl} = this.state

    return (
      <>
        <div className="bg-container">
          <div className="card">
            <h1 className="heading">Update/Edit Post</h1>
            <form className="create-container" onSubmit={this.submitProfile}>
              <input type="text" value={text} onChange={this.onChangeText} />

              <textarea rows="4" cols="50">
                {imageUrl}
              </textarea>

              <button type="submit" className="sb-button">
                Update
              </button>
            </form>
          </div>
        </div>
      </>
    )
  }
}

export default EditPost
