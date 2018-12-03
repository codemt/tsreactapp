import * as React from 'react';

export interface IMyDetails {

        name : string
    
}

export interface IState {

            email : string,
            name : string


}

class MyData extends React.Component<IMyDetails,IState> {


    state : IState = {

            email : "",
            name : ""


    }

    handleChange = (e : React.FormEvent<HTMLInputElement>)=>{

        e.preventDefault();
        console.log(e.currentTarget.value);
        // Set State , and log new value of state.
        this.setState({ 
            
            
            
        
        
        }, ()=> {


                console.log(this.state.name);

        });

    }

  public render() {
    return (
      <div className="container">
        
        <h1> These are my Details </h1> 
            <p>  </p>
            <input type="text" name="name"  id="name" value={this.state.name} onChange={this.handleChange} />

            <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleChange} />
      </div>
    )
  }
}

export default  MyData;