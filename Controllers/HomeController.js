const axios = require('axios');
const { createClient } = require('redis');

const fetchCountryData = async () => {

    const client = await createClient({
        host: '127.0.0.1',
        port: 6379,
    })
        .on('error', err => console.log('Redis Client Error', err))
        .connect();

    const countryData = await client.get('countryData');

    if (countryData) {
        await client.disconnect();
        return JSON.parse(countryData);
    } else {
        try {
            const response = await axios.get('https://restcountries.com/v3/all');
            const countryData = response.data.map((country) => ({
                name: country.name.common,
                flagUrl: country.flags[0],
            }));

            await client.set('countryData', JSON.stringify(countryData));
            await client.disconnect();

            return countryData;
        } catch (error) {
            console.error('Error fetching or caching country data:', error);
            return [];
        }
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