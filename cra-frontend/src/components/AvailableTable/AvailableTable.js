import React, { Component } from 'react';

class AvailableTable extends Component {

    render() {

        const { isLoaded, sites, nights } = this.props;

        return(
            <table>
                <tbody>
                    <tr className='t-header-row'>
                        <th>Accomodation Type</th>
                        <th>Sleeps</th>
                        <th>
                            Price<br/>
                            ({nights} { nights > 1 ? 'nights)' : 'night)'}
                        </th>
                        <th>Quantity</th>
                    </tr>
                    {
                        isLoaded ?
                        sites.map(site => (
                            <tr key={site.id}>
                                <td className='bold'>{site.name}</td>
                                <td className='center'>2</td>
                                <td className='center price'>
                                    {
                                        nights < 7 ?
                                            parseInt(site.price_night) * nights
                                        :
                                        nights >= 7 &&
                                        nights < 30  &&
                                        site.price_week ?
                                            site.price_week
                                        :
                                        nights > 30 &&
                                        site.price_month ?
                                            site.price_month
                                        :
                                        parseInt(site.price_night) * nights
                                    }
                                    <span>$</span>
                                </td>
                                <td className='td-site-qty'>
                                    <select name={site.name}
                                            id='site-qty'
                                            onChange={(e) => {
                                                this.props.handleQuantityChange(e);
                                            }}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                        <option value='6'>6</option>
                                    </select>
                                </td>
                            </tr>
                        ))
                        : null
                    }
                </tbody>
            </table>
        );
    }
}

export default AvailableTable;
