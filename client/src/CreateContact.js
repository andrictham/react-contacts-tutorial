import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ImageInput from './ImageInput'

class CreateContact extends Component {
	render() {
		return (
			<div>
				<Link className="close-create-contact" to="/">
					Close
				</Link>
				<form action="" className="create-contact-form">
					<ImageInput
						className="create-contact-avatar-input"
						name="avatarURL"
						maxHeight={128}
					/>
					<div className="create-contact-details">
						<input type="text" name="name" placeholder="Name" />
						<input type="text" name="name" placeholder="Email" />
						<button>Add Contact</button>
					</div>
				</form>
			</div>
		)
	}
}

export default CreateContact
