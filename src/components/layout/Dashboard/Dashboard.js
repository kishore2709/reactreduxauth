import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
    componentDidMount() {
       // this.props.dispatch();
    }

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi Kishore !</h1>
                <p>You're logged in with React!!</p>
                <h3>All registered users:</h3>
               
                <p>
                    <Link to="/signout">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
 
}
export default Dashboard;