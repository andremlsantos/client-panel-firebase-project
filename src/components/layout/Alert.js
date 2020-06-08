import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Alert = (props) => {
    const { message, messageType } = props;
    console.log(messageType);
    return (
        <div
            className={classNames("alert", {
                "alert-success": messageType === "Success",
                "alert-danger": messageType === "Error",
            })}
        >
            {message}
        </div>
    );
};

Alert.propTypes = {
    message: PropTypes.string.isRequired,
    messageType: PropTypes.string.isRequired,
};

export default Alert;
