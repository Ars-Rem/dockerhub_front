pipeline {
    agent any
    stages {
        stage('build-front') {
            steps {
                sh "sudo su"
                sh "sudo npm install"
                sh "npm run build"
                sh "rsync --archive /var/lib/jenkins/workspace/build/ test2@192.168.3.233:/var/www/html/"
            }
        }

        stage('send status') {
            steps {
                sh "echo ok"
            }
        }

        
    } 
}

