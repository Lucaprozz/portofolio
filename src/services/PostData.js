export function PostData(type, userData){
    
    let BaseUrl = 'http://localhost/lautro/portofolio/src/system/api/User.php'

    return new Promise((resolve, reject ) => {

        fetch(BaseUrl)
        .then(Response => Response.json())
        .then(function (data){
            console.log(data);
        })
        
    });

}