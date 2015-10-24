/**
 * Created by greatdreams on 8/15/15.
 */
module.exports = {
    register: function(req, res) {
        res.view("register",{layout:'', title: '用户注册'})
    }
};
