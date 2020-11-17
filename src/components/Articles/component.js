import React from 'react';
import { articlesList } from "../../data/articles";
import "./styles.css"
import Header from "./Header/component";
import BoxItem from "./Box/component";

class Articles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : articlesList
        }
        this.state.data.sort((prev, next) => (prev.upvotes < next.upvotes) ? 1 : -1)
    }

    sortByUpvotesDesc = () => {
        const descData = this.state.data.sort((prev, next) => (prev.upvotes < next.upvotes) ? 1 : -1)
        if(this.state.data.length > 0) {
            this.setState({
                data: descData
            })
        }
    }

    sortByDateDesc = () => {
        const descData = this.state.data.sort((prev, next) => (prev.date < next.date) ? 1 : -1)
        this.setState({
            data: descData
        })
    }

    render() {

        const {
            data
        } = this.state;
        return (
            <>
                <Header sortByUpvotesDesc={this.sortByUpvotesDesc} sortByDateDesc={this.sortByDateDesc}/>
                <div className="listitems">
                    {
                        data.length ? 
                        data.map((item, index) => (
                            <BoxItem key={index} item={item} />
                        )) : "Loading..."
                    }
                </div>
            </>
        )
    }
}

export default Articles;