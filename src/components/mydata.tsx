import * as React from 'react'

export interface IMyDetails {

        name : string
    
}

class MyData extends React.Component<IMyDetails> {

  public render() {
    return (
      <div className="container">
        
        <h1> These are my Details </h1> 
            <p>  {this.props.name} </p>
      </div>
    )
  }
}

export default  MyData;