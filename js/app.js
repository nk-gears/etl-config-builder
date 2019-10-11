class App extends React.Component {

  constructor(props) {
    super(props);
    this.config = {

    }
  }

  render() {

    const { Tabs, TabList, Tab, TabPanel } = window["react-web-tabs"];
    return (
      <div className="App">
        <hr />
        <div className="row">
          <div className="col">

            <h2 >SiteServed - Configuration Builder Tool</h2>

          </div>
        </div>
        <hr />
        <div className="row">
          <Tabs defaultTab="vertical-tab-five" vertical>
            <TabList>
              <Tab tabFor="vertical-tab-zero"  >Resources</Tab>
              <Tab tabFor="vertical-tab-one"  >Source Definition</Tab>
              <Tab tabFor="vertical-tab-two">Target Definition</Tab>
              <Tab tabFor="vertical-tab-three">Notifications</Tab>
              <Tab tabFor="vertical-tab-four"> Schedules</Tab>

            </TabList>
            <TabPanel tabId="vertical-tab-zero">
              <ETLResource apiConfig={this.config} />
            </TabPanel>
            <TabPanel tabId="vertical-tab-one">

            </TabPanel>
            <TabPanel tabId="vertical-tab-two">


            </TabPanel>
            <TabPanel tabId="vertical-tab-three">

            </TabPanel>
            <TabPanel tabId="vertical-tab-four">

            </TabPanel>
            <TabPanel tabId="vertical-tab-five">

            </TabPanel>
            <TabPanel tabId="vertical-tab-six">
            <div>
            <div className="card" >
            <div className="card-body">

            </div>
            </div>

            </div>

            </TabPanel>
          </Tabs>



        </div>
      </div>

    )
  }
}