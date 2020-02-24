'use strict';

const e = React.createElement;

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        // const defXML = verimatrixXMLs["ADD_DEVICE"];
        this.state = {
            ftpServer:"ftphost.com"
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.nsc_id});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.ftpServer);
        // event.preventDefault();
    }

    render() {
        const defaultName = "Mirra";

        return (<form onSubmit={this.handleSubmit} action="/" method="post">
                    <label>
                        FTP host:
                        <input type="text"name="ftpServer" value={defaultName} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>);
    }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<NameForm />, domContainer);
