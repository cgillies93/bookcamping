import React, { Component } from 'react';

class RateTableRow extends Component {

    render() {

        const { site } = this.props;

        return(
            <tr >
                <th className='site-name-wrap'>
                <p className='site-type'>{site.type}</p>
                <p>{site.name}</p>
                </th>
                {
                    site.price_night ?
                        <td>{site.price_night.toFixed(2)}$</td>
                    :
                    null
                }

                {
                    site.price_week ?
                    <td>{site.price_week.toFixed(2)}$</td>
                    :
                    null
                }
                {
                    site.price_month ?
                    <td>{site.price_month.toFixed(2)}$</td>
                    :
                    null
                }

            </tr>
        );
    }
}

export default RateTableRow;
