import React from 'react';
import "./styles.css"
import ArticleBoxImg from  "../../../resources/images/preload.png";

class Header extends React.Component {

    render() {

        const {
            item
        } = this.props;
        return (
            <>
                <div className="boxwrapper">
                        <div className="item">
                            <img src={ArticleBoxImg} />
                            <span className="title" >{item.title}</span>
                            <span className="date" >Publish Date: {item.date}</span>
                            <span className="upvotes" >Upvotes: {item.upvotes}</span>
                        </div>
                </div>
            </>
        )
    }
}

export default Header; 