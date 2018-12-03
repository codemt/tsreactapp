import * as React from 'react';
export interface IState {

            email : string,
            name : string


}

class MyData extends React.Component<IState> {


    state : IState = {

            email : "",
            name : ""


    }

    nameValue = (e : React.FormEvent<HTMLInputElement>)=>{

        e.preventDefault();
        console.log(e.currentTarget.value);
        // Set State , and log new value of state.
        this.setState({ 
            
            
            name : e.currentTarget.value    
        
        
        }, ()=> {


                console.log(this.state.name);

        });

    }

    emailValue = (e : React.FormEvent<HTMLInputElement>)=>{

        e.preventDefault();
        console.log(e.currentTarget.value);
        // Set State , and log new value of state.
        this.setState({ 
            
            
            email : e.currentTarget.value    
        
        
        }, ()=> {


                console.log(this.state.email);

        });

    }




  public render() {
    return (
      <div className="container">
        
        <h1> These are my Details </h1> 
            <p>  </p>
            <form>
            <input type="text" name="name"  id="name" value={this.state.name} onChange={this.nameValue} />

            <input type="email" name="email" id="email" value={this.state.email} onChange={this.emailValue} />
            
            </form>
      </div>
    )
  }
}

export default  MyData;