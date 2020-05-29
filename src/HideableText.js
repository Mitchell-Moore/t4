import React from 'react'

class HideableText extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isHidden: false,
        }
    }

toggelIsHidden(){
    this.setState((currentState) => ({
        isHidden : !currentState.isHidden,
    }));
}

    render(){
        return(
            <div>
                <button onClick={() => this.toggelIsHidden()}>Toggle</button>
                <p>{!this.state.isHidden && this.props.text}</p>
                
            </div>
        )
    }
}