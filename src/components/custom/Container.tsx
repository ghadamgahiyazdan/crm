import { Children } from '@/types';
import React from 'react';

const Container:React.FC<Children> = ({children}) => {
    return (
        <div className='xl:container xl:mx-auto px-2 xl:px-0'>
            {children}
        </div>
    );
};

export default Container;