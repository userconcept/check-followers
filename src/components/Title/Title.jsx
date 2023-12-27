import { createElement } from 'react';

function Title({ className, level, children }) {
    return createElement(`h${level}`, { className: `title ${className ? className : ''}` }, children);
}

export default Title;
