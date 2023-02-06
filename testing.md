### Postman test cases for different conditions on animelist endpoint -

```js
pm.test("Status code is 200", () => {
    pm.response.to.have.status(200);
});

const response = pm.response.json();

pm.test("Contains Death Note", () => {
    pm.expect(response[0].name).to.equal("Death Note")
})

pm.test("Has more than 5 items", ()=> {
    pm.expect(response.length).to.be.above(5)
})

let horrorAnimeCount=0;
for(let i=0;i<response.length;i++)
    if(response[i].genre==="Horror") horrorAnimeCount++;

pm.test("Has horror animes in list",()=>{
    pm.expect(horrorAnimeCount).to.above(0);
})
```