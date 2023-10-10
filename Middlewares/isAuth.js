module.exports = (req, res, next) => {
    if (req.oidc.isAuthenticated()) {
        // User is authenticated, proceed to the next middleware or route
        next();
    } else {
        // User is not authenticated, redirect to the login page
        res.redirect('/login'); // Change the URL to your login route
    }
};