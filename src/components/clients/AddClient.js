import React, { Component } from "react";
import { Link } from "react-router-dom";
// Firestore
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect, firestoreReducer } from "react-redux-firebase";
import PropTypes from "prop-types";

class AddClient extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        balance: "",
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onSubmit = (e) => {
        e.preventDefault();

        const newClient = this.state;
        const { firestore, history } = this.props;

        // if no balance, make 0
        if (newClient.balance === "") newClient.balance = 0;

        firestore
            .add({ collection: "clients" }, newClient)
            .then(() => history.push("/"));
    };

    render() {
        const { firstName, lastName, email, phone, balance } = this.state;

        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <Link to="/" className="btn btn-link">
                            <i className="fas fa-arrow-circle-left"></i> Back to
                            dashboard
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">Add client </div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="firstName"
                                    minLength="2"
                                    required
                                    onChange={this.onChange}
                                    value={firstName}
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
                                    onChange={this.onChange}
                                    value={lastName}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    required
                                    onChange={this.onChange}
                                    value={email}
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
                                    onChange={this.onChange}
                                    value={phone}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="balance">Balance</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="balance"
                                    onChange={this.onChange}
                                    value={balance}
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
    }
}

AddClient.propTypes = {
    firestore: PropTypes.object.isRequired,
};

export default firestoreConnect()(AddClient);
