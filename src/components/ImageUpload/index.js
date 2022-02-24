import './index.css'
import {Component} from 'react'

class ImageUpload extends Component {
  uploadImage = async event => {
    event.preventDefault()
    console.log(event.target)
    const fr = new FileReader()
    fr.onloadend = () => {
      console.log(fr.result)
    }
    fr.readAsDataURL(event.target.files[0])
  }

  render() {
    return (
      <div className="login-form-container">
        <form className="form-container" onSubmit={this.uploadImage}>
          <input type="file" />
          <button type="submit" className="login-button">
            Upload
          </button>
        </form>
      </div>
    )
  }
}

export default ImageUpload
