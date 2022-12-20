import './index.css'

const PasswordManagerItem = props => {
  const {passwordsList, updateDeletedPasswords} = props
  const {id, website, username, password, isChecked} = passwordsList

  const imagestar = (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars"
    />
  )

  const passwordhideandshow = isChecked ? (
    <p className="website">{password}</p>
  ) : (
    <p className="website">{imagestar}</p>
  )

  const deletePasswordDetails = () => {
    updateDeletedPasswords(id)
  }

  return (
    <li className="passwords-details-card">
      <h1 className="profile-logo">V</h1>
      <div className="username-password-details-container">
        <p className="website">{website}</p>
        <p className="website">{username}</p>
        {passwordhideandshow}
      </div>
      <button
        onClick={deletePasswordDetails}
        className="button-delete"
        type="button"
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-logo"
        />
      </button>
    </li>
  )
}

export default PasswordManagerItem
