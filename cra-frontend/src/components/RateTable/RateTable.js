import React, { Component } from 'react';
import './RateTable.css';

// Components //
import RateTableRow from './RateTableRow';

class RateTable extends Component {

    render() {

        const { sites } = this.props;

        return(
            <table>
                <tbody>
                    <tr>
                        <th></th>
                        <th className='col-header'>Price/Night</th>
                        <th className='col-header'>Price/Week</th>
                        <th className='col-header'>Price/Month</th>
                    </tr>
                    {
                        sites.map(site => (
                            <RateTableRow key={site.id} site={site} />
                        ))
                    }
                </tbody>
            </table>
        );
    }
}

export default RateTable;
