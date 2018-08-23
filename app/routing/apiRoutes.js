app.get('/api/friends', function (req, res) {
    return res.json(friendsArray);
})

app.post('/api/friends', function (req, res) {
    let newFriend = req.body;

    console.log(newFriend);

    friends.push(newFriend);
  
    res.json(newFriend);
})