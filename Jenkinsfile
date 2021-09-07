pipeline {
    agent any
    stages {
        stage('build-front') {
            steps {
                sh "sudo su"
                sh "npm install"
                sh "npm run build"
                sh "rsync --archive build/* test2@192.168.3.233:/var/www/html"
                
            }
        }

        

        
    } 
}

