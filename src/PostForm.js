import React from 'react';
import axios from 'axios';

 export class PostForm extends React.Component{

  constructor(){
    super()
    this.state = {
      userId:'',
      title : '',
      body :'',
      posts :[]
    }
  }

  changeHandler = (e) =>{
   
    this.setState({[e.target.name]:e.target.value})
    
  }
submitHandler=(e) =>{
  e.preventDefault()
  console.log(this.state)
  axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
  .then(res =>{
    console.log(res)
    this.setState({
      posts : res.data
    })
  })
  .catch(error =>{
    console.log(error)
  })
}


  render(){
    const{userId,title,body ,posts} = this.state
    return(
      <div>
        <form action="" onSubmit = {this.submitHandler}>
          <div>
          <input type="text" name ="userId" value={userId} onChange = {this.changeHandler}/></div><br/>
          <div>
          <input type="text" name ="title" value={title}  onChange = {this.changeHandler}/></div><br/>
          <div>
          <input type="text" name = "body" value={body} onChange = {this.changeHandler}/></div><br/>
          <button type ="submit">Submit</button>
        </form>

        
          {
            posts.length ?
            posts.map((post)=>{
              <div key={post.id}>{post.title}</div>
            }):null

          }
       
      </div>
    )
  }
}
