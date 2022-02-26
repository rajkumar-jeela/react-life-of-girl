import './index.css'
import {Component} from 'react'
import axios from 'axios'

import Cookies from 'js-cookie'

class ImageUpload extends Component {
  state = {
    selectedFile: '',
  }

  handleInputChange = event => {
    const {files} = event.target
    const reader = new FileReader()
    reader.readAsDataURL(files[0])
    reader.onload = e => {
      this.setState({
        selectedFile: e.target.result,
      })
    }
  }

  handleInputChange = this.handleInputChange.bind(this)

  uploadImage = async event => {
    event.preventDefault()
    const {selectedFile} = this.state
    const base64Data1 = selectedFile.split(',')[1]
    const url = 'https://developer.lifeofgirl.org/api/v2/imageUpload'

    const formData = {base64Data: base64Data1}

    axios
      .post(url, formData, {
        // receive two parameter endpoint url ,form data
      })
      .then(res => {
        if (res.data.status === 'success') {
          const {imageUrl} = res.data

          // console.log(imageUrl)
          Cookies.set('imageUrl', imageUrl, {
            expires: 30,
          })
          const {history} = this.props
          history.push('/createPost')
        }
      })
  }

  render() {
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
        <div className="login-form-container">
          <form className="form-container" onSubmit={this.uploadImage}>
            <input type="file" onChange={this.handleInputChange} />
            <button type="submit" className="login-button">
              Upload
            </button>
          </form>
        </div>
      </>
    )
  }
}

export default ImageUpload
