const unAccesKey = '1a547c717f631d0009aa7c6ec1088267445a7b3866e583453dfe44d5fdb7143a';
const unEndPoint = 'https://api.unsplash.com/search/photos';

const yxAccessKey = 'trnsl.1.1.20180928T211932Z.8840d6950d28ecc1.c9b205aa4a27638fea020cfed50dbcafe708cf74';
const yxBaseUrl = 'https://translate.yandex.net/api/v1.5/tr.json/translate';

var imagesList = [];

async function getImages(query){
    // Translate using Yandex API
    let respQuery = await fetch(yxBaseUrl +
                                '?key=' + yxAccessKey +
                                '&text=' + query +
                                '&lang=' + 'es-en');
    
    let jsonResp = await respQuery.json();
    let enQuery = await jsonResp.text;        
    enQuery = _.concat(enQuery,query);
    enQuery = _.uniq(enQuery);
    enQuery = _.reduce(enQuery,function(a, b){ return a + ' ' + b; });                         
            
    // First Request to Unsplash to get the total pages
    //Request images for enQuery to Unsplash
    let response = await fetch(unEndPoint + 
                              '?query=' + enQuery + 
                              '&client_id=' + unAccesKey +
                              '&per_page=' + 20);
    let jsonResponse = await response.json();
    //console.log("Respuesta de Unsplash:");
    //console.log(jsonResponse);
    let total_images = jsonResponse.total;
    let total_pages = jsonResponse.total_pages;
    imagesList = await jsonResponse.results;                                
    createImagesLodash(imagesList)   ;
        
    // Paralell to send all request    
   /*  try {
        for (let index = 2; index < total_pages; index++) {
            //Request images for enQuery to Unsplash
            let response1 = await fetch(unEndPoint + 
                                       '?query=' + enQuery + 
                                       '&client_id=' + unAccesKey +
                                       '&page=' + index);
            let jsonResponse1 = await response1.json();
            console.log("Respuesta completa de Unsplash: index: " + index);
            console.log(jsonResponse1);
            let imagesList1 = await jsonResponse1.results;  
            //createImages(imagesList1);
            
        }    
    } catch (error) {
        console.log('fetch failed', error); 
    }
     */


}




