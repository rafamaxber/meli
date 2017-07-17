const cluster = require ('cluster');
const os = require('os');
const CPUS = os.cpus();

if (cluster.isMaster) {

  CPUS.forEach(function(){ 
    cluster.fork()
  });

  cluster.on("listening", worker => {
    console.log("cluster %d connected", worker.process.pid);
  });

  cluster.on("disconnect", worker => {
    console.log("cluster %d desconnected", worker.process.pid);
  });

  cluster.on("exit", function(worker)  {
    console.log("cluster %d lost", worker.process.pid);
    cluster.fork();
  });

} else {
  require('./index.js');
}