const options = {
    bottom: '10px', // default: '32px'
    right: '10px', // default: '32px'
    left: 'unset', // default: 'unset'
    time: '0.3s', // default: '0.3s'
    mixColor: '#ddd', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#121212',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: true, // default: true,
    label: '🌑', // default: ''
    autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();