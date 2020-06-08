import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
    setAllowRegistration,
    setDisableBalanceOnAdd,
    setDisableBalanceOnEdit,
} from "../../actions/settingsActions";

class Settings extends Component {
    allowRegistrationOnChange = (e) => {
        const { setAllowRegistration } = this.props;
        setAllowRegistration();
    };

    disableBalanceOnAddOnChange = (e) => {
        const { setDisableBalanceOnAdd } = this.props;
        setDisableBalanceOnAdd();
    };

    disableBalanceOnEditOnChange = (e) => {
        const { setDisableBalanceOnEdit } = this.props;
        setDisableBalanceOnEdit();
    };

    render() {
        const {
            disableBalanceOnAdd,
            disableBalanceOnEdit,
            allowRegistration,
        } = this.props.settings;

        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <Link to="/" className="btn btn-link">
                            <i className="fas fa-arrow-circle-left"></i>Back to
                            Dashboard{" "}
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">Edit</div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="allowRegistration">
                                    Allow Registration
                                </label>
                                <input
                                    type="checkbox"
                                    name="allowRegistration"
                                    checked={!!allowRegistration}
                                    onChange={this.allowRegistrationOnChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="disableBalanceOnAdd">
                                    Disable Balance On Add
                                </label>
                                <input
                                    type="checkbox"
                                    name="disableBalanceOnAdd"
                                    checked={!!disableBalanceOnAdd}
                                    onChange={this.disableBalanceOnAddOnChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="disableBalanceOnEdit">
                                    Disable Balance On Edit
                                </label>
                                <input
                                    type="checkbox"
                                    name="disableBalanceOnEdit"
                                    checked={!!disableBalanceOnEdit}
                                    onChange={this.disableBalanceOnEditOnChange}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

Settings.propTypes = {
    settings: PropTypes.object.isRequired,
    setDisableBalanceOnAdd: PropTypes.func.isRequired,
    setDisableBalanceOnEdit: PropTypes.func.isRequired,
    setAllowRegistration: PropTypes.func.isRequired,
};

export default connect(
    (state, props) => ({
        auth: state.firebase.auth,
        settings: state.settings,
    }),
    { setAllowRegistration, setDisableBalanceOnAdd, setDisableBalanceOnEdit }
)(Settings);
