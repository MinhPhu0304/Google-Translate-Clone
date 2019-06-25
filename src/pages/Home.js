import React, {Component} from 'react';

import AppBar from '../components/AppBar';
import LanguageInput from '../components/LanguageInput';
import TranslatedText from '../components/translatedText';

import axios from 'axios';

class Home extends Component{

    constructor(props){
        super(props);
        
        this.state ={
            wordToTranslate: '',
            waitForTranslate: false,
            languageTranslateTo: '',
            translatedText:'',
            languageList:[]
        }
        this.onChangeLanguageInput = this.onChangeLanguageInput.bind(this);
        this.onClickTranslate = this.onClickTranslate.bind(this);
    }

    componentDidMount(){
        axios.get('/api/availableLanguage')
        .then( res =>{ return res.data})
        .then(data =>{ this.setState({ languageList: data })})
        .catch(err =>{console.error(err)})
    }

    onClickTranslate(e){

        if(this.state.languageTranslateTo !== '' && this.state.wordToTranslate !== ''){
            axios.get('/api/translate',{
                params:{
                    word:this.state.wordToTranslate,
                    language: this.state.languageTranslateTo
                }
            })
            .then( res =>{return res.data})
            .then(data =>{console.log(data[0]); this.setState({translatedText: data},this.stopLoading)})
            .catch(err =>{console.error(err)})  
            this.setState({waitForTranslate: !this.state.waitForTranslate});
        } 
    }

    stopLoading = e =>{
        this.setState({
            waitForTranslate: !this.state.waitForTranslate
        },
            ()=>{
                this.setState({
                    translatedText:this.state.translatedText
        })});
    }

    onChangeLanguageInput(e){
        this.setState({wordToTranslate: e.target.value});
    }

    handleChangeLanguage = (e) =>{
        this.setState({languageTranslateTo: e.target.value})
    }

    render(){
        return(
            <div>
                <AppBar />

                <LanguageInput  onTextToTranslateChange={this.onChangeLanguageInput}
                                onClickTranslate={this.onClickTranslate}
                                WaitForTranstlate={this.state.waitForTranslate}
                                languageList = {this.state.languageList}
                                chosenLanguage = { this.state.languageTranslateTo }
                                handleChangeLanguage = { this.handleChangeLanguage }
                />

                <TranslatedText translatedText={this.state.translatedText}  />

            </div>
        );
    }
}

export default Home;