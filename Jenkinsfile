pipeline {
    agent any
    
    stages {
        stage ('Build - front') {
            steps {
                sh 'echo front'
                sh "sudo npm install"
                sh "npm run build"
            }

            steps("send") {
                sh "rsync --archive /git/react/front-react-coding-challenge-master/build/* /var/www/html/"
                
            }

        }
    }
}
