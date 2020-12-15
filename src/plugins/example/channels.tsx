/* eslint-disable */
// @ts-nocheck
import React from 'react';
import Table from './table';
import { API_STATUSES } from './constants';
import Packages from './packages';
import { getChannels } from './api';

/**
 *
 */
class ChannelsApp extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedChannel: null,
      channels: null,
      apiStatus: API_STATUSES.PENDING,
    };
  }

  async componentDidMount() {
     const { data: channels } = await getChannels();
      // .then(response => response.json());
     console.log(channels);
     this.setState({
       channels,
       apiStatus: API_STATUSES.SUCCESS,
     });
  }

  selectChannel = (selectedChannel) => {
    this.setState({ selectedChannel });
  };

  render() {
    const { selectedChannel, apiStatus, channels } = this.state;

    const channelColumns = [
      {
        Header: 'Name',
        accessor: 'name',
        Cell: ({ row }) => (
          <button onClick={() => this.selectChannel(row.values.name)}>{ row.values.name }</button>
        )
      },
      {
        Header: 'Description',
        accessor: 'description'
      },
      {
        Header: 'Private',
        accessor: 'private',
        Cell: ({ row }) => row.values.private ? 'Yes' : 'No',
      },
    ];

    if(apiStatus === API_STATUSES.PENDING) {
      return (
        <div>Loading list of available channels</div>
      );
    }

    return selectedChannel ? (
      <Packages
        channel={selectedChannel}
        onBack={() => this.selectChannel(null)}
      />
    ) : (
      <>
        <h3>Channels</h3>
        <Table
          columns={channelColumns}
          data={channels}
        />
      </>
    );
  }
}

export default ChannelsApp;
