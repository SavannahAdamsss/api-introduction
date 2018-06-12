var baseUrl = 'https://jsonplaceholder.typicode.com/posts/'


// Write a function that fetches data for one blog post from the API

function getBlogPosts(url) {
  fetch(url)                        // 1. request data
    .then(function(response) {      // 2. Receive a response
      return response.json()        // 3. Turn response into JSON so we can work with it
    })
    .then(function(blogPostsArray) {
      // 4. Data is now formatted to JSON so we can do whatever we want
      // Must do it here because of async
      // Work with data in some way
      // Often DOM manipulation

      // Check that our blog post data has come through properly
      console.log('DATA', blogPostsArray)

      // Call our function to add the blog posts to the DOM
      // Pass it the array of data
      addBlogPosts(blogPostsArray)
    })
}

// Invoke our getBlogPosts function and pass it the appropriate URL

// getBlogPosts(baseUrl + '1')


// Write a function that appends data from blog post to the page
  // Append to the section with class "posts"
  // title
  // body


// Reuse our getBlogPosts function to fetch data for the entire list of blog posts
getBlogPosts(baseUrl)

// Write a function that appends data from all blog posts 
// to the page
  // Take in an array of data as a parameter
  // Use a for loop

function addBlogPosts(postsArray) {
  for (i = 0; i < postsArray.length; i++) {
    // Create a list item as the container
    // Create an h2 element
    // Create a p element
    var newLi = document.createElement('li')
    var header = document.createElement('h2')
    var paragraph = document.createElement('p')
        
    // Give h2 text: title of the current blog post in the loop
    // Give p text: body of the current blog post in the loop
    var title = postsArray[i].title
    var body = postsArray[i].body
    header.innerText = title
    paragraph.innerText = body
    
    // Append h2 and p to li
    newLi.appendChild(header)
    newLi.appendChild(paragraph)

    // Check to make sure the list item has been constructed properly
    console.log(newLi)

    // Append the list item to the ul with class "posts"
    var posts = document.querySelector('ul.posts')
    posts.appendChild(newLi)
  }
}


// Write a function that POSTs data to the API
