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
                
                sh "docker build -t docker_front:latest ."
                sh "docker container ls -a"
                sh "docker login"
                sh "docker tag 351d8b2ddb8f  gsm18/version:latest"
                sh "docker push  gsm18/version:latest"
                
            }
        }

        

        
    } 
}

