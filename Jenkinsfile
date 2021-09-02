pipeline {
    agent any
    stages {
        stage('build-front') {
            steps {
                sh "sudo su"
                sh "sudo npm install"
                sh "npm install nodejs"
                sh "npm run build"
                sh "rsync --archive --relative /var/lib/jenkins/workspace/front_test_main/build/* ./test/test/test/ test2@192.168.3.233:/var/www/html/"
            }
        }

        

        
    } 
}

