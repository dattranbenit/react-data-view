import React from 'react';
import Theme from './../themes/getStyle';

import {
    CircleMinus,
    CirclePlus,
    SquareMinus,
    SquarePlus,
    ArrowRight,
    ArrowDown
} from './icons';

export function ExpandedIcon(props) {
    const { theme, iconStyle } = props;
    switch (iconStyle) {
        case 'triangle':
            return (
                <></>
            );
        case 'square':
            return (
                <></>
            );
        default:
            return (<></>
            );
    }
}

export function CollapsedIcon(props) {
    const { theme, iconStyle } = props;
    switch (iconStyle) {
        case 'triangle':
            return (
                <></>
            );
        case 'square':
            return (
                <></>
            );
        default:
            return (
                <></>
            );
    }
}
