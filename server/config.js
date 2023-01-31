const config = {
    local:{
        db:{
            host:"localhost",
            portno:27017,
            dbname:"sanjay",
            
            
        },
        port_no:9000
    }
}
export const get = (env) =>{
    return config [env];
}