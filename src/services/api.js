const API_KEY = "46bdd7bea8ca2f5ad261dab37d1b8661";
const API_BASE = "https://api.themoviedb.org/3/";

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

const api = {
    getHomeList: async () => {
        return [
            {
                slug: 'trending',
                title: 'Em Alta',
                items: await basicFetch(`/trending/all/week?api_key=${API_KEY}&language=pt-BR`),
            },
            {
                slug: 'movies',
                title: 'Os Melhores Filmes',
                items: await basicFetch(`/trending/movie/week?api_key=${API_KEY}&language=pt-BR`),
            },
            {
                slug: 'series',
                title: 'As Melhores Séries',
                items: await basicFetch(`/trending/tv/week?api_key=${API_KEY}&language=pt-BR`),
            },
        ]
    }
}

export default api;