import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'
import landing from './landing';

// Contains the value and text for the options
const languages = [
	{ value: 'en', text: "Options" },
	{ value: 'en', text: "English" },
	{ value: 'hi', text: "Hindi" },
	{ value: 'bn', text: "Bengali" },
  {value: 'gu',text:"Gujarati"}
]

function App() {

	// It is a hook imported from 'react-i18next'
	const { t } = useTranslation();

	const [lang, setLang] = useState('en');

	// This function put query that helps to
	// change the language
	const handleChange = e => {
		setLang(e.target.value);
		let loc = "http://localhost:3000/";
		window.location.replace(loc + "?lng=" + e.target.value);
	}

	return (
		<div className="App">

			// we are showing the value by using the
			// keys we have created in the website
			<h1>{t('welcome')}</h1>
			<label>{t('choose')}</label>

      <p>{t('content')}</p>

			<select value={lang} onChange={handleChange}>
				{languages.map(item => {
					return (<option key={item.value}
					value={item.value}>{item.text}</option>);
				})}
			</select>

      <h3>
       {t('name')} : RKy
       
     </h3>

    
		</div>
	);
}

export default App;
