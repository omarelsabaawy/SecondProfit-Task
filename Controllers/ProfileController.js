exports.profilePage = (req, res) => {
    res.render('profile', { isAuthenticated: req.oidc.isAuthenticated(), user: req.oidc.user });
};
