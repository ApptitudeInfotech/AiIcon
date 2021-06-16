import React from "react";
import PropTypes from 'prop-types';


/**
 * Minimal Icon React Component.
 *
 * To Use AiIcon component, you must first add the Material Icons Font CSS.
 * 
 * @author [Apptitude Infotech](https://github.com/ApptitudeInfotech)
 */
const AiIcon = (props) => {
    const { icon = false, size = 24, color = 'inherit', className = '', style = {}, ...rest } = props;

    return (
        <i className={`material-icons ${className}`}
            style={{
                color,
                fontSize: `${size}px`,
                lineHeight: `${size}px`,
                verticalAlign: `middle`,
                ...style
            }}
            {...rest}
        >{icon}</i>
    );
};

AiIcon.propTypes = {
    /**
     * Icon name   
     */
    icon: PropTypes.string,
    /**
    * Icon size   
    */
    size: PropTypes.number,
    /**
    * Icon Color   
    */
    color: PropTypes.string,
    /**
    *@ignore
    */
    className: PropTypes.string,
    /**
     *@ignore
     */
    style: PropTypes.object,
};

AiIcon.defaultProps = {
    icon: 'stop',
    size: 24,
    color: 'inherit',
};

export default AiIcon;