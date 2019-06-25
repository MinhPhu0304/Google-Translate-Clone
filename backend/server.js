const express = require("express");
const util = require('util');
const request = require("request");
const uuidv4 = require("uuidv4");
const dotenv = require('dotenv').config()


const app = express()
const port = process.env.port|| 3000

var languagueList

const availableLanguage = async () =>{
    let data
    let reqURL = 'https://api.cognitive.microsofttranslator.com/languages?api-version=3.0&scope=translation'
    await request(reqURL, async (err,res,body)=>{
        if (err) console.error(err);
        else{
            let jsonFormatData = JSON.parse(body)
            languagueList = jsonFormatData.translation
        }
        
    })
    return data
}
availableLanguage();

let URLconfig = {

    method:'POST',
    baseUrl:'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0',
    url: 'translate',
    qs: {
        'api-version': '3.0',
        'to': 'it',
    },
    headers: {
        'Ocp-Apim-Subscription-Key': process.env.azureKey,
        'Content-type': 'application/json',
        'X-ClientTraceId': uuidv4().toString()
    },
    body: [{
            'text': '',
    }],
    json: true,
};

app.get('/api/translate',async (req,response) =>{

    let data = new Array();
    let languageCode
    let languageTranslateTo = req.query.language
    let listOfLanguageinString = JSON.stringify(languagueList)
    
    if(listOfLanguageinString.includes(languageTranslateTo)){
        languageCode = Object.keys(languagueList).find( element =>{
            const currentLanguage = languagueList[element]
            return (
                currentLanguage.name.toLowerCase() === languageTranslateTo.toLowerCase()||
                currentLanguage.nativeName.toLowerCase() === languageTranslateTo.toLowerCase()
            )})
    }

    if(languageCode != undefined){
        URLconfig.qs.to = languageCode
    }

    URLconfig.body[0].text = req.query.word;

    try{
        request(URLconfig, (err,res,body) =>{
            if(!err){
                data = extractWordConverted(body)
                response.send(data);
            }
        })
    }
    catch(err){
        console.log(err);
    }
})

app.get('/api/availableLanguage',(req,res)=>{

    if(languagueList === undefined){
        return res.status(404).send('Language list is not available yet');
    }
    var returnData = []
    var arrayOfLanguage = Object.keys(languagueList)

    arrayOfLanguage.forEach(element =>{
        returnData.push(languagueList[element].name)
    })
    res.status(200).send(returnData).end()
})


function extractWordConverted(input){

    let translatedText = new Array();

    for(let i = 0; i < input.length; i++){
    
        let currentTranslation = input[i].translations; 
        
        for(let translatedIndex = 0; translatedIndex < currentTranslation.length; ++translatedIndex){
            translatedText.push(currentTranslation[translatedIndex].text)
        }
    }
    
    return translatedText;
}

app.listen(port);
console.log(`App is running on port ${port}`);