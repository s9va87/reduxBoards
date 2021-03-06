import React from 'react';
// import Column from "./Colon";
import {Row, connect} from "reactstrap";

function Board(props) {

    const {cards} = props;

    return (
        <Row>
            <h2>Boards</h2>
            {/*{columns.map(el => <Column column={el} cards={cards}/>)}*/}
        </Row>
    );
}

const mapStateToProps = (state) => ({
    cards: state.cards
})
export default connect(mapStateToProps)(Board);
