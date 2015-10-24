/**
 * Created by greatdreams on 8/15/15.
 */
module.exports = {
    login: function(req, res) {
        if(req.session.authenticated)
            res.redirect("/")
        else
            res.view("login",{layout:'', title: '用户登录界面'})
    },
    index: function(req, res) {
        if(req.session.authenticated)
            res.redirect("/")
        else
            res.view("login",{title: '用户登录界面'})
    }
};
