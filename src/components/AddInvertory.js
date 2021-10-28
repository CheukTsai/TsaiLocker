import React from 'react';

class AddInvertory extends React.Component {
    render() {
        return (
            <div className="inventory">
                <p className="title has-text-centered">
                    Inventory
                </p>
                <div className="control">
                    <input type="text" />
                </div>
                <div className="control">
                    <button className="button" onClick={() => { this.props.close('AddInventory Data') }
                    }>Cancel
                    </button>
                </div>
            </div>
        )
    }
}

export default AddInvertory;