import React, { useState } from 'react';
import Header from '../Header';
import Sidebar from '../SideBar';

interface PagelayoutProps {

}

const PageLayout: React.FC<PagelayoutProps> = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className={`full-page ${isOpen && 'open'}`}>
            <Header isHeader={isOpen} setIsHeader={setIsOpen} />
            <Sidebar isHide={isOpen} setIsHeader={setIsOpen}  />
            {children}
        </div>
    )
}

export default PageLayout;