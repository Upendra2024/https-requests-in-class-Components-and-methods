import React from 'react';
import axios from 'axios';

 export class PostList extends React.Component{

  constructor(){
    super()
    this.state ={
      posts : [],
      errorMsg :''
    }
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) =>{
       console.log(res)
       this.setState({
         posts:res.data
       })
    }).catch((error)=>{
       console.log(error)
      this.setState({
        errorMsg : 'error retreiving data'
      })
    })
  }
  render(){
    const{posts , errorMsg} = this.state
    return(
      <div>
        Data List
        {
         posts.length ?
         posts.map(post => 
           <div key ={post.id}>{post.title}</div>
         ):null
        }
        {errorMsg ? <div>{errorMsg}</div> :null}
        
      </div>
    )
  }
}
