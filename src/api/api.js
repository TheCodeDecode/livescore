const API_KEY ='sp7cwxyFuZgKM1UQ439jbMv7wvr2';


export const fetchMatches = () => {
const url =`https://cricapi.com/api/matches?apikey=${API_KEY}`;

return fetch(url)
.then((response) => response.json())
.catch((eror)=>alert(eror));

};

export const fetchMatchDetail =(id) =>{
    const url =`https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;
    return fetch(url)
    .then((response) => response.json())
    .catch((eror)=>alert(eror));
}