import React from 'react';
import { SupportVersion } from '../enum';

const VersionOption = ({ defaultValue, onSelectedChange }) => {
    const options = React.useMemo(() => Object.keys(SupportVersion).map(k => {
        const version = SupportVersion[k];
        return <option key={version} value={version}>{version}</option>
    }), []);

    return (
        <select id="react-version" name="react-version" defaultValue={defaultValue} onChange={onSelectedChange}>
            {options}
        </select>
    );

}

export default VersionOption;