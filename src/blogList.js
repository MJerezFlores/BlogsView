import React, {Component} from 'react';
import data from './data.json';


export default props =>
    <div class="blogContainer" >
        <PostComplete posts={data} />
    </div>;


class PostComplete extends Component{
    render() {
        const rows = [];
        this.props.posts.forEach((post) =>{
            rows.push(
                <Author
                    author={post.author}
                    key={post.author.firstName}
                />
            );
            rows.push(
                <PostInformation
                    post={post}
                    key={post.id}
                />
            );
            rows.push(
                <Stadistics
                    post={post}
                    key={post.numberOfViews}
                />
            );
        });
        return (
            <tbody>{rows}</tbody>
        );
    }
}


class Author extends Component{
  render(){
      const author = this.props.author
    return (
      <div class="authorColContainer">
          <div class="authorColPhoto">
          <img src={author.profilePhoto}/>
        </div>
          <div class="authorColInformation">
              <h1>{author.firstName}</h1>
              <p>{author.degree.name}</p>
          </div>
      </div>
    );
  }
}
class PostInformation extends Component{
  render(){
      const post = this.props.post;
    return(
     <div>
      <div class="postColContainer">
          <img src={post.image}/>
    </div>
        <div class="postColContainer">
            <h2>{post.topic.name}</h2>
            <p>{post.text}</p>
    </div>
      </div>
    );
  }
}

class Stadistics extends Component{
  render() {
      const post = this.props.post
    return (
      <div class="stadisticsColContainer">
          <div class="stadisticsColReading">
          <p>Student life · {post.readingTime}</p>
          </div>
              <div class="stadisticsColViews">
          <p>{post.numberOfViews} views</p>
              </div>
              </div>
    );
  }
}
