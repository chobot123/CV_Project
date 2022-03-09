import React, { Component } from "react";
import uniqid from "uniqid";

class Description extends Component {
    constructor() {
        super();
        this.state = {
            description : 'Financial Advisor with 7+ years of experience ' +
                            'delivering financial/advisory services to high ' +
                            'value clients',
            uniqid : uniqid(),
        }

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange = (e) => {
        this.setState({
            description : e.target.value,
        })
    }

    render () {
        const {description} = this.state;
        return (
            <div className="profile-description">
                <textarea 
                    onChange={this.handleChange}
                    value={description}
                    rows={4}
                    placeholder="Describe yourself!..."
                />
            </div>
        )
    }
}

export default Description;