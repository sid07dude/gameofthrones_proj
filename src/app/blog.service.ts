import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public currentBlog;
  public allBlogs = [

  ]
  constructor() {
    console.log("service constructor is called");
  }


  //Method to return all blogs
  public getAllBlogs(): any {

    return this.allBlogs;
  }
  //method to return a particular blog
  public getSingleBlogInformation(currentBlogId): any {
    //using a for of loop here from typescript
    //http://www.typescritlang.org/docs/handbook/iterators-and-generators.html

    for (let blog of this.allBlogs) {
      if (blog.blogId == currentBlogId) {
        this.currentBlog = blog;
      }
    }
    console.log(this.currentBlog);
    return this.currentBlog;
  }//end of get blog information function
}
