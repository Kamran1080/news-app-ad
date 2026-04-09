export default async function handler(req, res) {
    const { query } = req.query;
    const API_KEY = process.env.GNEWS_API_KEY;
    
    const response = await fetch(
        `https://gnews.io/api/v4/search?lang=en&q=${query}&token=${API_KEY}`
    );
    const data = await response.json();
    
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
}
