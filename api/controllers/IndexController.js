/**
 * Created by greatdreams on 8/15/15.
 */
module.exports = {
  index: function(req, res) {
      res.view("index",{title: '主页'})
  }
};
