pipeline {
    agent any
    stages {
        stage('build-front') {
            steps {
                sh "sudo su"
                sh "npm install"
                sh "npm run build"
                sh "ssh test2@192.168.3.233:/var/www/html/ && rm -rf*"
                sh "rsync --archive build/* test2@192.168.3.233:/var/www/html"
                
            }
        }

        

        
    } 
}

