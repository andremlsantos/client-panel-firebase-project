import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Clients extends Component {
    render() {
        const clients = [
            {
                id: 1,
                firstName: "Kevin",
                lastName: "Johnson",
                email: "kevin@gmail.com",
                phone: "111-111-1111",
                balance: "10",
            },
            {
                id: 2,
                firstName: "Andre",
                lastName: "Santos",
                email: "andre@gmail.com",
                phone: "222-222-2222",
                balance: "20",
            },
        ];

        if (clients) {
            return (
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <h2>
                                {" "}
                                <i className="fas fa-users"> </i> Clients{" "}
                            </h2>
                        </div>
                        <div className="col-md-6"></div>
                    </div>

                    <table className="table table-striped">
                        <thead className="thead-inverse">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Balance</th>
                                <th>Phone</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map((client) => (
                                <tr key={client.id}>
                                    <th>
                                        {client.firstName} {client.lastName}
                                    </th>
                                    <th>{client.email}</th>
                                    <th>
                                        ${parseFloat(client.balance).toFixed(2)}
                                    </th>
                                    <th>{client.phone}</th>
                                    <th>
                                        <Link
                                            to={`/client/${client.id}`}
                                            className="btn btn-secondary btn-sm"
                                        >
                                            <i className="fas fa-arrow-circle-right"></i>{" "}
                                            Details
                                        </Link>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        } else {
            return <h1>Loading ...</h1>;
        }
    }
}
