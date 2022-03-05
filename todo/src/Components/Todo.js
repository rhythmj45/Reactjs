import React, { Component } from 'react'

export default class Todo extends Component {
  constructor()
  {
    super();
    this.state={
      tasks:[{id:1,txt:'First task'},{id:2,txt:'Second task'},{id:3,txt:'Third task'}],
      currTask:''
    }
  }

  handlechange=(e)=>{
    let val = e.target.value;
    console.log(val);
    this.setState({
      currTask:val
    })
  }
  handleSubmit=()=>{
    // this.state.tasks.push({id:this.state.tasks.length+1,txt:this.state.currTask})
    // this.state.currTask='';
    // console.log(this.state);
    //this.setState
if(this.state.currTask!=''){
    let nta = [...this.state.tasks,{id:this.state.tasks.length+1,txt:this.state.currTask}];
     this.setState({
       tasks:nta,
       currTask:""
     })
  }
}
onDelete=(id)=>{
let nfa = this.state.tasks.filter(function(tobj){
  return tobj.id!=id
})
this.setState({
  tasks:nfa
})
}

  render() {
    
    return (
      //JSX
      <div>
        <div className='input-container'>
          <input value={this.state.currTask} onChange={this.handlechange} type='text'></input>
          <button onClick={this.handleSubmit}>Add</button>
        </div>

        <div className='class-list'>
          <ul>
            {
              this.state.tasks.map(function(tobj){
                return(
                  <li key={tobj.txt}> 
                  {/* react demands this key for every li object to identify it uniquely */}
                    <h1>{tobj.txt}</h1>
                    <button onClick={()=>{
                      this.onDelete(tobj.id)
                    }}>Delete </button>
                  </li>

                )
              }.bind(this))
  }
          </ul>
        </div>
      </div>
    )
  }
}
