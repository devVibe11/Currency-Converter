let inputAmt=document.getElementById("numericInput");
let convertFrom=document.getElementById("convertfrom");
let convertTo=document.getElementById("convertto");
let submit=document.getElementById("submit");
let =document.getElementById("")


submit.addEventListener("click",async (e)=>{
   e.preventDefault()
   let ia=inputAmt.value.trim()
    if(ia==="" || convertFrom.value=== convertTo.value){
        alert("fill properly")
    }else{
    console.log("working")
    let amt=inputAmt.value;
    console.log(amt)
    let from=convertFrom.value;
    console.log(from)
    let to=convertTo.value;
const url = 'https://community-neutrino-currency-conversion.p.rapidapi.com/conver';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': 'f2a4819fbamshfe3c4b645123068p116598jsnc5a5ca5f42a9',
		'X-RapidAPI-Host': 'community-neutrino-currency-conversion.p.rapidapi.com'
	},
	body: new URLSearchParams({
		'from-value': `${amt}`,
		'from-type': `${from}`,
		'to-type': `${to}`
	})
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}}
}
)
