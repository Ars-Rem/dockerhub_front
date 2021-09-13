pipeline {
    agent {
       docker { image 'node:14-alpine' }
    }
    stages {
        stage('build-front') {
            steps {
                sh "sudo su"
                sh "npm install"
                sh "npm run build"
 //               sh "rsync --archive build/* test2@192.168.3.233:/var/www/html"
                //sh "docker build -t docker_front ."
                sh "docker tag 625ad3e9f98f  gsm18/test_html"
                sh "docker push gsm18/test_html"
                
            }
        }

        

        
    } 
}

