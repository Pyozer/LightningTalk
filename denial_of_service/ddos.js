const Stress = require('ddos-stress');

// Run stress on server
new Stress().run('http://192.168.43.45:80', 3000);