import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import Intro from '../components/intro';
import Mission from '../components/mission';

export default function Home() {
    return (
        <div>
            <Intro />
            <Mission />
        </div>
    );
}