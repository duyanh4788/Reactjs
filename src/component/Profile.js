import React, { Component } from 'react'

class Profile extends Component {
    render() {
        return (
            <div className="container card-columns text-left">
                <div className="card">
                    <img className="card-img-top" src="https://picsum.photos/200/300" />
                    <div className="card-body">
                        <h4 className="card-title">Card title</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className='btn btn-primary'>Some Where</button>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://picsum.photos/201/300"/>
                    <div className="card-body">
                        <h4 className="card-title">Card title</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className='btn btn-primary'>Some Where</button>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://picsum.photos/202/300"/>
                    <div className="card-body">
                        <h4 className="card-title">Card title</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className='btn btn-primary'>Some Where</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Profile
