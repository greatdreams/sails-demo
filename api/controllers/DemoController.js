/**
 * Created by greatdreams on 8/15/15.
 */
module.exports = {
  index: function(req, res) {
    res.view("index",{title: 'home'})
  },
  hi: function (req, res) {
    return res.send("Hi there!");
  },
  bye: function(req, res) {
    return res.redirect("http://bbs.byr.cn/#!default");
  }
};
