import apiClient from './Client'

const getAll= async ()=>{
    try {
        const response=await apiClient.get('/news');
        console.log(response);
        if(response.data.success){
            return response.data.news
        }
    } catch (error) {
        return [];
        console.log('Error while getting all news',error.message);
    }
}

const getSingleNew = async (id) =>{
    try {
        const response=await apiClient.get(`/news/single/${id}`)
        if(response.data.success){
            return response.data.news
        }
    } catch (error) {
        console.log('error while getting single news',error);
    }
}

const getByCategory=async (category,qty)=>{
    const endpoint=qty ? `/news/${category}/${qty}`:`/news/${category}`
    //isteğe bağlı qty parametresinin olması veya olmaması durumunda oluşacak olan
    //endpointleri belirledik.
    try {
        const response=await apiClient.get(endpoint);
        if(response.data.success){
            return response.data.news
        }
    } catch (error) {
        return [];
        console.log('Error while getting categories news',error.message);
    }
}

const searchPost = async (query) => {
    if(!query) return {}
    try {
        const response=await apiClient.post(`/news/search/${query}`);
        return response.data;
    } catch (error) {
        console.log('Error while searching-SearchPost',error);
    }
}

export default{
    getAll,
    getByCategory,
    getSingleNew,
    searchPost
}