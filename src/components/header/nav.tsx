import * as React from 'react';
import { Link } from 'gatsby';
import { Container, List } from '@material-ui/core';

export interface ILink {
    name: string
    url: string
}

export interface INavProps {
    links: ILink[]
}
 
export interface INavState {
    activeLink: ILink
}
 
class Nav extends React.Component<INavProps, INavState> {
    constructor(props: INavProps) {
        super(props);
        this.state = { activeLink: this.props.links[0]  };
    }
    render() { 
        return ( 
            <Container>
                <Link to="/">Home</Link> |
                <Link to="/about">About</Link> |
                <Link to="/products">Products</Link>
            </Container>
        ) ;
    }
}
 
export default Nav;