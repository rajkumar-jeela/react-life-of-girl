import './index.css'
import {Component} from 'react'
import axios from 'axios'

class ImageUpload extends Component {
  state = {
    selectedFile: '',
  }

  handleInputChange(event) {
    const {files} = event.target
    const reader = new FileReader()
    reader.readAsDataURL(files[0])
    reader.onload = e => {
      this.setState({
        selectedFile: e.target.result,
      })
      submit(event) {
    event.preventDefault()

    console.log(this.state)
  }
    }
  }

  handleInputChange = this.handleInputChange.bind(this)

  

  render() {
    return (
      <div className="login-form-container">
        <form className="form-container" onSubmit={this.submit}>
          <input type="file" onChange={this.handleInputChange} />
          <button type="submit" className="login-button">
            Upload
          </button>
        </form>
      </div>
    )
  }
}

export default ImageUpload
