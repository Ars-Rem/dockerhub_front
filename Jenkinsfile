pipeline {
    agent any
    stages {
        stage('build-front') {
            steps {
                sh "sudo su"
                sh "npm install"
                sh "npm run build"
 //               sh "rsync --archive build/* test2@192.168.3.233:/var/www/html"
                sh "chmod 666 /var/run/docker.sock"
                sh "docker build -t docker_front ."
                //sh "docker tag 625ad3e9f98f  gsm18/test_html"
                //sh "docker push gsm18/test_html"
                
            }
        }

        

        
    } 
}

