pipeline {
    agent any
    stages {
        stage('build-front') {
            steps {
                sh "npm install"
                sh "npm run build"
            }

        stage('send') {
            steps {
                sh "rsync --archive /git/react/front-react-coding-challenge-master/build/* test2@192.168.3.233:/var/www/html/"
            }
        }
        } 
    }
}
