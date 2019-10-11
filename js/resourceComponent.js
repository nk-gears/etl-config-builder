const {Button, ButtonGroup} = Reactstrap;


const resourceList=["ftp","email","blob"];
class ETLResource extends React.Component {
  handleChange = ({target}) => {
    this.setState(
      {value: {...this.state.value, [target.name]: target.value}},
      function() {
        console.log(this.state);
      }
    );
  };

  constructor(props) {
    super(props);
    this.baseApiUrl = props.apiConfig.baseUrl;
    this.state = {
      active: false

    };


  }

  toggleContent = (event) => {
    const currentState = this.state.active;
    event.preventDefault();
    this.setState({
      resourceSelection: event.target.value,
      active: !currentState
    })
  }
  render() {

      const resourceSelection=this.state.resourceSelection;
    return (
      <div>
        <div>
          <div className="card">
            <div className="card-body">
              <h4>Resource Config Builder</h4>
              <hr />

              <form>
                <div className="form-group">
                  <ButtonGroup>
                    {
                        resourceList.map(p=>{
                           return ( <Button
                            role="group"
                            data-toggle="button"
                            className="btn btn-sm"
                            className={resourceSelection ===p ? 'active' : null} color="secondary" value={p}
                            color="secondary"
                            onClick={this.toggleContent}

                            >{p}</Button>
                           )
                        })
                    }
                  </ButtonGroup>
                  <table>
                    <tbody></tbody>
                  </table>
                </div>

                <hr />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
