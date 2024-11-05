// Create web server
// Create a new comment
app.post('/comments', function(req, res) {
  // Get the comment from the request
  var comment = req.body.comment;
  // Add the comment to the database
  db.addComment(comment, function(err) {
    if (err) {
      res.status(500).send('Error adding comment to database');
    } else {
      res.status(201).send('Comment added');
    }
  });
});