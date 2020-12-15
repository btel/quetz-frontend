/* eslint-disable */
// @ts-nocheck
import Table from './table';
import React from 'react';
import { API_STATUSES } from './constants';
import { getPackages } from './api';
import PackageVersions from './versions';

class Packages extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      packages: null,
      apiStatus: API_STATUSES.PENDING,
    };
  }

  async componentDidMount() {
    const { channel } = this.props;
    const { data: packages } = await getPackages(channel);
    // .then(response => response.json());
    this.setState({
      packages,
      apiStatus: API_STATUSES.SUCCESS,
    });
  }

  renderRowSubComponent = ({ row }) => {
    const { channel } = this.props;
    const packageName = row.values.name;

    return <PackageVersions
      selectedPackage={packageName}
      channel={channel}
    />;
  };

  render() {
    const { channel, onBack } = this.props;

    const { packages, apiStatus } = this.state;

    const packageColumns = [
      {
        id: 'expander',
        Header: () => null,
        Cell: ({ row }) => (
          <span
            {...row.getToggleRowExpandedProps({
              style: {
                paddingLeft: `${row.depth * 2}rem`
              }
            })}
          >
              {row.isExpanded ? '👇' : '👉'}
            </span>
        )
      },
      {
        Header: 'Package Name',
        accessor: 'name',
      },
      {
        Header: 'Description',
        accessor: 'description'
      },
      {
        Header: 'Summary',
        accessor: 'summary'
      },
    ];

    if(apiStatus === API_STATUSES.PENDING) {
      return (
        <div>Loading list of packages in {channel}</div>
      );
    }

    return (
      <>
        <button onClick={onBack}>Back</button>
        <h3>Packages in {channel} channel</h3>
        <Table
          columns={packageColumns}
          data={packages}
          renderRowSubComponent={this.renderRowSubComponent}
        />
      </>
    )
  }
}

export default Packages;
