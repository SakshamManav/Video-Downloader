let input = document.querySelector("#urlInput");
let downloadBtn = document.querySelector(".downloadBtn");
let spinner = document.querySelector(".spinner");
let downlaodMsg = document.querySelector("#downloadMsg");

let spinnerSpin = false;
async function fetchData(videoUrl){
    const url = `https://social-media-video-downloader.p.rapidapi.com/smvd/get/all?url=${videoUrl}`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '059b5de43emshc48aff1cd25f6d2p1d769ejsn4ac05ba68655',
		'x-rapidapi-host': 'social-media-video-downloader.p.rapidapi.com'
	}
};

try {
    if(videoUrl){
    spinnerSpin = true;
    SpinnerFunc();
    const response = await fetch(url, options);
	const result = await response.json();
    spinnerSpin = false;
    SpinnerFunc();
    if(result.message !== null){
        alert("Unsupported url!");   // 
    }

	console.log(result);

    let internalDownload = document.createElement("a");
    internalDownload.href = result.links[1].link;
    internalDownload.click();
    downlaodMsg.style.display = "flex";
    }
    else{
        alert("Invalid Url!");
    }
	
} catch (error) {
	console.error(error);
}

}
function SpinnerFunc(){
    if(spinnerSpin){
        spinner.style.display = "flex";
    }
    else{
        spinner.style.display = "none";
    }
}
downloadBtn.onclick=()=>{
    fetchData(input.value);
    console.log("hello!");
}