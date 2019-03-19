const Stress = require('ddos-stress');

// Run stress on server
new Stress().run('http://10.3.2.5:80', 3000);