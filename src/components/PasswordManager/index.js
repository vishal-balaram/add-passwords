import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordManagerItem from '../PasswordManagerItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    passwordsList: [],
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    searchInput: '',
  }

  updateDeletedPasswords = id => {
    const {passwordsList} = this.state
    const newPasswordsList = passwordsList.filter(
      Eachpass => Eachpass.id !== id,
    )
    this.setState({passwordsList: newPasswordsList})
  }

  enterWebsiteInput = event => {
    const {websiteInput} = this.state
    this.setState({websiteInput: event.target.value})
  }

  enterUsernameInput = event => {
    const {usernameInput} = this.state
    this.setState({usernameInput: event.target.value})
  }

  enterPasswordInput = event => {
    const {passwordInput} = this.state
    this.setState({passwordInput: event.target.value})
  }

  entersearchInput = event => {
    const {searchInput} = this.state
    this.setState({searchInput: event.target.value})
  }

  addNewPasswords = event => {
    const {
      passwordsList,
      websiteInput,
      passwordInput,
      usernameInput,
      searchInput,
    } = this.state
    event.preventDefault()
    const newPassword = {
      id: uuidv4(),
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
      search: searchInput,
      isChecked: false,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
      searchInput: '',
    }))
  }

  render() {
    const {passwordsList, searchInput} = this.state

    const searchResults = passwordsList.filter(Eachpassword =>
      Eachpassword.website.includes(searchInput),
    )
    const count = searchResults.length

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="input-card">
          <div className="input-card-card">
            <form onSubmit={this.addNewPasswords}>
              <h1 className="add-password-heading">Add New Password</h1>
              <div className="website-logo-input">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="website-logo"
                />
                <input
                  onChange={this.enterWebsiteInput}
                  type="text"
                  placeholder="Enter Website"
                  className="website-input"
                />
              </div>
              <div className="website-logo-input">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="website-logo"
                />
                <input
                  onChange={this.enterUsernameInput}
                  type="text"
                  placeholder="Enter Username"
                  className="website-input"
                />
              </div>
              <div className="website-logo-input">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="website-logo"
                />
                <input
                  onChange={this.enterPasswordInput}
                  type="password"
                  placeholder="Enter Password"
                  className="website-input"
                />
              </div>
              <div className="button-container">
                <button className="button" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager-image"
            />
          </div>
        </div>
        <div className="passwords-store-card">
          <div className="your-password-count-search-container">
            <div className="your-password-heading-para-container">
              <h1 className="your-password-heading">Your Passwords</h1>
              <p className="passwords-count">{count}</p>
            </div>
            <div className="search-input-logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-logo"
              />
              <input
                onChange={this.entersearchInput}
                type="search"
                className="search-input"
                placeholder="Search"
              />
            </div>
          </div>
          <hr />
          <div className="check-box-container">
            <input
              className="checkbox-input"
              id="showpasswords"
              type="checkbox"
            />
            <label className="checkbox-label" htmlFor="showpasswords">
              Show Passwords
            </label>
          </div>
          {count > 0 ? (
            <ul className="cards-container">
              {searchResults.map(Eachpassword => (
                <PasswordManagerItem
                  passwordsList={Eachpassword}
                  key={Eachpassword.id}
                  updateDeletedPasswords={this.updateDeletedPasswords}
                  toggle={this.toggle}
                />
              ))}
            </ul>
          ) : (
            <div className="nopasswords-image-heading-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-passwords-image"
              />
              <p className="no-passwords-heading">No Passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
