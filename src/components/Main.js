import React from 'react';
import ListItems from "./ListItems";
import ToDoHeader from "./ToDoHeader";


class Main extends React.Component{
    state = {
        inputValue: "",
        dataForListItems: ""
    };

    onBtnClick = () => {
        this.setState({
            dataForListItems : this.state.inputValue
        })
    };

    onInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    };

    render() {
        return (
            <div>
                <ToDoHeader inputValue={this.state.inputValue} onInputChange={this.onInputChange} onBtnClick={this.onBtnClick}/>
                <ListItems inputValue={this.state.dataForListItems}/>
            </div>
        );
    }
}



export default Main;
