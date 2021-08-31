pipeline {
    agent any
    stages {
        stage('build-front') {
            steps {
                sh "npm install"
                sh "npm run build"
            }
        } 
    }
}
