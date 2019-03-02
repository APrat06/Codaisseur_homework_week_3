import * as React from 'react';
import PropTypes from 'prop-types'

export default function ModelDetails (props) {
    const items = props.items
    // I need to pull the array stored in the store state, but couldn't figure out how
    return (
        <div>
            {items}
            {/* <ul>
                {items.map((item, i) => {
                    return (
                        <ul>
                            <li key={Object.keys(items)[i]}>Name: {Object.keys(items)[i]}</li>
                            <li key={item.manufacturer}>Manufacturer: {item.manufacturer}</li>
                            <li key={item.year}>Year: {item.year}</li>
                            <li key={item.origin}>Origin: {item.origin}</li>
                        </ul>
                    )
                })}
            </ul> */}
        </div>
    )
}

ModelDetails.propTypes = {
    items: PropTypes.array.isRequired
}