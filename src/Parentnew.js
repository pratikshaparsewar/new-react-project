  import React, { Component } from 'react';
import data from './data.json';
import './App.css';

 var imageStyle = {
            width: '100%'
        }
 var pullLeft = {
    textAlign: "left"
 }
 var inlineBlock = {
    margin: "0px 5px",
    display : 'inline-block'
 }


export default class Parentnew extends Component {

    constructor(props) {
        super(props);
        var data = require('./data.json');
        this.state = {
            blogs: data,
            likes : 0
        };
        this.addCommentText = this.addCommentText.bind(this);
        this.submitComment = this.submitComment.bind(this);
          this.toggleLike = this.toggleLike.bind(this);
    }

    addCommentText(event) {
        this.setState({
          commentText: event.target.value
        });
    }


      submitComment(event) {
        var blogs = this.state.blogs;
        var commentText = this.state.commentText;
        var updatedBlog = {
          likes: 0,
          text: commentText,
          userObj: {
              "firstName": "default",
              "lastName": "default",
              "image": "https://plus.google.com/u/0/_/focus/photos/private/AIbEiAIAAABDCLjjm5Opq7jXIyILdmNhcmRfcGhvdG8qKDQ5ZmEyYzQxYTk4YmYwMTUwZWY3NTc3YmFjMWEzY2YxZWNkMTM2ZjYwAXIelCC5ZS4XHVe0ZqlPIRG2eQjk?sz=32"
          }
      };



      blogs.push(updatedBlog);
      this.setState({
        blogs: blogs
      });
    }

    toggleLike(event, index) {
      var blogs = this.state.blogs;
      if (blogs[index].liked) {
        blogs[index].likes--;
      } else {
        blogs[index].likes++;
      }
      blogs[index].liked = !blogs[index].liked;
      this.setState({
        blogs: blogs
      });
    }

    render() {
        return ( <div>
              <div className="container">
                    {
                        this.state.blogs.map((blog, index) => {

                            return (
                                <div className="post viaAction" key={index}>
                                    <div className="content" >
                                        <div className="head">
                                            <div className="profPic">
                                            <img src={blog.userObj.image} style={imageStyle} alt=""/>
                                            </div>
                                            <div className="topic">
                                            <div className="name"><a className="important" href="#">{blog.userObj.firstName} {blog.userObj.lastName} </a></div>
                                            <div className="postData" >{blog.text} </div>
                                            </div>
                                            <div className="clear"></div>
                                        </div>
                                        <div className="body" style={pullLeft}>
                                            <div className="postContent" style = {inlineBlock}>
                                            <a href="#" onClick={()=>{this.toggleLike(blog,index)}}>{blog.liked ? "Unlike": "Like"}</a>
                                            </div>
                                            <div className="postActions" style = {inlineBlock}><a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i></a> · <a href="#" >{blog.likes}</a></div>
                                        </div>
                                    </div>

                                </div>
                            );
                        })
                    }
                    <div >
                     <input type="text" onChange={this.addCommentText} value={this.commentText}/>
                    </div>

                    <button type="submit" onClick={this.submitComment}>Submit</button>

                </div>
            </div>

        );
    }

}
