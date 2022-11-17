async function getData(){
    const url = 'https://busan-food.openapi.redtable.global/api/menu-dscrn/korean?serviceKey=3cOsoxEnSZYVeTrfKrARQcYYonhykJwpZEurgWtYALHVUijbNn2a5tu7p5V7MIcw'
    const  response = await fetch(url)
    const data = await response.json();
    console.log("data", data);

}
getData();