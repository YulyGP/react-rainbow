import React from 'react';
import PropTypes from 'prop-types';

export default function Header(props) {
    const { label, id } = props;
    if (label) {
        return (
            <h2 id={id} className="slds-nav-vertical__title slds-text-title_caps">
                {label}
            </h2>
        );
    }
    return null;
}

Header.propTypes = {
    label: PropTypes.node,
    id: PropTypes.string,
};

Header.defaultProps = {
    label: null,
    id: undefined,
};