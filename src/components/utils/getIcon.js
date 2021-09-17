import React from 'react';
import * as Icons from '@material-ui/icons';

export default function GetIcon({ iconName, classes }) {
    let DynamicIcon = Icons[iconName];
    return(
        <DynamicIcon className={classes}/>
      );
}