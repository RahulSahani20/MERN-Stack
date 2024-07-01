function crateDataFetcher(url){

    return {
        fetchData : function(){
            fetch(url).then((response)=>{
                console.log(response.status)
                return response.json()
            }).then((data)=>{
                console.log(data)
            }).catch((err)=>{
                console.log(err)
            })
        },
        getData: function(){
            return this.fetchData()
        }
    }
}

let dataFetcher = crateDataFetcher("https://jsonplaceholder.typicode.com/users")


dataFetcher.getData()