import '../styles/main.css'
import '../styles/menu.css'
import '../styles/panel.css'
import '../styles/defeat.css'
import '../styles/victory.css'

import App from 'next/app'

export default class MyApp extends App{

render(): JSX.Element {
    const {Component, pageProps} = this.props;
    return <Component {...pageProps} />
}

}