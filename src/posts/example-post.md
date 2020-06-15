---
title: Example Post
description: An example post created using Markdown.
date: 2020-06-08
updated: 2020-06-14
tags:
    - tutorial
---

This is an example post, written in Markdown.<!-- excerpt -->

You can create your posts' content using plain text combined with Markdown syntax.  
 
The following is a non-exhaustive example of the basic markup codes and how they render in HTML. See this [Markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/) for more examples and other syntax.


<details>
<summary>View markup</summary>

```
# Heading 1
## Heading 2
### Heading 3

---  

This text is **bold**.  
This text is *italicized*.  
Here's a [link](https://www.example.com)  

> This is a blockquote. 

Ordered list
1. First item
2. Second item
3. Third item

Unordered list
- One
- Two
- Three

This is some inline `<code>`

\```
<p>
  This is a code block (remove the leading \ )
</p>
\```

### Images  
![An image of a dog](https://placedog.net/300 "A glorious dog")  

Your own images can be used by placing them in the `./src/assets/img/posts` directory and linked in your Markdown using `/assets/img/posts/{image}` as the location.

### Tables  
| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| Some data 1 | Some data 2 | Some data 3 |
| Some data 4 | Some data 5 | Some data 6 |


```

</details>

# Heading 1
## Heading 2
### Heading 3

---  

This text is **bold**.  
This text is *italicized*.  
Here's a [link](https://www.example.com)  

> This is a blockquote. 

Ordered list
1. First item
2. Second item
3. Third item

Unordered list
- One
- Two
- Three

This is some inline `<code>`

```
<p>
  This is a code block
</p>
```

### Images  
![An image of a dog](https://placedog.net/400 "A glorious dog")  

Your own images can be used by placing them in the `./src/assets/img/posts/` directory and linked in your Markdown using `/assets/img/posts/{image}` as the location.

### Tables  
| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| Some data 1 | Some data 2 | Some data 3 |
| Some data 4 | Some data 5 | Some data 6 |
