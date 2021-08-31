pipeline {
    agent any
    options {
        buildDiscarder(logRotator(numToKeepStr:'3'))
        timeout(time: 30, unit: 'MINUTES')
        ansiColor('gnome-terminal')
    }
    stages {
        
         stage ('Build - front') {
            
            steps {
                 sh 'echo front'
                 sh "npm install"
                 sh "npm run build"
                }

            steps("send") {
                sh "rsync --archive /git/react/front-react-coding-challenge-master/ /var/www/html/"
                
            }

         }   