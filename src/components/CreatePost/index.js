import {Component} from 'react'
import './index.css'

class CreatePost extends Component {
  state: {
    text: '',
    imageUrl: '',
  }

  render() {
    return (
      <>
        <div className="bg-container">
          <div className="card">
            <h1 className="heading">Create Post</h1>
            <form className="create-container" onSubmit={this.submitProfile}>
              <input type="text" />

              <textarea rows="4" cols="50">
                {}
              </textarea>

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
