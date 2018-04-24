import React from 'react'

class Message extends React.Component {

    render() {
        return (
            <React.Fragment>
                {this.props.message}
            </React.Fragment>
        )

    }


}

export default Message