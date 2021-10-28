/**
 * A panel page to edit certain specific product
 * 
 * full-page wrapper ()
 */

import React from 'react';
import { render } from 'react-dom';

class Panel extends React.Component {
    state = {
        active: false,
        component: null,
        callback: () => { },
    }

    open = options => {
        const { component, callback } = options;
        const _component = React.createElement(component, { close: this.close });
        this.setState({
            active: true,
            component: _component,
            callback: callback
        })
    }

    close = data => {
        this.setState({ active: false })
        this.state.callback(data)
    }

    render() {
        const _class = {
            true: 'panel-wrapper active',
            false: 'pabel-wrapper'
        }
        return (
            // control the panel
            <div className={_class[this.state.active]}>
                <div className="over-layer" onClick={this.close}>
                </div>
                <div className="panel">
                    <div className="head">
                        <span className="close" onClick={this.close}>x</span>
                        {this.state.component}
                    </div>
                </div>

            </div>
        );
    }
}

/**
 * create a container
 */
const _div = document.createElement('div');
document.body.appendChild(_div);

const _panel = render(<Panel />, _div);
console.log(_panel);
export default _panel