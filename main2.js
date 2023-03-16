//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  //const url = 'https://pokeapi.co/api/v2/pokemon/'+choice
  const url = 'https://dog.ceo/api/breed/' + choice + '/images/random'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        //console.log(data.data[1])
        /* let imgurl= data.config.iiif_url
        let imgid=data.data[1].image_id
        let uri=imgurl+'/'+ imgid+'/full/843,/0/default.jpg' */
        //let uri=`${imgurl}${imgid}`
        document.querySelector('img').src= data.message 
//https://dog.ceo/dog-api/documentation/

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}