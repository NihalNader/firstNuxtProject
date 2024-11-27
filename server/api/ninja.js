export default defineEventHandler(async(event)=> {
 const {name}=getQuery(event)
 //handle post data

 const{age}=await readBody(event)
return {
    message:`hello,${name},your age ${age}`
}
//const {data}=await $fetch('https://api.currencyapi.com/v3/latest?apikey=eJdPhICJUDBt6B4e4IX6DZ4A9Xos4Z2JRZ8xh2v2')
//return data 
})