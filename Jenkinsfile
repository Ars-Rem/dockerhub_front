pipeline {
    agent any
    stages {
        stage('build-front') {
            steps {
                sh "sudo su"
                sh "npm install"
                sh "npm run build"
 //               sh "rsync --archive build/* test2@192.168.3.233:/var/www/html"
                sh "sudo chmod 666 /var/run/docker.sock"
                
                sh "docker build -t docker_front ."
                sh "docker login"
                sh "docker tag docker_front  gsm18/htm:version:1.0.0"
                sh "docker push docker_front  gsm18/htm:version:1.0.0"
                
            }
        }

        

        
    } 
}

