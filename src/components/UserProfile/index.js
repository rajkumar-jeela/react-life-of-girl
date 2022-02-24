import {Component} from 'react'

class UserProfile extends Component {
  state = {
    text: '',
    imageUrl: '',
  }

  render() {
    return (
      <>
        <div className="bg-container">
          <div className="card">
            <h1 className="heading">Create Post</h1>
            <form onSubmit={this.submitProfile}>
              <input type="text" className="form-control" />

              <input type="textarea" className="form-area" />

              <button type="submit" className="create-button">
                Create
              </button>
            </form>
          </div>
        </div>
      </>
    )
  }
}

export default UserProfile
