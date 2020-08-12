import { Component } from 'react'
import '../styles/AutoComplete.css';

class Autocomplete extends Component {

    set value(newValue) {
        this.refs.searchTerm.value = newValue
    }

    get value() {
        return this.refs.searchTerm.value
    }

    render() {

        const { suggestions=[], onChange=f=>f, onClear=f=>f, fetching=false } = this.props


        return (
            <div className="autocomplete">
              <h2>{suggestions}</h2>
                <input ref="searchTerm"
                       type="text"
                       onChange={onChange}
                       onFocus={onChange}
                       onBlur={() => setTimeout(onClear, 250)}
                />

                <div className="suggestions">
                    {suggestions.map((item, i) =>
                        <p key={i} onClick={() => {
                            this.refs.searchTerm.value = item
                            onClear()
                        }}>{item}</p>
                    )}
                </div>

            </div>
        )
    }

}

export default Autocomplete;
