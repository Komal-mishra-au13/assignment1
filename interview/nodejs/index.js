import 'isomorphic-fetch';


function info(j) {
    console.log('info');
    console.log(j);
}

function mainFunc(i) {
    fetch('https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=jQuery110201501142482738942_1450853406889&tags=mount+rainier&tagmode=any&format=json&_=1450853406890')
        .then(response => response.json())
        .then(json => i(json))
        .catch(e => i(e))
}

mainFunc(info);
console.log('anything')