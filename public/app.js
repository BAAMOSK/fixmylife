

$.getJSON('https://reddit.com/r/relationships.json?limit=10', function(results) {
 
  for(let i = 0; i < 10; i ++) {
    const question = results.data.children[i].data.selftext;
    const htmlString = `<a href="#"><li>${question}</li><a/><br>`;
    $('.questions').append(htmlString);
  }
  //console.log(results.data.children[0].data.selftext);
});

// $.getJSON(
//         "http://www.reddit.com/r/pics.json?jsonp=?",
//         function foo(data)
//         {
//           $.each(
//             data.data.children.slice(0, 10),
//             function (i, post) {
//               $("#reddit-content").append( '<br>' + post.data.title );
//               $("#reddit-content").append( '<br>' + post.data.url );
//               $("#reddit-content").append( '<br>' + post.data.permalink );
//               $("#reddit-content").append( '<br>' + post.data.ups );
//               $("#reddit-content").append( '<br>' + post.data.downs );
//               $("#reddit-content").append( '<hr>' );
//             }
//           )
//         }
//       )
// function getItems() {
//   $('.container').append(data);
// }

// getItems();
