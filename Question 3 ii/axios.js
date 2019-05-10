const axios= require('axios');




  exports.getPeopleById=function(id){

   return axios({
        method: 'get',
        url: `https://swapi.co/api/people/${id}/`
      }).then(function(res){
    
        // console.log(res.data);

        return {
            id,
            name: res.data.name,
            eyeColor:res.data.eye_color,
            birthYear:res.data.birth_year

        }
    
      }).catch(
          function(err){
              console.log(err);
          }
      )


  }
  exports.getAllPeopleWithBlue=function(){

   return axios({
    method: 'get',
    url: `https://swapi.co/api/people/`
  }).then(function(res){

        let b  = res.data.results.filter((data)=> data.eye_color === "blue");

        let c = b.map((item,index)=>{
        return {
            id:index,
            name: item.name,
            height:item.height,
            gender:item.gender,
    
            }
        

        });

        return c;

  }).catch(
      function(err){
          console.log(err);
      }
  )


  }