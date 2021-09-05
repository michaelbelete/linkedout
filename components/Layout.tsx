import React, { ReactNode } from "react";
type Props = {
    children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
    <div>
        <div className="layout">{props.children}</div>
        <style jsx global>{`
          body {
            background: #f3f3f3;
            font-size: 1.3rem;
            font-family: 'Roboto', sans-serif;
          }
        `}</style>
    </div>
);

export default Layout;
