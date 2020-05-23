import React, { Component, isValidElement } from "react";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
// Firestore
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";

class EditClient extends Component {
    constructor(props) {
        super(props);

        // Create refs
        this.firstNameInput = React.createRef();
        this.lastNameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
        this.balanceInput = React.createRef();
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { client, firestore, history } = this.props;

        // Updated client
        const updatedClient = {
            firstName: this.firstNameInput.current.value,
            lastName: this.lastNameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value,
            balance:
                this.balanceInput.current.value === ""
                    ? 0
                    : this.balanceInput.current.value,
        };

        // Update client in firestore
        firestore
            .update({ collection: "clients", doc: client.id }, updatedClient)
            .then(history.push("/"));
    };

    render() {
        const { client } = this.props;
        if (client) {
            return (
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <Link to="/" className="btn btn-link">
                                <i className="fas fa-arrow-circle-left"></i>{" "}
                                Back to dashboard
                            </Link>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">Edit client </div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="firstName">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="firstName"
                                        minLength="2"
                                        required
                                        ref={this.firstNameInput}
                                        defaultValue={client.firstName}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="firstName">Last Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="lastName"
                                        minLength="2"
                                        required
                                        ref={this.lastNameInput}
                                        defaultValue={client.lastName}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        required
                                        ref={this.emailInput}
                                        defaultValue={client.email}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="phone"
                                        required
                                        minLength="10"
                                        ref={this.phoneInput}
                                        defaultValue={client.phone}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="balance">Balance</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="balance"
                                        ref={this.balanceInput}
                                        defaultValue={client.balance}
                                    />
                                </div>

                                <input
                                    type="submit"
                                    value="submit"
                                    className="btn btn-primary btn-block"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            );
        } else {
            return <Spinner></Spinner>;
        }
    }
}

export default compose(
    firestoreConnect((props) => [
        {
            collection: "clients",
            storeAs: "client",
            doc: props.match.params.id,
        },
    ]),
    connect(({ firestore: { ordered } }, props) => ({
        client: ordered.client && ordered.client[0],
    }))
)(EditClient);
