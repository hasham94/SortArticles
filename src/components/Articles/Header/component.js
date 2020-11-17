import React from 'react';
import "./styles.css"
class Header extends React.Component {

    render() {

        const {
            sortByUpvotesDesc,
            sortByDateDesc
        } = this.props;
        return (
            <>
                <div className="headerwrapper">
                    <h1>Sort Articles</h1>
                    <button data-testid="sortbyupvotes" onClick={sortByUpvotesDesc}>Most Upvoted</button>
                    <button data-testid="sortbydates" onClick={sortByDateDesc}>Most Recent</button>
                </div>
            </>
        )
    }
}

export default Header; 