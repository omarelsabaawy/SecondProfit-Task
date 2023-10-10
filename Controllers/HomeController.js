const axios = require('axios');

// Fetch data from the Restcountries API
const fetchCountryData = async () => {
    try {
        const response = await axios.get('https://restcountries.com/v3/all');
        return response.data.map((country) => ({
            name: country.name.common,
            flagUrl: country.flags[0],
        }));
    } catch (error) {
        console.error('Error fetching country data:', error);
        return [];
    }
};

exports.homePage = async (req, res) => {
    if (req.oidc.isAuthenticated()) {
        const countryData = await fetchCountryData();

        res.render('home', {
            isAuthenticated: req.oidc.isAuthenticated(),
            user: req.oidc.user,
            countryData
        });
    } else {
        res.render('home', {
            isAuthenticated: req.oidc.isAuthenticated(),
            user: req.oidc.user,
        });
    }
};