import React from 'react';
import {
    Link
} from 'react-router';

class Commet extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const content = this.props.getContent ? this.props.getContent : ''
        return (
            <div>
                    <div>
                        <checkBox  value={ content}/>
                    </div>   
            </div>
        );
    }
}
export default Commet